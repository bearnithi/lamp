import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchFilters: any = {};
  constructor() { }

  ngOnInit() {
    this.searchFilters = {
      property: [
       { name: 'Property', children: []},
       { name: 'Plant and Machineries', children: []},
       { name: 'Vehicles', children: []},
       { name: 'Jewellery', children: []},
       { name: 'Equipments', children: []},
       { name: 'Stock-Lots', children: []},
       { name: 'Takeover Offers', children: []},
       { name: 'Others', children: []}
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

}
