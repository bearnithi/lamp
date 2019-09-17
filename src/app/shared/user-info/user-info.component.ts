import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() userInfo: any = {};
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() showProperties = new EventEmitter<any>();
  @Output() approve = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  editUser(e) {
    e.preventDefault();
    this.edit.emit(true);
  }

  deleteUser(e) {
    e.preventDefault();
    this.delete.emit(true);
  }

  approveUser(e) {
    e.preventDefault();
    this.approve.emit(true);
  }

}
