import { inject, Service } from '@angular/core';
import { employee } from '../Employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Service()
export class EmployeeData {
    employeeData: employee[] = [
        // { id: 101, name: 'kenil pansara', department: 'IT', designation: 'developer', salary: 55000, active: true },
        // { id: 102, name: 'shruti thakkar', department: 'Fainance', designation: 'worker', salary: 25000, active: true },
        // { id: 103, name: 'krishna patel', department: 'HR', designation: 'managment', salary: 35000, active: true },
        // { id: 104, name: 'divya patel', department: 'IT', designation: 'developer', salary: 50000, active: true },
        // { id: 105, name: 'mihir modh', department: 'HR', designation: 'intern', salary: 5000, active: true },
    ]

    private http = inject(HttpClient);

    getData() {
        return this.http.get('http://localhost:5000/api/user').subscribe(data => {
            console.log(data);
        })
    }
}
