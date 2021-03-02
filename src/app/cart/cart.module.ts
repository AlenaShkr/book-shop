import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/components/cart/cart.component';
import { CartItemComponent } from '../cart/components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CartComponent, CartItemComponent]
})
export class CartModule { }
