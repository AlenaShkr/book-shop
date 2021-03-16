import { Component, OnInit } from '@angular/core';
import { IBookModel } from 'src/app/books/models/book-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  bookList: Set<Object>;
  totalQuantity: number;
  totalSum: number;

  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    this.bookList = this.cartService.bookList;
  }

  ngDoCheck(): void {
    this.totalQuantity = this.cartService.totalQuantity;
    this.totalSum = this.cartService.totalSum;
  }
  handlerDeleteBook(book: any): void {
    this.removeBook(book);
  }

  handlerDeleteAllBook(): void {
    this.removeAllBooks();
  }
  removeBook(book: IBookModel): void {
    this.bookList = this.cartService.removeBook(book);
  }
  removeAllBooks(): Set<Object> {
    this.bookList = this.cartService.removeAllBooks();
    return this.bookList;
  }
}
