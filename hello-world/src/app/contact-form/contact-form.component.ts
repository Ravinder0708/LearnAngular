import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  selectedDefault: number;
  contactList = [
    { id: 0, name: '--Select--' },
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Message' }
  ];
  log(x) {
    console.log(x);
  }

  onSubmission(y) {
    console.log(y);
  }

  ngOnInit() {
    this.selectedDefault = 0;
  }
}
