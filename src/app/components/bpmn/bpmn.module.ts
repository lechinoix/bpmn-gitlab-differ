import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { BpmnDiffReaderComponent } from './bpmn-diff-reader/bpmn-diff-reader.component';
import { BpmnViewerComponent } from './bpmn-viewer/bpmn-viewer.component';
import { HistoryViewerComponent } from './history-viewer/history-viewer.component';

@NgModule({
  imports: [BrowserModule, MatTableModule],
  declarations: [BpmnDiffReaderComponent, BpmnViewerComponent, HistoryViewerComponent],
  exports: [BpmnDiffReaderComponent, BpmnViewerComponent, HistoryViewerComponent]
})
export class BpmnModule {}
