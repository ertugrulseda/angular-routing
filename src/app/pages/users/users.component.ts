import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
	constructor(private usersService: UsersService) {}

	get users() {
		return this.usersService.users;
	}
	ngOnInit(): void {
		this.usersService.fetchUsers();
	}
}
