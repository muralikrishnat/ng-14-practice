import { Component } from '@angular/core';
let toDay = new Date();
toDay.setFullYear(toDay.getFullYear() - 30);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-14-practice';
  dob = toDay;
}
