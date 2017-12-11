import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource , MatSnackBar} from '@angular/material';

import {ClientService} from '../client.service';
import { Client} from "../client";
import {AddClientComponent} from "./add-client/add-client.component";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{
  displayedColumns = ['name', 'phone', 'email', 'dateBirth', 'address', 'gender'];
  dataSource: MatTableDataSource<Client>;
  public clients: Client[];
  public client: Client;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _clientService : ClientService,
              public dialog: MatDialog) {

  }

  public openDialog(): void {
    let dialogRef = this.dialog.open(AddClientComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  public applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  public getClients() {
    this._clientService.getClients.subscribe((clients: Client[]) => {
      this.clients = clients;
      console.log(this.clients);
      this.dataSource = new MatTableDataSource(this.clients);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public ngOnInit(): void {
    this.getClients();
  }
}



