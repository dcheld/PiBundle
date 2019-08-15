import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    this.bookService.getBook(this.route.snapshot.params['id'])
      .subscribe(book => this.book = book);
  }

  delete(book: Book): void {
    this.bookService.deleteBook(book.id);
  }

}
