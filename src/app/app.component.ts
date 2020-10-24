import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BPMNDiffs, GitlabService} from './components/gitlab/gitlab.service';
import {BPMNDiffService} from './components/bpmn/bpmn-diff.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bpmn-gitlab-differ';
  bpmnDiffs: BPMNDiffs = {};
  selectedFilePath: string;
  leftSide = 'left';
  rightSide = 'right';

  get selectedDiff(): [string, string] | null {
    return this.bpmnDiffs.hasOwnProperty(this.selectedFilePath)
      ? this.bpmnDiffs[this.selectedFilePath]
      : ['', ''];
  }

  get availableBpmnFilePaths(): string[] {
    return Object.keys(this.bpmnDiffs);
  }

  constructor(private activatedRoute: ActivatedRoute, private gitlabService: GitlabService, private bpmnDiffService: BPMNDiffService) {
    this.activatedRoute.queryParams.subscribe(params => {
      const { mergeRequestId, projectFullPath } = params;
      if (!!mergeRequestId && !!projectFullPath) {
        this.gitlabService.getBPMNContentsForMergeRequest(projectFullPath, mergeRequestId)
          .subscribe(this.setBpmnDiffs);
      }
    });
  }

  setBpmnDiffs = (bpmnDiffs: BPMNDiffs): void => {
    this.bpmnDiffs = bpmnDiffs;
  }

  changeSelectedFilePath = (filePath: string): void => {
    this.selectedFilePath = filePath;
    this.bpmnDiffService.setBpmns(this.bpmnDiffs[filePath]);
  }
}
