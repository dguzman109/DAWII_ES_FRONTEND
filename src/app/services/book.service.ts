import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

const baseURL = 'http://localhost:8080/api/book';

@Injectable({
  providedIn: 'root'
  })
export class BookService {

  constructor(private httpClient: HttpClient) { }
  readAll(): Observable<any>{
    return this.httpClient.get(baseURL);
  }
  read(id: number): Observable<any> {
        return this.httpClient.get(`${baseURL}/${id}`);
  }
  create(data:Book): Observable<any> {
        return this.httpClient.post(baseURL, data);
  }
  update(id:number, data: Book ): Observable<any>{
     return this.httpClient.put(`${baseURL}/${id}`, data);
  }
  delete(id: number): Observable<any> {
        return this.httpClient.delete(`${baseURL}/${id}`);
       }
 deleteAll(): Observable<any> {
        return this.httpClient.delete(baseURL);
      }
 searchByName(title: string): Observable<any> {
       return this.httpClient.get(`${baseURL}?name=${title}`);
      }



}
