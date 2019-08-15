import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DetailComponent } from './book/detail/detail.component';
import { CreateComponent } from './book/create/create.component';
import { DeleteComponent } from './book/delete/delete.component';
import { EditComponent } from './book/edit/edit.component';
import { IndexComponent } from './book/index/index.component';


const routes: Routes = [
  {
    path: '', component: BookComponent, children: [
      { path: '', component: IndexComponent }
    ]
  },
  {
    path: 'book', component: BookComponent, children: [
      { path: '', component: IndexComponent },
      { path: 'create', component: CreateComponent },
      { path: 'delete/:id', component: DeleteComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'edit/:id', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
