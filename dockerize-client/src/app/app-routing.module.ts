import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DetailComponent } from './book/detail/detail.component';
import { CreateComponent } from './book/create/create.component';
import { DeleteComponent } from './book/delete/delete.component';
import { EditComponent } from './book/edit/edit.component';
import { IndexComponent } from './book/index/index.component';
import { BookResolverService } from './book/book-resolver.service';


const routes: Routes = [
  {
    path: '', component: BookComponent, children: [
      { path: '', component: IndexComponent }
    ]
  },
  {
    path: 'book', component: BookComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'create', component: CreateComponent },
      { path: 'delete/:id', component: DeleteComponent, resolve: { book: BookResolverService }},
      { path: 'detail/:id', component: DetailComponent, resolve: { book: BookResolverService }},
      { path: 'edit/:id', component: EditComponent, resolve: { book: BookResolverService }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
