import { Injectable } from '@angular/core';

import { listOfBooks } from '../../shared/books'; 
import { IBookModel } from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: IBookModel[];

  constructor() { }

  getBooks(): IBookModel[] {
    this.books = listOfBooks;
    return this.books;
  }
}
