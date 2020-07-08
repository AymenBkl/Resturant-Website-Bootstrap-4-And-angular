import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../Services/foods.service';
import { Food } from '../Modals/food';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menuitems',
  templateUrl: './menuitems.component.html',
  styleUrls: ['./menuitems.component.css']
})
export class MenuitemsComponent implements OnInit {


  category : string;
  foods : Food[];
  errMess : string;
  constructor(private foodService : FoodsService,
              private route : ActivatedRoute,
              private router : Router) {
                this.getRouteQuery();
              }

  ngOnInit() {
  }

  getFoods() : void {
    this.foodService.getFoodCategory(this.category).
          subscribe(
            foods => {
              this.foods = foods;
            },
            error => {
              this.errMess = error;
            })
  }

  getRouteQuery() : void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd){
        const url = val.url;
        if (url.includes('#')){
          this.category = url.substring(
            url.lastIndexOf('=')+1,
            url.lastIndexOf('#')
          )
        }
        else {
          this.category = url.substring(
            url.lastIndexOf('=')+1
          )
        }
        if (this.category == '/menu'){
          this.category = "special"
        }
        this.foods = null;
        this.getFoods();
      }
    });
  }

}
