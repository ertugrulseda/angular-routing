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

	constructor(private route: ActivatedRoute, private http: HttpClient) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const  userId =Number(params.get('id'));
			this.http.get('https://jsonplaceholder.typicode.com/users/'+userId+'/todos/')
				.subscribe((data: Todo[]) => (this.todos = data));
		});
	}
}
