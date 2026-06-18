import { Component } from '@angular/core';

@Component({
    selector: 'app-footer-component',
    imports: [],
    templateUrl: './footer-component.html',
    styleUrl: './footer-component.css',
})
export class FooterComponent {
    FooterData = {
        Name: 'Kenil Pansara',
        Batch: 'Batch-26',
        Year: 2026
    }
}
