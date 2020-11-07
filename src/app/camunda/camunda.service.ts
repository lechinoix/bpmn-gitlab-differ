import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BpmnXmlResponse } from './camunda.types';

@Injectable({
  providedIn: 'root'
})
export class CamundaService {
  baseApiUrl = 'https://localhost:8080/workflow/camunda/engine-rest';

  set username(value: string) {
    localStorage.camundaUsername = value;
  }

  get username(): string {
    return localStorage.camundaUsername;
  }

  set password(value: string) {
    localStorage.camundaPassword = value;
  }

  get password(): string {
    return localStorage.camundaPassword;
  }

  constructor(private http: HttpClient) {}

  retrieveBpmn = (definitionKey: string) => {
    return this.http.get<BpmnXmlResponse>(
      `${this.baseApiUrl}/process-definition/key/${definitionKey}/xml`,
      this.getAuthorizationHeaders()
    );
  };

  retrieveExecution = (processInstanceId: string) => {
    return this.http.post<any>(
      `${this.baseApiUrl}/history/activity-instance`,
      { processInstanceId },
      this.getAuthorizationHeaders()
    );
  };

  getAuthorizationHeaders = () => ({
    headers: {
      Authorization: this.getBasicPassword(),
      'x-camunda-auth': 'enabled'
    }
  });

  private getBasicPassword = () => {
    return `Basic ${btoa(this.username + ':' + this.password)}`;
  };
}