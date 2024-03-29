import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this.books$ = this.bookService.getBooks();
  }

}
