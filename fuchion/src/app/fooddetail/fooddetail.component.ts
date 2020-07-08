import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FoodsService } from '../Services/foods.service';
import { Food } from '../Modals/food';
import {FormGroup , FormBuilder , Validators} from '@angular/forms';
import { formErrors } from './formErrors';
import { formValidationMessages } from './formValidationMessage';
import { Comment } from '../Modals/comment';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {

  @ViewChild('formComment') formCommentDirective;
  images : string[];
  commentForm : FormGroup;
  food : Food;
  selectedIndex : number ;
  comments : Comment[];
  mainImage : string = 'assets/img/pates.jpg';
  loaded : boolean = false;
  formErrors = formErrors;
  errMess : string;
  errMessComment : string;
  formValidationMessages = formValidationMessages;
  postComment : boolean = false;
  constructor(private route : ActivatedRoute,
              private foodService : FoodsService,
              private formBuilder : FormBuilder) {
                this.createForm();
              }

  ngOnInit() {
    this.getFood();
  }

  onClick(image,i) : void {
    this.mainImage = image;
    this.selectedIndex = i;
  }


  getFood() : void {
    this.food = null;
    this.comments = null;
    this.route.params.pipe(
        switchMap((params : Params ) => {
          return this.foodService.getFood(params['id']);
        }))
        .subscribe(dish => {
          this.food = dish;
          this.images = dish.images;
          this.mainImage = dish.mainImage;
          this.comments = dish.comments;
          this.loaded = true;
        },
        error => {
          this.errMess = error;
        } );
  }

  onSubmit() : void {
    this.food.comments.push(this.commentForm.value);
    this.putFood();
    this.commentForm.reset({
      email : '',
      comment : '',
      date : new Date
    })
    this.formCommentDirective.resetForm();
  }

  createForm() : void {
    this.commentForm = this.formBuilder.group({
      email : ['',[Validators.required,Validators.email]],
      comment : ['',[Validators.required,Validators.minLength(3)]],
      date : new Date()
    })
    this.commentForm.valueChanges
        .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.formValidationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }


  putFood() : void {
    this.postComment = true;
    this.foodService.putFood(this.food)
      .subscribe(food => {
        this.food = food;
        this.postComment = false;
      },
      error => {
        this.errMessComment = error;
      })
  }

}
