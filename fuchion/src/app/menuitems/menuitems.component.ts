import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../Services/foods.service';
import { Food } from '../Modals/food';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit {

  foods : Food[];
  constructor(private foodService : FoodsService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods() : void {
    this.foodService.getFoods().
          subscribe(
            foods => {
              this.foods = foods;
            },
            error => {
              console.log(error);
            })
  }

}
