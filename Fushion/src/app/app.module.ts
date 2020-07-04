import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalReserveComponent } from './modal-reserve/modal-reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalReserveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
