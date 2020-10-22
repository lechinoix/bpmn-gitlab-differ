import { Component, Input } from '@angular/core';
import { BPMNDiffService } from '../bpmn-diff.service';

@Component({
  selector: 'bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.scss']
})
export class BpmnViewerComponent {
  @Input() side: 'left' | 'right';

  constructor(
    public bpmnDiffService: BPMNDiffService,
  ) { }

  setBpmnValue(value) {
    this.bpmnDiffService.setBPMN(value, this.side);
  }
}
