import { Component, Input, OnInit } from '@angular/core';
import { IBookModel } from 'src/app/models/book-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() book: IBookModel;

  constructor() {}

  ngOnInit(): void {}
}
