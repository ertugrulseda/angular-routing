import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    ToolbarComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
