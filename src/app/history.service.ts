import { Injectable } from '@angular/core';
import { History } from './historyclass';
import { Historydata } from './historydata';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

    getHistory(): Observable<History[]> {
      return of(Historydata);
    }
}
