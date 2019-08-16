import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
  }

  add(title: string, author: string): void {
    title = title.trim();
    author = author.trim();

    if (!title) { return; }

    const newBook: Book = { title, author } as Book;
    this.bookService.addBook(newBook).subscribe(() => this.router.navigate(['/book']));
  }

}
