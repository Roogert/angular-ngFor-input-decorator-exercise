import { Component, Input, OnInit } from '@angular/core';
import { sample } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input('personInfo') userInfo: {username: string; id: number} ;
  constructor() { }

  ngOnInit(): void {
  }

}
