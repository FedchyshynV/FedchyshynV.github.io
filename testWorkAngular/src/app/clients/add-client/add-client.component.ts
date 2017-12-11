import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Client} from '../../client';
import {ClientService} from '../../client.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  public client: Client;
  public name: string;
  public gender: string;
  public birthYear: number;
  public  birthMonth: number;
  public birthDay: number;
  public  phone: string;
  public email: string;
  public address: string;


  constructor( public dialogRef: MatDialogRef<AddClientComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private _clientService : ClientService,
               public snackBar: MatSnackBar) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  postClients() {
    let body = {
      name: this.name,
      gender: this.gender,
      birthYear: this.birthYear,
      birthMonth: this.birthMonth,
      birthDay: this.birthDay,
      phone: this.phone,
      email: this.email,
      address: this.address
    };
    this._clientService.postClient(body).subscribe((clients: Client) => {
      this.client = clients;
      this.snackBar.open('The client was added', '', {
        duration: 3000
      });
    });
  }

  ngOnInit() {
  }

}
