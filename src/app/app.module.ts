import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BooksModule } from './books/books.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
  BooksModule,
  CartModule,
  SharedModule,
  AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
