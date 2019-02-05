import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') zipTitle: string
  isExpended: boolean ;

  headingClick() {
    this.isExpended = !this.isExpended;
  }
}
