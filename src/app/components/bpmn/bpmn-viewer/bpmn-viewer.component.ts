import { Component, Input, AfterViewInit } from '@angular/core';
import NavigatedViewer from 'bpmn-js/lib/NavigatedViewer';
import { BPMNDiffService } from '../bpmn-diff.service';

@Component({
  selector: 'app-bpmn-viewer',
  templateUrl: './bpmn-viewer.component.html',
  styleUrls: ['./bpmn-viewer.component.scss']
})
export class BpmnViewerComponent implements AfterViewInit {
  bpmnValue: string;
  @Input() version: 'old' | 'new';
  @Input() set bpmn(value: string) {
    this.bpmnValue = value;
    this.updateViewer(value);
  }
  viewer: any;

  constructor(
    public bpmnDiffService: BPMNDiffService,
  ) { }

  ngAfterViewInit(): void {
    this.viewer = new NavigatedViewer({
      container: `.${this.version}-viewer`
    });
    this.bpmnDiffService.diffResult$.subscribe(diffResult => {
      if (Array.isArray(diffResult)) {
        diffResult.forEach(({ id, changeType }) => this.applyVisualToElement(id, changeType));
      }
    });
  }

  updateViewer = async (bpmn: string): Promise<void> => {
    if (this.viewer == null) {
      return;
    }
    await this.viewer.importXML(bpmn);
    this.viewer.get('canvas').zoom('fit-viewport');
  }

  applyVisualToElement = (elementId: string, effectClass: string): void => {
    try {
      this.viewer.get('canvas').addMarker(elementId, effectClass);
    } catch (e) {
      console.warn(e);
    }
  }
}
