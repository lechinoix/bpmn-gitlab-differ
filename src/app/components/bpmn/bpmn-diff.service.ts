/* eslint @typescript-eslint/no-non-null-assertion: "off" */

import { Injectable } from '@angular/core';
import {BehaviorSubject, forkJoin, from} from 'rxjs';

import { diff } from 'bpmn-js-differ';
import BpmnModdle from 'bpmn-moddle';
import { BPMNDiff } from '../gitlab/gitlab.service';

type Diff = {
  $type: string,
  changeType: string,
  id: string,
  name: string
};

@Injectable({
  providedIn: 'root'
})
export class BPMNDiffService {
  bpmnToCompare?: any[] = [null, null];
  diffResult$: BehaviorSubject<Diff[]> = new BehaviorSubject([]);
  private defaultBpmn = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_16msd5n" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.12.1" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.19.0">
</bpmn:definitions>
`;

  async setBpmns(bpmns: BPMNDiff): Promise<void> {
    if (Object.values(bpmns).every(Boolean)) {
      forkJoin(
        [
          from(this.parseBpmn(bpmns.oldVersion ?? this.defaultBpmn)),
          from(this.parseBpmn(bpmns.newVersion))
        ]
      ).subscribe((parsedBpmns) => {
        this.bpmnToCompare = parsedBpmns;
        this.setDiffResult();
      });
    }
  }

  setDiffResult(): void {
    this.diffResult$.next(this.bpmnToCompare.every(Boolean)
      ? this.getNewDiff()
      : []
    );
  }

  parseBpmn(bpmn): Promise<any> {
    return new Promise((resolve, reject) => new BpmnModdle().fromXML(bpmn, {}, (err, element) => {
      if (err) {
        return reject(err);
      }
      resolve(element);
    }));
  }

  getNewDiff = (): Diff[] => {
    return this.flattenDiffs(diff(...this.bpmnToCompare));
  }

  flattenDiffs(diffResult): any[] {
    const diffList = [];
    for (const changeType of Object.keys(diffResult)) {
      for (const name of Object.keys(diffResult[changeType])) {
        diffList.push({ ...diffResult[changeType][name], changeType, name });
      }
    }
    return diffList;
  }
}
