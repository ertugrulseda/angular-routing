import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: [ './todo.component.scss' ]
})
export class TodoComponent implements OnInit {
	constructor(private route: ActivatedRoute, private todoService: TodosService,private userService:UsersService) {}

	get todos(){
		return this.todoService.todos;
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const  userId =Number(params.get('id'));
			this.todoService.fetchTodos(userId)
			this.userService.fetchSelectedUsers(userId)
		});
	}
}
