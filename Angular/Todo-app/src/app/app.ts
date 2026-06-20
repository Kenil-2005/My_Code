import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from "./components/todos/todos";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Todos, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Todo-app');
}
