import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos:any=[]
  constructor(private http:HttpClient) { }
  fetchTodos(userId){
    this.http.get('https://jsonplaceholder.typicode.com/users/'+userId+'/todos/')
    .subscribe(data => this.todos = data);
  }
}
