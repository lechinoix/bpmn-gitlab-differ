import { Component } from '@angular/core';
import { CamundaService } from '../../camunda/camunda.service';
import { BpmnXmlResponse, Incident, ProcessInstance } from '../../camunda/camunda.types';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  bpmn: string = null;
  processInstance: ProcessInstance = null;
  history: any = null;
  incidents: Incident[];

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
      .subscribe(processInstances => this.handleProcessInstance(processInstances[0]));
  }

  retrieveInformationsWithProcessInstanceId(processInstanceId: string): void {
    this.camundaService
      .retrieveProcessInstanceWithProcessInstanceId(processInstanceId)
      .subscribe(this.handleProcessInstance);
  }

  handleProcessInstance = (processInstance: ProcessInstance) => {
    this.processInstance = processInstance;

    this.setProcessKey(processInstance.processDefinitionKey);

    this.camundaService.retrieveBpmn(this.processKey).subscribe((xmlResponse: BpmnXmlResponse) => {
      this.bpmn = xmlResponse.bpmn20Xml;
      this.camundaService
        .retrieveExecution(processInstance.id)
        .subscribe((execution: any) => (this.history = execution));
      this.camundaService.retrieveIncidents(processInstance.id).subscribe(incidents => (this.incidents = incidents));
    });
  };

  onCalledElement(calledElement: string): void {
    this.setProcessKey(calledElement);
    this.retrieveInformations();
  }

  viewParent = () => {
    this.retrieveInformationsWithProcessInstanceId(this.processInstance.superProcessInstanceId);
  };
}
