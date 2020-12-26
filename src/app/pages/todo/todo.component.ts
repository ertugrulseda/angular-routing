import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
	todos: Todo[] = [];
	filteredTodo: Todo[] = [];

	constructor(private route: ActivatedRoute, private http: HttpClient) {}

	ngOnInit(): void {
    let userId = -1;
		this.route.paramMap.subscribe((params) => {
			  userId =Number(params.get('id'));
			this.http.get('https://jsonplaceholder.typicode.com/todos/')
				.subscribe((data: Todo[]) => (this.todos = data));
		});
		this.filteredTodo = this.todos.filter(item=>item.userId === userId);
	}
}
