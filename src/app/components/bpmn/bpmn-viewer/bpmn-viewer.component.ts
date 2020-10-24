import { Component, Input, AfterViewInit } from '@angular/core';
import NavigatedViewer from 'bpmn-js/lib/NavigatedViewer';

@Component({
  selector: 'app-bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.scss']
})
export class BpmnViewerComponent implements AfterViewInit {
  bpmnValue: string;
  @Input() side: 'left' | 'right';
  @Input() set bpmn(value: string) {
    this.bpmnValue = value;
    this.updateViewer(value);
  }
  viewer: any;

  ngAfterViewInit(): void {
    this.viewer = new NavigatedViewer({
      container: `.${this.side}-viewer`
    });
  }

  updateViewer = async (bpmn: string): Promise<void> => {
    if (this.viewer == null) {
      return;
    }
    const { warnings } = await this.viewer.importXML(bpmn);
    console.log('success !', warnings);
    this.viewer.get('canvas').zoom('fit-viewport');
  }
}
