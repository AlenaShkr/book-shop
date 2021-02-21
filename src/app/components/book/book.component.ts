import { Component, OnInit } from '@angular/core';

import { Category, IBookModel } from '../../models/book-model';

const listOfBooks: IBookModel[] = [
  {
    name: 'The Little Prince',
    description: 'shdklhkjhjgsrhjkahjkrhfjh',
    price: 13.99,
    category: Category.novella,
    createDate: 'April 1943 ',
    isAvailable: true,
  },
  {
    name: 'The Little',
    description: 'shdklhkjhjgsrhjkahjkrhfjh',
    price: 10.99,
    category: 0,
    createDate: 'April 1943 ',
    isAvailable: false,
}
];

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books = listOfBooks;
  constructor() { }

  ngOnInit(): void {
  }

}