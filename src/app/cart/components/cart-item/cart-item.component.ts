import { Component, Input, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { IBookModel } from 'src/app/books/models/book-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() book: IBookModel;
  @Output() deleteRequestEvent = new EventEmitter<IBookModel>();

  count: number = 1;
  buyIsAvailable: boolean;

  constructor( private cartService: CartService) {}

  ngOnInit(): void {
    this.buyIsAvailable = true;
  }

  onAdd() {
    this.count += 1;
    this.increaseQuantity(this.book);
    this.buyIsAvailable = false;
  }

  onDelete() {
    if (this.count > 1) {
      this.count -= 1;
      this.decreaseQuantity(this.book);
    } if (this.count === 1) {
      this.buyIsAvailable = true;
    }
  }

  onDeleteBook(book) {
    this.deleteRequestEvent.emit(book)
  }

  increaseQuantity(book): void {
    this.cartService.increaseQuantity(book);
  }

  decreaseQuantity(book): void {
    this.cartService.decreaseQuantity(book);
  }
}
