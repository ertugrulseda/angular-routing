import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 users:any=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(data =>this.users=data)
  }

}
