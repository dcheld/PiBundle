import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
};

@Injectable()
export class BookService {
    endpointUrl = 'http://192.168.0.101:57877/api/book';

    constructor(private http: HttpClient) { }

    // GET
    getBooks() {
        return this.http.get<Book[]>(this.endpointUrl);
    }

    // GET
    getBook(id: number) {
        const url = `${this.endpointUrl}/${id}`;
        return this.http.get<Book>(url);
    }

    // POST
    addBook(book: Book) {
        return this.http.post<Book>(this.endpointUrl, book);
    }

    // DELETE
    deleteBook(id: number) {
        const url = `${this.endpointUrl}/${id}`;
        return this.http.delete(url, httpOptions);
    }

    // PUT
    updateBook(id: number, book: Book) {
        const url = `${this.endpointUrl}/${id}`;
        return this.http.put<Book>(url, book, httpOptions);
    }
}