import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterationComponent } from './registeration/registeration.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterationComponent },
  { path: 'admin', component: ListAdminComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
