import { EventEmitter } from 'events'
import { of, interval } from 'rxjs'
import { delay, concatMap } from 'rxjs/operators'

export const emitterA = new EventEmitter()
export const emitterB = new EventEmitter()
export const emitterC = new EventEmitter()
export const emitterD = new EventEmitter()

export const getRandomInteger = (min: number, max: number): number => {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

const createSecuance = (eventEmitter: EventEmitter): void => {
  interval().pipe(concatMap(val => of(val).pipe(delay(getRandomInteger(200, 1500))))).subscribe(() => {
    // emit random data
    eventEmitter.emit('data', getRandomInteger(100, 999));
  });
}

createSecuance(emitterA)
createSecuance(emitterB)
createSecuance(emitterC)
createSecuance(emitterD)