import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('appTitle') appTitle: any; 

  title = 'bookShop';

  choicedBook: any;

  bookList: Set<Object> = new Set();

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent =  'Book Shop';
  }

  handlerBye(book: any): void {
    this.choicedBook = book;
    this.bookList.add(book);
  }
}
