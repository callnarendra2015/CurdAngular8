import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';

/*one link call other link department/show-dep*/
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { AddDepComponent } from './department/add-dep/add-dep.component';

const routes: Routes = [
  {path:"department",component:DepartmentComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"user",component:UserComponent},
  
  /*write proper link department/show-dep then show proper page*/
  {path: 'department/show-dep', component: ShowDepComponent },
  {path: 'department/add-dep', component: AddDepComponent },
  
];

/*const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create' },
  { path: 'create', component: StudentCreateComponent },
  { path: 'edit/:id', component: StudentEditComponent},
  { path: 'list', component: StudentListComponent }  
];*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentComponent,EmployeeComponent]
