import { Component, inject, OnInit } from '@angular/core';
import { EmployeeData } from '../../service/employee-data';
import { employee } from '../../Employee';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-list',
    imports: [],
    templateUrl: './employee-list.html',
    styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
    private router = inject(Router);
    EmployeeDataService: EmployeeData = inject(EmployeeData);

    EmployeeData: employee[] = [];

    ngOnInit(): void {
        this.EmployeeDataService.getData();
    }

    onCardClick(id: any) {
        console.log("Navigating with ID:", id);
        this.router.navigate(['/employee-details', id]);
    }
}
