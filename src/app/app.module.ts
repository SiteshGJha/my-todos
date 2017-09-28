import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';

import { TodoService } from './service/todo-service.service';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms'
import { NavComponent } from './nav/nav.component';
import { UserComponent } from './user/user.component';
import { routing } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ClarityModule.forRoot(),
    routing
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
