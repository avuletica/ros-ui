import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Subject} from 'rxjs/Subject';
import 'rxjs/operators';

@Injectable()
export class RandomService {

  constructor() {
  }

  /**
   *  This function generates observable with stream of random number. The interval is not disposed
   *  from memory.
   *
   * @param {number} minNumber - Minimal number of range
   * @param {number} maxNumber - Maximal number of range
   * @param {number} tickDelay - Optional parameter to set exact time interval
   *  if tickDelay is left 0, interval is randomized each tick from 300ms to 4s.
   * @returns {Observable<number>}
   */
  public getRandomGeneratorObservable(minNumber: number, maxNumber: number, tickDelay: number = 0) {
    const sub = new Subject<number>();
    const tick = tickDelay === 0 ? RandomService.getRandomDelay() : tickDelay;

    setInterval(
      () => {
        sub.next(RandomService.getRandomNumber(minNumber, maxNumber));
      }, tick);

    return sub.asObservable();
  }

  // your utility functions
  private static getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private static getRandomDelay(): number {
    const max = 4000;
    const min = 200;
    return Math.random() * (max - min) + min;
  }


}
