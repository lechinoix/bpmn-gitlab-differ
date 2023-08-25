import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BPMNDiffs, BPMNDiff, GitlabService } from '../../components/gitlab/gitlab.service';
import { BPMNDiffService } from '../../components/bpmn/bpmn-diff.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-differ',
  templateUrl: './differ.component.html',
  styleUrls: ['./differ.component.scss']
})
export class DifferComponent {
  bpmnDiffs: BPMNDiffs = {};
  selectedFilePath: string;
  oldVersion = 'old';
  newVersion = 'new';
  pageReady: Observable<boolean>;

  constructor(private activatedRoute: ActivatedRoute, private gitlabService: GitlabService, private bpmnDiffService: BPMNDiffService) {
    this.pageReady = this.gitlabService.isLoading$.pipe(map(isLoading => !isLoading));
    this.activatedRoute.queryParams.subscribe(params => {
      const { mergeRequestId, repositoryPath, gitlabBaseUrl, gitToken } = params;
      if (!!gitToken) {
        this.setGitToken(gitToken);
      }
      if (!!mergeRequestId && !!repositoryPath && !!gitlabBaseUrl) {
        this.gitlabService.setbaseURL(gitlabBaseUrl);
        this.gitlabService.getBPMNContentsForMergeRequest(repositoryPath, mergeRequestId).subscribe(this.setBpmnDiffs);
      }
    });
  }

  get selectedDiff(): BPMNDiff {
    return this.bpmnDiffs.hasOwnProperty(this.selectedFilePath)
      ? this.bpmnDiffs[this.selectedFilePath]
      : { oldVersion: '', newVersion: '' };
  }

  get availableBpmnFilePaths(): string[] {
    return Object.keys(this.bpmnDiffs);
  }

  setBpmnDiffs = (bpmnDiffs: BPMNDiffs): void => {
    this.bpmnDiffs = bpmnDiffs;
  }

  changeSelectedFilePath = (filePath: string): void => {
    this.selectedFilePath = filePath;
    this.bpmnDiffService.setBpmns(this.bpmnDiffs[filePath]);
  }

  setGitToken = (gitToken: string) => {
    localStorage.gitToken = gitToken;
  }
}
