import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit{
 book={
  title: '',
  author: '',
  published_date: new Date(),
  isbn: 0

 };
 submitted = false;
 constructor(private bookService: BookService){}
 ngOnInit(): void {

 }

 createBook(): void{
  const data = {
    title: this.book.title,
    author: this.book.author,
    published_date: this.book.published_date,
    isbn: Number(this.book.isbn)
    };
    this.bookService.create(data)
      .subscribe({
          next: (response) => {
            console.log(response);
            this.submitted = true;
          },
          error: (error) => {
            console.log(error);
          }

        })

   }
   newBook(): void {
        this.submitted = false;
        this,this.book = {
            title: '',
      author: '',
      published_date: new Date(),
      isbn:0
        };
      }


}
