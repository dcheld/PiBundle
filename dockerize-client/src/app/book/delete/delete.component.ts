import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    this.book$ = this.route.data.pipe(
      map((data: { book: Book }) => data.book)
    );
  }

  delete(book: Book): void {
    this.bookService
      .deleteBook(book.id)
      .subscribe(() => this.router.navigate(['/book']));
  }

}
