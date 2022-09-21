import { Component, OnInit } from '@angular/core';
import globaldata from 'src/app/data/globaldata';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {
    gender: '',
    country: '',
    firstName: '',
    lastName: ''
  };
  genders = globaldata.GENDERS;
  countries = globaldata.COUNTRIES;
  constructor() { }

  ngOnInit(): void {
  }
  handleRegister(registerForm: any) {
    console.log('form ', this.user, registerForm);
  }
}
