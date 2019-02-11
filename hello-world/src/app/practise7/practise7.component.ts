import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'practise7',
  templateUrl: './practise7.component.html',
  styleUrls: ['./practise7.component.css']
})
export class Practise7Component implements OnInit {
  categoryList = [
    { id: 0, item: "--Select--" },
    { id: 1, item: "Development" },
    { id: 2, item: "Art" },
    { id: 3, item: "Language" },
  ];

  defaultSelection: number;
  constructor() { }

  ngOnInit() {
    this.defaultSelection = 0;
  }

  textChanged(x) {
    console.log(x);
  }

  submitPractise7(y)
  {
    console.log(y);
  }
}
