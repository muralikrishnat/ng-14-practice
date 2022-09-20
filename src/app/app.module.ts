import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comps/home/home.component';
import { RegisterComponent } from './comps/register/register.component';
import { LoginComponent } from './comps/login/login.component';
import { InventoryComponent } from './comps/inventory/inventory.component';
import { GlobalHeaderComponent } from './comps/global-header/global-header.component';
import { AgeValidationDirective } from './directives/age-validation.directive';
import { CalcagePipe } from './pipes/calcage.pipe';
import { AddInventoryComponent } from './comps/add-inventory/add-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    InventoryComponent,
    GlobalHeaderComponent,
    AgeValidationDirective,
    CalcagePipe,
    AddInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
