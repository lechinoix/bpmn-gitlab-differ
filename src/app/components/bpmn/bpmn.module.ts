import { NgModule } from '@angular/core';
import { BpmnDiffReaderComponent } from './bpmn-diff-reader/bpmn-diff-reader.component';
import { BpmnViewerComponent } from './bpmn-viewer/bpmn-viewer.component';

@NgModule({
  declarations: [
    BpmnDiffReaderComponent, BpmnViewerComponent
  ],
  exports: [BpmnDiffReaderComponent, BpmnViewerComponent]
})
export class BpmnModule { }
