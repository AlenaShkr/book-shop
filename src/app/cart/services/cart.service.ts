import { Injectable } from '@angular/core';
import { IBookModel } from 'src/app/books/models/book-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProduct: IBookModel;
  totalQuantity: number = 0;
  totalSum: number = 0;

  bookList: Set<Object> = new Set();

  constructor() {}

  addBook(book): Set<Object> {
    this.cartProduct = book;
    this.bookList.add(this.cartProduct);
    this.totalQuantity += 1;
    this.totalSum += this.cartProduct.price;
    console.log(this.totalQuantity, this.totalSum);
    return this.bookList;

  }

  removeBook(book): Set<Object> {
    this.bookList.delete(book);
    this.totalQuantity =- 1;
    this.totalSum =- this.cartProduct.price;
    return this.bookList;

  }

  increaseQuantity(): void {

  }

  decreaseQuantity(): void {

  }

  removeAllBooks(): Set<Object> {
    this.bookList.clear();
    this.totalQuantity = 0;
    this.totalSum = 0;
    return this.bookList;
  }

  updateCartData(): void {

  }
}
