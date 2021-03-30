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
  orderList: Object[] = [];
  constructor() {}

  addBook(book: IBookModel): any {
    this.cartProduct = book;
    
    if (!this.bookList.has(this.cartProduct['id'])) {
      this.cartProduct['count'] = 1;
      this.bookList.add(this.cartProduct['id']);
      this.orderList.push(this.cartProduct);
      this.totalQuantity += 1;
      this.totalSum += this.cartProduct.price;
    }
    return this.orderList;
  }

  removeBook(book: IBookModel): Object[] {
    this.bookList.delete(book['id']);
    const indexBook = this.orderList.indexOf(book);
    this.totalQuantity -= book['count'];
    this.totalSum -= book['count'] * book.price;
    this.orderList.splice(indexBook, 1);
    return this.orderList;
  }

  increaseQuantity(book: IBookModel): void {
    const indexBook = this.orderList.indexOf(book);
    this.orderList[indexBook]['count'] +=1;
    this.totalQuantity += 1;
    this.totalSum += book.price;
  }

  decreaseQuantity(book: IBookModel): void {
    const indexBook = this.orderList.indexOf(book);
    this.orderList[indexBook]['count'] -=1;
    this.totalQuantity -= 1;
    this.totalSum -= book.price;
  }

  removeAllBooks(): Object[] {
    this.bookList.clear();
    this.totalQuantity = 0;
    this.totalSum = 0;
    this.orderList.length = 0;
    return this.orderList;
  }

  updateCartData(): void {

  }
}
