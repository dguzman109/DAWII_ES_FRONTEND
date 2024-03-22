import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookCreateComponent } from './components/book-create/book-create.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [

  {path:'', redirectTo: 'book', pathMatch:'full'},
  {path:'books',component:BookListComponent},
  {path:'books/id',component:BookDetailsComponent},
  {path:'create',component:BookCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
