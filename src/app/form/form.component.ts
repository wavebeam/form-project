import { Component, OnInit } from '@angular/core';
import { ComService } from '../com.service';
import { Com } from '../comclass';
import { Comdata } from '../comdata';
import { Ticketdata } from '../ticketdata';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticketclass';
// set com: comdata[];
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private comService: ComService, private ticketService: TicketService) {

    }

  ticket: Ticket[];
  com: Com[];
  selectedTicket: number;
  selectedComIndex: Com;
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



}
