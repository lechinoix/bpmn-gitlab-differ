/* eslint @typescript-eslint/no-non-null-assertion: "off" */

import { Injectable } from '@angular/core';
import { concatMap, tap, map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';

import { diff } from 'bpmn-js-differ';
import BpmnModdle from 'bpmn-moddle';

type BPMNMap = {
  right: String,
  left: String
};

@Injectable({
  providedIn: 'root'
})
export class BPMNDiffService {
  bpmnToCompare?: BPMNMap = {left: null, right: null};
  diffResult$: BehaviorSubject<{}> = new BehaviorSubject({});

  async setBPMN(bpmn: String, side: 'left' | 'right'): Promise<void> {
    this.bpmnToCompare[side] = !!bpmn ? await this.parseBpmn(bpmn) : null;
    this.setDiffResult();
  }

  setDiffResult() {
    this.diffResult$.next(Object.values(this.bpmnToCompare).every(Boolean)
      ? diff(...Object.values(this.bpmnToCompare))
      : {}
    );
  }

  parseBpmn(bpmn): Promise<String> {
    return new Promise((resolve, reject) => new BpmnModdle().fromXML(bpmn, {}, (err, element) => {
      if (err) return reject(err);
      resolve(element);
    }))
  }
}
