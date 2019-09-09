import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-filter-stock-lots',
  templateUrl: './search-filter-stock-lots.component.html',
  styleUrls: ['./search-filter-stock-lots.component.scss']
})
export class SearchFilterStockLotsComponent implements OnInit {
  @Input() filterGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
