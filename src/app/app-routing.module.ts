import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "users"
  },
  {
    path: "users",
    component: ListUsersComponent
  },
  {
    path: "users/add",
    component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
