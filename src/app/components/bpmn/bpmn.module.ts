import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BpmnDiffReaderComponent } from './bpmn-diff-reader/bpmn-diff-reader.component';
import { BpmnViewerComponent } from './bpmn-viewer/bpmn-viewer.component';

@NgModule({
  declarations: [
    BpmnDiffReaderComponent, BpmnViewerComponent
  ],
  imports: [MatFormFieldModule, MatInputModule],
  exports: [BpmnDiffReaderComponent, BpmnViewerComponent]
})
export class BpmnModule { }
