import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('form') form;
  email = 'saadawigames@gmail.com';
  contactFrom: FormGroup;
  isWaiting: boolean;
  showMore: boolean;

  constructor(private http: HttpClient, formBuilder: FormBuilder, private title: Title, private snackBar: MatSnackBar) {
    this.contactFrom = formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.email],
      'message': ['', Validators.required]
    });
    // this.title.setTitle('Contact');
  }

  submit() {
    const params = new HttpParams()
      .append('entry.1971899888', this.contactFrom.get('name').value)
      .append('entry.1287066406', this.contactFrom.get('email').value)
      .append('entry.536931549', this.contactFrom.get('message').value);

    this.isWaiting = true;
    this.http.post('https://docs.google.com/forms/d/e/1FAIpQLSdO2c47ZXtH84X3krTT-ZlTPUwAvjIbBRabYm2FJXxXlLxJZw/formResponse', params)
      .toPromise()
      .then(value => {
        console.log(JSON.stringify(value));
        this.openSnackBar('Sent');
      })
      // .catch(reason => {
      //   console.log(JSON.stringify(reason));
      // })
      .finally(() => {
        this.isWaiting = false;
        this.form.resetForm();
      });
  }

  show(isActive: boolean) {
    this.showMore = isActive;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'snack'
    });
  }

  // copy(val: string) {
  //   const selBox = document.createElement('textarea');
  //   selBox.style.position = 'fixed';
  //   selBox.style.left = '0';
  //   selBox.style.top = '0';
  //   selBox.style.opacity = '0';
  //   selBox.value = val;
  //   document.body.appendChild(selBox);
  //   selBox.focus();
  //   selBox.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(selBox);
  //   this.openSnackBar('Copied to clipboard');
  // }
}
