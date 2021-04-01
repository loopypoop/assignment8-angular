import { Component, OnInit } from '@angular/core';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any[];

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.dbService.getUsers().subscribe(res => {
      this.users = res;
      console.log('this.users');
      console.log(this.users);
    });
  }

}
