import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void{
    this.bookService.getBook(this.route.snapshot.params['id'])
      .subscribe(book => this.book = book);
  }

  update(book) {
    this.bookService.updateBook(book);
  }

}
