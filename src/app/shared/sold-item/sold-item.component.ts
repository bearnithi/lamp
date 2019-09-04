import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sold-item',
  templateUrl: './sold-item.component.html',
  styleUrls: ['./sold-item.component.scss']
})
export class SoldItemComponent implements OnInit {
  @Input() soldInfo: any = {};
  constructor() { }

  ngOnInit() {
  }

}
