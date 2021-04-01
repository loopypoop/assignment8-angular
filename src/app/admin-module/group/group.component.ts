import { Component, OnInit } from '@angular/core';
import {DbService} from '../../db.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: any[];

  constructor(private dbService: DbService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.dbService.getGroups().subscribe(res => {
      this.groups = res;
      console.log('this.groups');
      console.log(this.groups);
    });
  }

}
