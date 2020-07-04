import {Routes} from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Component } from '@angular/core';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { HomeComponent } from 'src/app/home/home.component';



export const routes : Routes = [

  { path : "home" , component : HomeComponent },
  { path : "aboutus" , component : AboutusComponent},
  { path : "contacus", component : ContactusComponent},
  { path : "menu" , component : MenuComponent},
  { path : "" , redirectTo : "/home" , pathMatch : "full"}
]
