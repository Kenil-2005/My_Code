import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
    selector: 'app-add-todo',
    imports: [CommonModule, FormsModule],
    templateUrl: './add-todo.html',
    styleUrl: './add-todo.css',
})
export class AddTodo {
    inputTitle?: string;
    inputDesc?: string;

    @Output() addTodo: EventEmitter<Todo> = new EventEmitter();



    OnSubmit() {
        if (this.inputTitle && this.inputDesc) {

            const newTodo: Todo = {
                sno: Date.now(),
                title: this.inputTitle,
                desc: this.inputDesc,
                active: true
            }

            this.addTodo.emit(newTodo)
            this.inputTitle = '';
            this.inputDesc = '';
        }
    }

}
