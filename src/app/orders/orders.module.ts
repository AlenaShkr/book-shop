import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './components/orders/orders.component';



@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule
  ],
  exports: [OrdersComponent]
})
export class OrdersModule { }
