import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
  users: any = [];
  selectedUser:any;

	constructor(private http: HttpClient) {}

	fetchUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data) => (this.users = data));
  }

  fetchSelectedUsers(id:any) {
    this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
    .subscribe(data => this.selectedUser = data);
  }
  
}
