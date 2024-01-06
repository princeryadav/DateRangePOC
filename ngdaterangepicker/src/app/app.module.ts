import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MydaterangepickerDirective } from './directive/mydaterangepicker.directive';

@NgModule({
  declarations: [
    AppComponent,
    MydaterangepickerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
