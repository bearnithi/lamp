import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-filter-take-over',
  templateUrl: './search-filter-take-over.component.html',
  styleUrls: ['./search-filter-take-over.component.scss']
})
export class SearchFilterTakeOverComponent implements OnInit {
  @Input() filterGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
