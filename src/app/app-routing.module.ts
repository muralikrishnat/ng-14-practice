import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './comps/add-inventory/add-inventory.component';
import { HomeComponent } from './comps/home/home.component';
import { InventoryComponent } from './comps/inventory/inventory.component';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'inventory', component: InventoryComponent,
  },
  {
    path: 'inventory/add', component: AddInventoryComponent
  },
  {
    path: 'inventory/edit/:id', component: AddInventoryComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
