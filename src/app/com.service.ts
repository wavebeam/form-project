import { Injectable } from '@angular/core';
import { Comdata } from './comdata';
import { Com } from './comclass';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  constructor() { }

  getComdata(): Observable <Com[]> {
    return of(Comdata);
  }

}
