import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import NavigatedViewer from 'bpmn-js/lib/NavigatedViewer';
import { BPMNDiffService } from '../bpmn-diff.service';
import { InteractionEvent } from '../../../bpmnjs.types';

@Component({
  selector: 'app-history-viewer',
  templateUrl: './history-viewer.component.html',
  styleUrls: ['./history-viewer.component.scss']
})
export class HistoryViewerComponent implements AfterViewInit {
  bpmnValue: string;
  historyValue: any = null;

  @Input() set bpmn(value: string) {
    this.bpmnValue = value;
    this.updateViewer(value);
  }

  @Input() set history(value: any) {
    this.historyValue = value;
    this.updateHistory();
  }

  @Output() calledElement = new EventEmitter<string>();

  viewer: any;

  constructor(public bpmnDiffService: BPMNDiffService) {}

  ngAfterViewInit(): void {
    this.viewer = new NavigatedViewer({
      container: `.history-viewer`
    });

    const eventBus = this.viewer.get('eventBus');

    eventBus.on('element.click', (event: InteractionEvent) => {
      if (event.element.type === 'bpmn:CallActivity') {
        this.calledElement.emit(event.element.businessObject.calledElement);
      }
    });
  }

  updateViewer = async (bpmn: string): Promise<void> => {
    if (this.viewer == null) {
      return;
    }
    await this.viewer.importXML(bpmn);
    this.viewer.get('canvas').zoom('fit-viewport');
  };

  updateHistory(): void {
    if (this.historyValue === null) {
      return;
    }

    this.historyValue.forEach(element => {
      const state = element.endTime ? 'finished' : 'started';
      this.applyVisualToElement(element.activityId, state);
    });
  }

  applyVisualToElement = (elementId: string, effectClass: string): void => {
    try {
      this.viewer.get('canvas').addMarker(elementId, effectClass);
    } catch (e) {
      console.warn(e);
    }
  };
}
