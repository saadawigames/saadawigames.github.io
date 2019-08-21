import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @ViewChild('form') form;
  contactFrom: FormGroup;
  isWaiting: boolean;

  constructor(private http: HttpClient, formBuilder: FormBuilder) {
    this.contactFrom = formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.email],
      'message': ['', Validators.required]
    });
  }

  submit() {
    const params = new HttpParams()
      .append('entry.1971899888', this.contactFrom.get('name').value)
      .append('entry.1287066406', this.contactFrom.get('email').value)
      .append('entry.536931549', this.contactFrom.get('message').value);

    this.isWaiting = true;
    this.http.post('https://docs.google.com/forms/d/e/1FAIpQLSdO2c47ZXtH84X3krTT-ZlTPUwAvjIbBRabYm2FJXxXlLxJZw/formResponse', params)
      .toPromise()
      // .then(value => {
      //   console.log(JSON.stringify(value));
      // })
      // .catch(reason => {
      //   console.log(JSON.stringify(reason));
      // })
      .finally(() => {
        this.isWaiting = false;
        this.form.resetForm();
      });
  }
}
