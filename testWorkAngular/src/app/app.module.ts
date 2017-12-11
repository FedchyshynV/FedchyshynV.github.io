import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule, MatSortModule, MatTableModule, MatInputModule, MatToolbarModule, MatSnackBarModule,
  MatCardModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatDialogModule, MatSelectModule} from '@angular/material';


import { AppComponent } from './app.component';
import { ClientService } from './client.service';
import { ClientsComponent } from './clients/clients.component';
import { ClientsCardComponent } from './clients-card/clients-card.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddClientComponent } from './clients/add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientsCardComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    HttpModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule
  ],
  entryComponents: [
    AddClientComponent
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
