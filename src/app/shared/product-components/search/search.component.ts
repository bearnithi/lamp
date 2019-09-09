import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchFilters: any = {};
  @Output() onsearch = new EventEmitter<any>();
  searchForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchFilters = {
      property: [
        { name: 'All', code: '' },
        { name: 'Resential Flat', code: 'Residential-Flat' },
        {
          name: 'Resential House', code: 'Residential-House'
        },
        { name: 'Commercial Building', code: 'Commercial-Building' },
        { name: 'Cars', code: 'Cars' },
        { name: 'Light Commercial Vehicle', code: 'LCV' },
        { name: 'Machinery', code: 'Machinery' },
        { name: 'Equipments', code: 'Equipment' },
        { name: 'Stock-Lots', code: 'Stock-lots' },
        { name: 'Takeover Offers', code: 'Take-Over' }
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

    this.createForm();
  }

  createForm() {
    this.searchForm = this.fb.group({
      assetType: [''],
      'assetDetails.city': [''],
      'assetDetails.state': [''],
      'assetDetails.buildingArea': [''],
      'assetDetails.carpetArea': [''],
      'assetDetails.floorPrice': [''],
      'assetDetails.marketValue': [''],
      'assetDetails.make': [''],
      'assetDetails.model': [''],
      'assetDetails.noOfOwners': [''],
      'assetDetails.variant': ['']
    });
  }

  searchProperties() {
    this.onsearch.emit(this.searchForm.value);
  }

  reset() {
    this.searchForm.reset({
      assetType: '',
      'assetDetails.city': '',
      'assetDetails.state': '',
      'assetDetails.buildingArea': '',
      'assetDetails.carpetArea': '',
      'assetDetails.floorPrice': '',
      'assetDetails.marketValue': '',
      'assetDetails.make': '',
      'assetDetails.model': '',
      'assetDetails.noOfOwners': '',
      'assetDetails.variant': ''
    });

    this.onsearch.emit({});
  }

}
