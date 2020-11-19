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

export interface Incident {
  id: string;
  processDefinitionKey: string;
  processDefinitionId: string;
  processInstanceId: string;
  executionId: string;
  rootProcessInstanceId: string;
  createTime: Date;
  endTime?: any;
  removalTime?: any;
  incidentType: string;
  activityId: string;
  failedActivityId: string;
  causeIncidentId: string;
  rootCauseIncidentId: string;
  configuration: string;
  historyConfiguration: string;
  incidentMessage: string;
  tenantId?: any;
  jobDefinitionId: string;
  open: boolean;
  deleted: boolean;
  resolved: boolean;
}
