import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.paramMapId();
    this.getBook();
  }

  private paramMapId() {
    this.route.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
    });
  }

  getBook() {
    this.book$ = this.route.data.pipe(
      map((data: { book: Book }) => data.book)
    );
  }

  update(book) {
    this.bookService
      .updateBook(this.id, book)
      .subscribe(() => this.router.navigate(['/book']));
  }
}
