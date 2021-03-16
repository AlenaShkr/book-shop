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

  addBook(book: IBookModel): any {
    this.cartProduct = book;
    
    if (!this.bookList.has(this.cartProduct)) {
      this.bookList.add(this.cartProduct);
      this.totalQuantity += 1;
      this.totalSum += this.cartProduct.price;
    }
    
    // this.bookList['totalSum'] = this.totalSum;
    // this.bookList['totalQuant'] = this.totalQuantity;
    // console.log(this.bookList);
    return this.bookList;

  }

  removeBook(book: IBookModel): Set<Object> {
    this.bookList.delete(book);
    this.totalQuantity -= 1;
    this.totalSum -= book.price;
    return this.bookList;

  }

  increaseQuantity(): void {
    this.totalQuantity += 1;
  }

  decreaseQuantity(): void {
    this.totalQuantity -= 1;
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
