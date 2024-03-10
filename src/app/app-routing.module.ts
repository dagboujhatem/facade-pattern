import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserResolver } from './resolvers/user.resolver';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { Page500Component } from './pages/page500/page500.component';
import { Page404Component } from './pages/page404/page404.component';

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
  },
  {
    path: "page404",
    // component: Page404Component // Option 1: Egger loaded 
     // Option 2: lazy loading using Standalone Component 
     loadComponent: () => import('./pages/page404/page404.component').then(c => c.Page404Component) 
  },
  {
    path: "page500",
    // component: Page500Component // Option 1:  Egger loaded
    // Option 2: lazy loading using Standalone Component 
    loadComponent: () => import('./pages/page500/page500.component').then(c => c.Page500Component) 
  },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
