export interface Element {
  labels: any[];
  children: any[];
  id: string;
  type: string;
  collapsed: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  isFrame: boolean;
  businessObject: BusinessObject;
}

export interface BusinessObject {
  $type: string;
  id: string;
  name: string;
  calledElement: string;
}

export interface Gfx {}

export interface DelegateTarget {}

export interface OriginalEvent {
  isTrusted: boolean;
  delegateTarget: DelegateTarget;
}

export interface InteractionEvent {
  element: Element;
  gfx: Gfx;
  originalEvent: OriginalEvent;
  type: string;
}
