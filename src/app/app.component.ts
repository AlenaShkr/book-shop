import { Component } from '@angular/core';
import { IBookModel } from './models/book-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bookShop';

  choicedBook: any;

  bookList: IBookModel[] = [];

  handlerBye(book: any): void {
    this.choicedBook = book;
    this.bookList.push(book);
  }
}
