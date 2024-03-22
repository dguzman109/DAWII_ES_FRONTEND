import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  currentBook : Book = new Book();
  message = "";

  constructor(
   private bookService : BookService,
   private route : ActivatedRoute,
   private router: Router){}

   ngOnInit(): void {
     this.message = '';
     this.getBook(this.route.snapshot.paramMap.get('id'));
   }
   getBook(id: any): void{
    this.bookService.read(id)
    .subscribe({
      next: (book) => {
        this.currentBook = book
        console.log(book);
      },
      error: (error) => {
        console.log(error);
      }

    })
   }

   updateBook(): void{
    this.bookService.update(this.currentBook.id!, this.currentBook)
    .subscribe({
      next: (response) =>{
        console.log(response);
        this.message = 'the book was updated!'
        this.router.navigate(['/book'])
      },
      error: (error) => {
        console.log(error);
      }

    })
   }
   deleteBook(): void{
    this.bookService.delete(this.currentBook.id!)
    .subscribe({
      next : (response) =>{
        console.log(response);
        this.router.navigate(['/book'])
      },
      error : (error) => {
        console.log(error);
      }

    })

  }
}

