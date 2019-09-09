import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-filter-machinery',
  templateUrl: './search-filter-machinery.component.html',
  styleUrls: ['./search-filter-machinery.component.scss']
})
export class SearchFilterMachineryComponent implements OnInit {
  @Input() filterGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
