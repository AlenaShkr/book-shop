import { Component, Input, OnInit } from '@angular/core';
import { IBookModel } from 'src/app/models/book-model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() bookList: any;

  constructor() {}

  ngOnInit(): void {}
}
