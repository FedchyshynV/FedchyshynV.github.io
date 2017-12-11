import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client.service';
import { Client} from '../client';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-clients-card',
  templateUrl: './clients-card.component.html',
  styleUrls: ['./clients-card.component.css']
})
export class ClientsCardComponent implements OnInit {

  public client: Client;
  public loading = true;

  constructor(private _clientService: ClientService,
              private route: ActivatedRoute,
              private location: Location) {
    this.getClient();
  }
  public getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._clientService.getClient(id).subscribe((client: Client) => {

      this.client = client;
      this.loading = false;
    });
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {

  }

}
