import { Component, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import NavigatedViewer from 'bpmn-js/lib/NavigatedViewer';
import { BPMNDiffService } from '../bpmn-diff.service';
import { InteractionEvent } from '../../../bpmnjs.types';
import { Incident } from 'src/app/camunda/camunda.types';

@Component({
  selector: 'app-history-viewer',
  templateUrl: './history-viewer.component.html',
  styleUrls: ['./history-viewer.component.scss']
})
export class HistoryViewerComponent implements AfterViewInit {
  bpmnValue: string;
  historyValue: any = null;
  private _incidents: Incident[] = null;

  @Input() set bpmn(value: string) {
    this.bpmnValue = value;
    this.updateViewer(value);
  }

  @Input() set history(value: any) {
    this.clearHistory();
    this.historyValue = value;
    this.updateHistory();
  }

  @Input() set incidents(incidents: Incident[]) {
    this._incidents = incidents;
    this.handleIncidents();
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

  clearHistory = () => {
    if (this.historyValue === null) {
      return;
    }

    this.historyValue.forEach(element => {
      const state = element.endTime ? 'finished' : 'started';
      this.removeVisualToElement(element.activityId, state);
    });
  };

  handleIncidents = () => {
    if (this._incidents == null) {
      return;
    }

    const overlays = this.viewer.get('overlays');

    this._incidents.forEach(incident => {
      if (incident.open) {
        overlays.add(incident.activityId, {
          position: {
            top: -5,
            left: -5
          },
          html: '<div class="incident">!</div>'
        });
      }
    });
  };

  applyVisualToElement = (elementId: string, effectClass: string): void => {
    try {
      this.viewer.get('canvas').addMarker(elementId, effectClass);
    } catch (e) {
      console.warn(e);
    }
  };

  removeVisualToElement = (elementId: string, effectClass: string): void => {
    try {
      this.viewer.get('canvas').removeMarker(elementId, effectClass);
    } catch (e) {
      // noop
    }
  };
}
