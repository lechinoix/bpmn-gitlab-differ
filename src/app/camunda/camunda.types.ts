export interface BpmnXmlResponse {
  id: string;
  bpmn20Xml: string;
}

export interface ProcessInstance {
  id: string;
  businessKey: string;
  processDefinitionId: string;
  processDefinitionKey: string;
  processDefinitionName: string;
  processDefinitionVersion: number;
  startTime: Date;
  endTime: Date;
  removalTime?: any;
  durationInMillis: number;
  startUserId: string;
  startActivityId: string;
  deleteReason?: any;
  rootProcessInstanceId: string;
  superProcessInstanceId?: any;
  superCaseInstanceId?: any;
  caseInstanceId?: any;
  tenantId?: any;
  state: string;
}
