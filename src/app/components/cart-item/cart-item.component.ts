import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IBookModel } from 'src/app/models/book-model';

@Component({
  selector: 'app-cart-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() book: IBookModel;

  count: number = 1;
  buyIsAvailable: boolean;

  constructor() {}

  ngOnInit(): void {
    this.buyIsAvailable = true;
  }

  Add() {
    this.count += 1;
    this.buyIsAvailable = false;
  }

  Delete() {
    if (this.count > 1) {
      this.count -= 1;
    } if (this.count === 1) {
      this.buyIsAvailable = true;
    }
  }
}
