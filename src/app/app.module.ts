import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { BookComponent } from './components/book/book.component';
// import { CartComponent } from './components/cart/cart.component';
// import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BooksModule } from './books/books.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
  BooksModule,
  CartModule,
  OrdersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
