import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Todo } from '../../Todo';

@Component({
    selector: 'app-todo-list',
    imports: [CommonModule],
    templateUrl: './todo-list.html',
    styleUrl: './todo-list.css',
})

export class TodoList {
    @Input() todo!: Todo;
    @Input() i!: number;
    @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
    @Output() todoChecked: EventEmitter<Todo> = new EventEmitter();

    Deactive(todo: Todo) {
        this.todoDelete.emit(todo);
        console.log(todo);
    }

    OnChecked(todo: Todo) {
        console.log(todo);
        this.todoChecked.emit(todo);
    }

}
