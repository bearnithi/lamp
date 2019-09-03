import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-associate-master',
  templateUrl: './associate-master.component.html',
  styleUrls: ['./associate-master.component.scss']
})
export class AssociateMasterComponent implements OnInit {
  users: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.users = [{
      name: 'John',
      role: 'Associate',
      src: 'http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face2.jpg'
    }, {
      name: 'Kevin Paul',
      role: 'Associate',
      src: 'http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face2.jpg'
    }, {
      name: 'Benjamin Clarke',
      role: 'Associate',
      src: 'http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/demo/users/face2.jpg'
    }];
  }

}
