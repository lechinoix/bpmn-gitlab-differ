import { Component } from '@angular/core';
import { CamundaService } from '../../camunda/camunda.service';
import { BpmnXmlResponse, ProcessInstance } from '../../camunda/camunda.types';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  bpmn: string = null;
  history: any = null;

  get username(): string {
    return this.camundaService.username;
  }

  setUsername(value: string): void {
    this.camundaService.username = value;
  }

  get password(): string {
    return this.camundaService.password;
  }

  setPassword(value: string): void {
    this.camundaService.password = value;
  }
  get processKey(): string {
    return localStorage.processKey || '';
  }

  setProcessKey(value: string): void {
    localStorage.processKey = value;
  }

  get businessKey(): string {
    return localStorage.businessKey || '';
  }

  setBusinessKey(value: string): void {
    localStorage.businessKey = value;
  }

  constructor(private camundaService: CamundaService) {}

  retrieveInformations(): void {
    this.camundaService
      .retrieveProcessInstance(this.businessKey, this.processKey)
      .subscribe((processInstances: ProcessInstance[]) => {
        this.camundaService.retrieveBpmn(this.processKey).subscribe((xmlResponse: BpmnXmlResponse) => {
          this.bpmn = xmlResponse.bpmn20Xml;
          this.camundaService
            .retrieveExecution(processInstances[0].id)
            .subscribe((execution: any) => (this.history = execution));
        });
      });
  }

  onCalledElement(calledElement: string): void {
    this.setProcessKey(calledElement);
    this.retrieveInformations();
  }
}
