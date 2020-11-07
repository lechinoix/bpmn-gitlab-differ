import { Component } from '@angular/core';
import { CamundaService } from '../../camunda/camunda.service';
import { BpmnXmlResponse } from '../../camunda/camunda.types';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  bpmn: string = null;
  history: any = null;
  processKey = 'ResourceReservationProcess';
  processInstanceId = '4b99be7a-2063-11eb-b69f-0242ac10dd08';

  setUsername(value: string): void {
    this.camundaService.username = value;
  }

  setPassword(value: string): void {
    this.camundaService.password = value;
  }

  setProcessInstanceId(value: string): void {
    this.processInstanceId = value;
  }

  setProcessKey(value: string): void {
    this.processKey = value;
  }

  get username(): string {
    return this.camundaService.username;
  }

  get password(): string {
    return this.camundaService.password;
  }

  constructor(private camundaService: CamundaService) {}

  retrieveInformations(): void {
    this.camundaService.retrieveBpmn(this.processKey).subscribe((xmlResponse: BpmnXmlResponse) => {
      this.bpmn = xmlResponse.bpmn20Xml;
      this.camundaService
        .retrieveExecution(this.processInstanceId)
        .subscribe((execution: any) => (this.history = execution));
    });
  }
}
