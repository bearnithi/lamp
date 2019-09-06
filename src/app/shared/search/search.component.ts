import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchFilters: any = {};
  search = new EventEmitter<any>();
  searchForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFilters = {
      property: [
        { name: 'Resential Flat', children: [] },
        { name: 'Resential House', children: [] },
        { name: 'Commercial Building', children: [] },
        { name: 'Cars', children: [] },
        { name: 'Light Commercial Vehicle', children: [] },
        { name: 'Machinery', children: [] },
        { name: 'Equipments', children: [] },
        { name: 'Stock-Lots', children: [] },
        { name: 'Takeover Offers', children: [] }
      ],
      timeOfInclusion: ['Last one week', 'Last one month', 'Last 6 month', 'Last One Year', 'All'],
      budget: [
        'Upto 10 Lakhs',
        '20 Lakhs',
        '30 Lakhs',
        '50 Lakhs',
        '1 - 5 Crores',
        '5 - 10 Crores',
        '10 - 20 Crores'
      ],
      ageOfAsset: [
        'Not more than 2 year old',
        '5 year old',
        '10 year old',
        'Working condition'
      ]
    };
  }

  createForm() {
    this.searchForm  = this.fb.group({
      assetType: [''],
      city: [''],
      state: ['']
    });
  }

}
