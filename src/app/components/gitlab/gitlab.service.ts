/* eslint @typescript-eslint/no-non-null-assertion: "off" */

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, forkJoin, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

type MergeRequestBranches = { targetBranch: string, sourceBranch: string };
type Project = { id: string, mergeRequest: MergeRequestBranches };
type Comparison = {
  sourceBranch
  diffs: Diff[]
};
type Diff = {
  old_path: string,
  new_path: string,
  diff: string,
  new_file: boolean,
  renamed_file: boolean,
  deleted_file: boolean
};
export type BPMNDiffs = {
  [filename: string]: [string, string]
};
type GraphQLResponse<T> = { data: T };
type File = { content: string };

@Injectable({
  providedIn: 'root'
})
export class GitlabService {
  private token: string;
  private baseURL: string;
  private options: {};
  public isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('gitToken');
    if (!this.token) {
      console.warn('You should set your gitToken in localStorage using URL param');
    }
    this.options = { headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`) };
  }

  public getBPMNContentsForMergeRequest(repositoryPath: string, mergeRequestId: string): Observable<BPMNDiffs> {
    return this.projectMergeRequest$(repositoryPath, mergeRequestId).pipe(
      tap(() => {
        this.isLoading$.next(true);
      }),
      map(project => ({
        ...project,
        id: /gid:\/\/gitlab\/Project\/(\d+)/.exec(project.id)[1]
      })),
      switchMap(project => forkJoin([
        of(project),
        this.commitsDiff$(project.id, project.mergeRequest.sourceBranch, project.mergeRequest.targetBranch)
      ])),
      switchMap(([project, comparison]) => forkJoin(
        [...comparison.diffs.filter(this.diffIsBPMN).map(diff => forkJoin([
          of(diff.new_path),
          this.fileContent$(project.id, diff.old_path, project.mergeRequest.sourceBranch),
          this.fileContent$(project.id, diff.new_path, project.mergeRequest.targetBranch)
        ])
      )])),
      map((bpmnDiffs) =>
        bpmnDiffs.reduce((acc, [filePath, ...diff]) => ({
          ...acc,
          [filePath]: diff
        }),
        {}
      )),
      tap(() => {
        this.isLoading$.next(false);
      })
  );
  }

  private projectMergeRequest$(repositoryPath: string, mergeRequestId: string): Observable<Project> {
    const query = `
    {
      project (fullPath: "${repositoryPath}") {
        id
        mergeRequest(iid: "${mergeRequestId}") {
          targetBranch
          sourceBranch
        }
      }
    }`;
    return this.http.post<GraphQLResponse<{ project: Project }>>(
      this.baseURL + environment.gitProvider.graphQLPath,
      { query },
      this.options
    ).pipe(map(result => result?.data?.project));
  }

  private commitsDiff$(projectId: string, sourceBranch: string, targetBranch: string): Observable<Comparison> {
    return this.http.get<Comparison>(
      `${this.baseURL}${environment.gitProvider.restPath}/projects/${projectId}/repository/compare?from=${targetBranch}&to=${sourceBranch}`,
      this.options
    );
  }

  private fileContent$(projectId: string, filePath: string, branchName: string): Observable<string> {
   return this.http.get<File>(
     `${this.baseURL + environment.gitProvider.restPath}/projects/${projectId}/repository/files/${encodeURIComponent(filePath)}?ref=${branchName}`,
     this.options
   ).pipe(map(result => atob(result.content)));
  }

  private diffIsBPMN = (diff: Diff) => /(.*)\.bpmn/.test(diff.old_path) && /(.*)\.bpmn/.test(diff.new_path);

  public setbaseURL(baseURL: string): void {
    this.baseURL = baseURL;
  }
}
