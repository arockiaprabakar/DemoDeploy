import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookComponent} from "./book/book.components";
import { HttpModule} from "@angular/http";
import { BookService } from "./book/book.service";

@NgModule({
  declarations: [
    AppComponent,BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpModule, FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
