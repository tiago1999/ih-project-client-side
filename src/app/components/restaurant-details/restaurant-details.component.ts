import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  @Input() user;


  constructor() { }

  ngOnInit() {

  }

}

