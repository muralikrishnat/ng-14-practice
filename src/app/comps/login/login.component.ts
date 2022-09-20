import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor() { }

  ngOnInit(): void {
  }
  handleLogin() {
    console.log('login data ', this.username, this.password);
  }

}
