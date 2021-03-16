import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './books/components/book.component';

const routes: Routes = [
  {path: '', redirectTo: 'product-list', pathMatch: 'full'},
  {path: 'product-list', component: BookComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
