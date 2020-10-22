import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { BPMNDiffService } from '../bpmn-diff.service';
import BpmnViewer from 'bpmn-js';

@Component({
  selector: 'bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.scss']
})
export class BpmnViewerComponent implements AfterViewInit {
  @Input() side: 'left' | 'right';
  viewer: any;

  constructor(
    public bpmnDiffService: BPMNDiffService,
  ) { }

  ngAfterViewInit() {
    this.viewer = new BpmnViewer({
      container: `.${this.side}-viewer`
    });
  }

  setBpmnValue(value) {
    this.bpmnDiffService.setBPMN(value, this.side);
    this.updateViewer(value);
  }

  async updateViewer(bpmn) {
    const { warnings } = await this.viewer.importXML(bpmn);
    console.log('success !', warnings);
    this.viewer.get('canvas').zoom('fit-viewport');
  }
}
