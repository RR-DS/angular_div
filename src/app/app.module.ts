import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DivModule } from './div';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DivModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
