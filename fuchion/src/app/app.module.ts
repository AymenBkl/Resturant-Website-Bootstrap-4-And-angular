import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalReserveComponent } from './modal-reserve/modal-reserve.component';
import { LogingComponent } from './loging/loging.component';
import { CasouelComponent } from './casouel/casouel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuComponent } from './menu/menu.component';
import { UsersRouterModule } from './Router/users-router/users-router.module';
import { HomeComponent } from './home/home.component';
import { CarouselleadersComponent } from './carouselleaders/carouselleaders.component';
import { MenuitemsComponent } from './menuitems/menuitems.component';
import { FooddetailComponent } from './fooddetail/fooddetail.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodsService } from './Services/foods.service';
import { ProccesHttpMessagesService } from './Services/procces-http-messages.service';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material';
import { baseURL } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ModalReserveComponent,
    LogingComponent,
    CasouelComponent,
    AboutusComponent,
    ContactusComponent,
    MenuComponent,
    HomeComponent,
    CarouselleadersComponent,
    MenuitemsComponent,
    FooddetailComponent,
  ],
  imports: [
    BrowserModule,
    UsersRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule

  ],
  providers: [
    FoodsService,
    ProccesHttpMessagesService,
    {provide : 'baseURL' , useValue : baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
