import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users =[
    {username:"sam", id:12},
    {username:"tommy", id:16}
  ]
  title = 'angular-ngFor-input-decorator-exercise';
}
