import { Component, OnInit } from '@angular/core';
import { e } from '@angular/core/src/render3';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {


  images : string[] = [
    'assets/img/pates.jpg',
    'assets/img/special-buffet.jpeg',
    'assets/img/Brochettes.jpg'
  ];
  selectedIndex : number ;
  mainImage : string = 'assets/img/pates.jpg';
  constructor() { }

  ngOnInit() {
  }

  onClick(image,i) : void {
    this.mainImage = image;
    this.selectedIndex = i;
    console.log(this.selectedIndex);
  }


}
