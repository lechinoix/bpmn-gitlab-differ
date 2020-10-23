import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitlabService } from './components/gitlab/gitlab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bpmn-gitlab-differ';
  leftSide = 'left';
  rightSide = 'right';

  constructor(private activatedRoute: ActivatedRoute, private gitlabService: GitlabService) {
    this.activatedRoute.queryParams.subscribe(params => {
      const { mergeRequestId, projectFullPath } = params;
      if (!!mergeRequestId && !!projectFullPath) {
        this.gitlabService.getBPMNContentsForMergeRequest(projectFullPath, mergeRequestId)
          .subscribe(value => console.log(JSON.stringify(value)));
      }
    });
  }
}
