import { Component, OnInit } from '@angular/core';
import { e } from '@angular/core/src/render3';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FoodsService } from '../Services/foods.service';
import { Food } from '../Modals/food';

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
  food : Food;
  selectedIndex : number ;
  mainImage : string = 'assets/img/pates.jpg';
  loaded : boolean = false;
  constructor(private route : ActivatedRoute,
              private foodService : FoodsService) { }

  ngOnInit() {
    this.getFood();
    console.log(this.loaded);
  }

  onClick(image,i) : void {
    this.mainImage = image;
    this.selectedIndex = i;
  }


  getFood() : void {
    this.route.params.pipe(
        switchMap((params : Params ) => {
          return this.foodService.getFood(params['id'])
        }))
        .subscribe(dish => {
          this.food = dish;
          this.images = dish.images;
          this.mainImage = dish.mainImage;
          this.loaded = true;
        },
        error => {

          console.log(error);
        } );
  }


}
