import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookShop';
  choicedBook: any;
  handlerBye(book: any): void {
    this.choicedBook = book;
    const offer = [];
    offer.push(book);
    console.log(offer);
  }
}
