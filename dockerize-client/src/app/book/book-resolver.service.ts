import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';

import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take, catchError } from 'rxjs/operators';

import { BookService } from './book.service';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookResolverService implements Resolve<Book> {

  constructor(private cs: BookService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Book | Observable<Book> | Promise<Book> {
    const id = +route.paramMap.get('id');

    return this.cs.getBook(id).pipe(
      take(1),
      mergeMap(crisis => {
        if (crisis) {
          return of(crisis);
        } else { // id not found
          this.router.navigate(['/book']);
          return EMPTY;
        }
        }),
        catchError(() => {
          this.router.navigate(['/book']);
          return EMPTY;
        })
    );
  }
}
