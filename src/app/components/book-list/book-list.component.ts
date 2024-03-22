import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  book: Book [] = [];
  currentBook: Book = new Book();
  currentIndex = -1;
  name='';

  constructor(private bookService: BookService){}
  ngOnInit(): void {
  this.readBook();

  }

  readBook(): void{
       this,this.bookService.readAll()
          .subscribe({
            next: (book) => {
                this.book = book;
                console.log(book);
              },
              error: (error) => {
                console.log(error);
              }

            });

       }
       refresh(): void {
        this.readBook();
        this.currentBook = new Book();
        this.currentIndex = -1;
       }
  setCurrentBook(book:Book, index:number):void {
    this.currentBook = book;
    this.currentIndex = index;
  }

   deleteAllBook(): void{
      this.bookService.deleteAll()
      .subscribe({
        next: (response) => {
          console.log(response);
          this.readBook();
        },
        error: (error) =>{
          console.log(error);
        }
      });
      }
      deleteBook(val:any): void{
        this.bookService.delete(val)
        .subscribe({
          next : (response) =>{
            console.log(response);
            this.readBook();
          },
          error : (error) => {
            console.log(error);
          }

        })

      }
      searchByName():void{
        this.bookService.searchByName(this.name)
        .subscribe({
          next: (book) =>{
          this.book = book;
          console.log(book);
          },
          error: (error) => {
            console.log(error);
          }
        })

      }
   }

