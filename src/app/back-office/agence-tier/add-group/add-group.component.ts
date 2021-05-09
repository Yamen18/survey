import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/Models/companies/Group';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  @Input() session;
  constructor() { }

  ngOnInit() {
  }

  addNewGroup() {
    let group: Group = new Group();
    this.session.groups.push(group);
  }

  deleteGroup(index: number) {
    this.session.groups.splice(index, 1);
  }

}
