import { Injectable } from '@angular/core';
import { Ticket } from './ticketclass';
import { Ticketdata } from './ticketdata';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  getTicket(): Observable<Ticket[]> {
    return of(Ticketdata);
  }
}


