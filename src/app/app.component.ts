import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IBookModel } from './models/book-model';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bookShop';

  choicedBook: any;

  bookList: Set<Object> = new Set();

  handlerBye(book: any): void {
    this.choicedBook = book;
    this.bookList.add(book);
  }
}
