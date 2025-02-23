import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeService } from 'app/service/employe.service';
import { Employe } from 'app/_model/employe';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  submitted = false;
  employee=new Employe();
    constructor(private employeService: EmployeService ,private router: Router) { }
  
    ngOnInit(): void {
    }
    create(): void {
          
       
      this.employeService.saveResource(this.employee)
        .subscribe(
          response => {
            console.log(response);
            this.goToEmployeeList();
          },
          error => {
            console.log(error);
          });
    }
    goToEmployeeList(){
      this.router.navigate(['/employes']);
    }
}
