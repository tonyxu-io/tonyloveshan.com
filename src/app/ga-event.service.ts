import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaEventService {

  constructor() { }

  public emitEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {
    (<any>window).ga('send', 'event', {
      eventCategory: eventCategory,
      eventLabel: eventLabel,
      eventAction: eventAction,
      eventValue: eventValue
    });
  }
}
