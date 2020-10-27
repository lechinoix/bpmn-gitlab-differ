import { Component, OnInit } from '@angular/core';
import { BPMNDiffService } from '../bpmn-diff.service';

@Component({
  selector: 'app-bpmn-diff-reader',
  templateUrl: './bpmn-diff-reader.component.html',
  styleUrls: ['./bpmn-diff-reader.component.scss']
})
export class BpmnDiffReaderComponent implements OnInit {
  diffList: any[] = [];

  constructor(
    public bpmnDiffService: BPMNDiffService,
  ) { }

  ngOnInit(): void {
    this.bpmnDiffService.diffResult$.subscribe(diffList => {
      this.diffList = diffList.filter(({ changeType, $type }) => changeType !== '_layoutChanged' && $type !== 'bpmn:SequenceFlow');
    });
  }
}
