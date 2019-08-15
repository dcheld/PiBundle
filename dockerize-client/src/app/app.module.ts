import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BookComponent } from './book/book.component';
import { DetailComponent } from './book/detail/detail.component';
import { BookService } from './book/book.service';
import { CreateComponent } from './book/create/create.component';
import { DeleteComponent } from './book/delete/delete.component';
import { EditComponent } from './book/edit/edit.component';
import { IndexComponent } from './book/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BookComponent,
    DetailComponent,
    CreateComponent,
    DeleteComponent,
    EditComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
