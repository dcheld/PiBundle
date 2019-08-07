import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class BookService {
    endpointUrl = 'http://localhost:52208/api/book';

    constructor(private http: HttpClient) { }

    // GET
    getBooks() {
        return this.http.get(this.endpointUrl);
    }

    // GET
    getBook(id: number) {
        const url = `${this.endpointUrl}/${id}`;
        return this.http.get(url);
    }

    // POST
    addBook(book: Book) {
        return this.http.post(this.endpointUrl, book, httpOptions);
    }
}