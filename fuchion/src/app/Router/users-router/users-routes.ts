import {Routes} from '@angular/router';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ContactusComponent } from 'src/app/contactus/contactus.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { HomeComponent } from 'src/app/home/home.component';



export const routes : Routes = [

  { path : "home" , component : HomeComponent },
  { path : "aboutus" , component : AboutusComponent},
  { path : "contactus", component : ContactusComponent},
  { path : "menu" , component : MenuComponent},
  { path : "menu?category",component : MenuComponent},
  { path : "" , redirectTo : "/home" , pathMatch : "full"}
]
