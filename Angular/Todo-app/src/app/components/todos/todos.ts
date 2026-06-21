import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoList } from "../todo-list/todo-list";
import { AddTodo } from "../add-todo/add-todo";


@Component({
    selector: 'app-todos',
    standalone: true,
    imports: [CommonModule, TodoList, AddTodo],
    templateUrl: './todos.html',
    styleUrl: './todos.css',
})

export class Todos {
    todos: Todo[] = [];

    constructor() {
        this.todos = [
            {
                sno: 1,
                title: "This is Tilte 1",
                desc: "This is desc 1.",
                active: true
            }, {
                sno: 2,
                title: "This is Tilte 2",
                desc: "This is desc 2.",
                active: true
            }, {
                sno: 3,
                title: "This is Tilte 3",
                desc: "This is desc 3.",
                active: true
            }, {
                sno: 4,
                title: "This is Tilte 4",
                desc: "This is desc 4.",
                active: true
            }, {
                sno: 5,
                title: "This is Tilte 5",
                desc: "This is desc 5.",
                active: false
            },
        ]
    }

    // For localstorage but it is restricated
    // constructor() {
    //     const localItem: string | any = localStorage.getItem("todos");

    //     if (localItem === null) {
    //         this.todos = [];
    //     } else {
    //         this.todos = JSON.parse(localItem);
    //     }
    // }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter(t => t.sno !== todo.sno);
        // localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    todoAdd(newTodo: Todo) {
        console.log(newTodo);
        this.todos.push(newTodo);
        // localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    ToggleCheck(todo: Todo) {
        // this.todos = this.todos.map(t => {
        //     if (t.sno === todo.sno) {
        //         return { ...t, active: !t.active };
        //     }
        //     return t;
        // });
        const index = this.todos.indexOf(todo);
        this.todos[index].active = !this.todos[index].active;
        console.log(todo);
    }

}