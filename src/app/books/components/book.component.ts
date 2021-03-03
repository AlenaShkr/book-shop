import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IBookModel } from '../models/book-model';
import { BooksService } from '../services/books.service';
import { CartService } from '../../cart/services/cart.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  //@Output() byeRequestEvent = new EventEmitter<IBookModel>();

  books: IBookModel[];
  book: Set<Object>;

  constructor(private booksService: BooksService, private cartService: CartService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  onBye(book: IBookModel): void {
    //this.byeRequestEvent.emit(book);
    this.addBook(book);

  }

  getBooks(): void {
    this.books = this.booksService.getBooks();
  }

  addBook(book): void {
    this.book = this.cartService.addBook(book);
  }
}
