import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
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
    return this.httpClient.get<Food[]>(baseURL + "foods?category=special");
  }
}
