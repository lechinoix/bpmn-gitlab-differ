import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BpmnDiffReaderComponent } from './bpmn-diff-reader/bpmn-diff-reader.component';
import { BpmnViewerComponent } from './bpmn-viewer/bpmn-viewer.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    BpmnDiffReaderComponent, BpmnViewerComponent
  ],
  exports: [BpmnDiffReaderComponent, BpmnViewerComponent]
})
export class BpmnModule { }
