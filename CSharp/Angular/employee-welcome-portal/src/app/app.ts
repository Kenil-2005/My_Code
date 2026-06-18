import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header-component/header-component";
import { FooterComponent } from "./component/footer-component/footer-component";
import { EmployeeComponent } from "./component/employee-component/employee-component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, EmployeeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('employee-welcome-portal');
}
