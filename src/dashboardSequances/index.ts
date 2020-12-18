import { Subject, of, pipe, combineLatest } from 'rxjs'
import { repeat, timeout, auditTime, catchError } from 'rxjs/operators';

// set "no data" if the sequance has not been updated for a certain period
export const commonPipe = pipe(timeout(1500),
  catchError(() => of('no data')),
  repeat()
)

// init sensor sequances
export const sequanceA = new Subject().pipe(commonPipe) as any
export const sequanceB = new Subject().pipe(commonPipe) as any
export const sequanceC = new Subject().pipe(commonPipe) as any
export const sequanceD = new Subject().pipe(commonPipe) as any

// combine results from all sensors
export const mainSequance = combineLatest([sequanceA, sequanceB, sequanceC, sequanceD]).pipe(auditTime(200)) as any