/* eslint @typescript-eslint/no-non-null-assertion: "off" */

import { Injectable } from '@angular/core';
import {BehaviorSubject, forkJoin, from} from 'rxjs';

import { diff } from 'bpmn-js-differ';
import BpmnModdle from 'bpmn-moddle';

@Injectable({
  providedIn: 'root'
})
export class BPMNDiffService {
  bpmnToCompare?: any[] = [null, null];
  diffResult$: BehaviorSubject<{}> = new BehaviorSubject({});

  async setBpmns(bpmns: [string, string]): Promise<void> {
    if (bpmns.every(Boolean)) {
      forkJoin(
        bpmns.map((bpmn) => from(this.parseBpmn(bpmn)))
      ).subscribe((parsedBpmns) => {
        this.bpmnToCompare = parsedBpmns;
        this.setDiffResult();
      });
    }
  }

  setDiffResult(): void {
    this.diffResult$.next(this.bpmnToCompare.every(Boolean)
      ? diff(...this.bpmnToCompare.reverse())
      : {}
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
}
