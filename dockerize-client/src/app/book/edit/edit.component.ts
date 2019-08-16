import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';

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
    this.getBook();
  }

  getBook(): void{
    this.id = this.route.snapshot.params['id'];
    this.book$ = this.bookService.getBook(this.id);
  }

  update(book) {
    this.bookService
      .updateBook(this.id, book)
      .subscribe(() => this.router.navigate(['/book']));
  }

}
