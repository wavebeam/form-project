import { Component, OnInit } from '@angular/core';
import { ComService } from '../com.service';
import { Comdata } from '../comdata';
import { Ticketdata } from '../ticketdata';
import { TicketService } from '../ticket.service';
import { Historydata } from '../historydata';
import { HistoryService } from '../history.service';

// set com: Comdata[];
// set ticket: Ticketdata[];

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private comService: ComService,
              private ticketService: TicketService,
              private historyService: HistoryService) {

    }

  ticket = Ticketdata;
  com = Comdata;
  history = Historydata;
  selectedTicket: number;
  selectedMachine: string;
  selectedLocation: string;


  ngOnInit() {
    this.getTicket();
    this.getCom();
    }

  getTicket(): void {
    this.ticketService.getTicket()
      .subscribe(ticket => this.ticket = ticket);
  }

  getCom(): void {
      this.comService.getComdata()
        .subscribe(com => this.com = com);
  }

  getHistory(): void {
      this.historyService.getHistory();
  }



}
