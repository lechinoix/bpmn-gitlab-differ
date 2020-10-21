import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnDiffReaderComponent } from './bpmn-diff-reader.component';

describe('BpmnDiffReaderComponent', () => {
  let component: BpmnDiffReaderComponent;
  let fixture: ComponentFixture<BpmnDiffReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmnDiffReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmnDiffReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
