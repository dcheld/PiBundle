import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DetailComponent } from './book/detail/detail.component';


const routes: Routes = [
  {
    path: '', component: BookComponent
  },
  {
    path: 'book', component: BookComponent, children: [
      { path: '', component: BookComponent },
      { path: 'detail/:id', component: DetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
