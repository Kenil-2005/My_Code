import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
    selector: 'app-todo-list',
    imports: [],
    templateUrl: './todo-list.html',
    styleUrl: './todo-list.css',
})

export class TodoList {
    todos: Todo[] | undefined;

}
