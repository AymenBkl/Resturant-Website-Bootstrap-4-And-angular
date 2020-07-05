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
  ],
  imports: [
    BrowserModule,
    UsersRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
