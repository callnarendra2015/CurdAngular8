import { Component } from '@angular/core';
import {DepartmentsService} from './departments.service';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DepartmentsService]
})
export class AppComponent {
  title = 'Angular8demo Curd opration with WebApi2';
 
  text:string;
  
  posts = [];
  constructor(private _departmentService:DepartmentsService){}
ngOnInit()
{
  this.text=this._departmentService.display();
}
 
}
