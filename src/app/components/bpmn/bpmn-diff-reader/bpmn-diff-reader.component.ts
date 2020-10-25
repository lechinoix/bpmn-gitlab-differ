import { Component, OnInit } from '@angular/core';
import { BPMNDiffService } from '../bpmn-diff.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-bpmn-diff-reader',
  templateUrl: './bpmn-diff-reader.component.html',
  styleUrls: ['./bpmn-diff-reader.component.scss']
})
export class BpmnDiffReaderComponent implements OnInit {
  diffList: any[];

  constructor(
    public bpmnDiffService: BPMNDiffService,
  ) { }

  ngOnInit(): void {
    this.bpmnDiffService.diffResult$.pipe(
      map(diffResult => this.flattenDiffs(diffResult))
    ).subscribe(diffList => {
      console.log('diffList', diffList);
      this.diffList = diffList;
    });
  }

  flattenDiffs(diffResult): any[] {
    const diffList = [];
    for (const changeType of Object.keys(diffResult)) {
      for (const name of Object.keys(diffResult[changeType])) {
        diffList.push({ ...diffResult[changeType][name], changeType, name });
      }
    }
    return diffList;
  }
}
