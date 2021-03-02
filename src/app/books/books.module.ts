import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book.component';
import { SharedModule } from '../shared/shared.module';
import { BooksService } from './services/books.service';



@NgModule({
  declarations: [BookComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [BooksService],
  exports: [BookComponent]
})
export class BooksModule { }
