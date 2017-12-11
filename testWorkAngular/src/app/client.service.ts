import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {MatSnackBar} from '@angular/material';

import { Client} from "./client";
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ClientService {
  domain: string = 'http://api.demo.lakmus.org/api';


  public constructor( private _http: Http,
                      public snackBar: MatSnackBar) { }

  public get getClients(): Observable<Client[]> {
    return this._http.get(`${this.domain}/clients/`)
      .map((res: Response) => res.json(),
        catchError(this.handleError('getClients', [])));
  }
  public getClient(id: number): Observable<Client> {
    return this._http.get(`${this.domain}/clients/${id}/`)
      .map((res: Response) => res.json(),
        catchError(this.handleError('getClient id=${id}', [])));
  }
  public postClient(body: any): Observable<Client> {
    return this._http.post(`${this.domain}/clients/`, JSON.stringify(body), httpOptions )
      .map((res: Response) => res.json(),
        catchError(this.handleError('getClient id=${id}', [])));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.snackBar.open('Error server', '', {
        duration: 3000
      });
      return of(result as T);
    };
  }


}
