import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sold-list',
  templateUrl: './sold-list.component.html',
  styleUrls: ['./sold-list.component.scss']
})
export class SoldListComponent implements OnInit {
  @Input() soldList: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

}
