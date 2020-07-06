import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { ProccesHttpMessagesService } from './procces-http-messages.service';
import { Observable  } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Food } from '../Modals/food';
import { baseURL } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor(private httpClient : HttpClient,
              private proccesHttpMessage : ProccesHttpMessagesService) { }


  getFoods() : Observable<Food[]> {
    return this.httpClient.get<Food[]>(baseURL + "foods")
    .pipe(catchError(this.proccesHttpMessage.handleError));
  }

  getFoodCategory() : Observable<Food[]> {
    return this.httpClient.get<Food[]>(baseURL + "foods?category=special")
    .pipe(catchError(this.proccesHttpMessage.handleError));

  }

  getFood(id : string) : Observable<Food> {
    return this.httpClient.get<Food>(baseURL + "foods/" +id)
          .pipe(catchError(this.proccesHttpMessage.handleError));
  }

  putFood(food : Food) : Observable<Food> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.put<Food>(baseURL + "foods/" + food.id , food , httpOptions )
        .pipe(catchError(this.proccesHttpMessage.handleError));
  }
}
