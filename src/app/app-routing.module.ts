import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserResolver } from './resolvers/user.resolver';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "users"
  },
  {
    path: "users",
    component: ListUsersComponent, 
    resolve: {
      travels: UserResolver  // on associe un resolver à la route
    },
  },
  {
    path: "users/add",
    component: AddUserComponent
  },
  {
    path: "users/update/:id",
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
