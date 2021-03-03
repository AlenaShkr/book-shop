import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IBookModel } from '../models/book-model';
import { BooksService } from '../services/books.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Output() byeRequestEvent = new EventEmitter<IBookModel>();

  books: IBookModel[];
  
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
  }

  onBye(book: IBookModel): void {
    this.byeRequestEvent.emit(book);
  }
}
