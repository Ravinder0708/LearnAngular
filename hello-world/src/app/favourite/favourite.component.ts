import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
@Input() isFavourite:boolean;
  constructor() { }

  ngOnInit() {
  }
onFavouriteClick()
{
  this.isFavourite=!this.isFavourite;
}
}
