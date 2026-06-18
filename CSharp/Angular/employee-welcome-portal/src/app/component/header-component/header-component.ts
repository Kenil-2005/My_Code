import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-header-component',
    imports: [],
    templateUrl: './header-component.html',
    styleUrl: './header-component.css',
})
export class HeaderComponent {
    HeaderData = {
        Logo: 'Dev.',
        Name: 'Stridely Solution',
        Title: 'Employee Managment portal'
    };
}
