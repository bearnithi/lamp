import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-search-filter-cars',
  templateUrl: './search-filter-cars.component.html',
  styleUrls: ['./search-filter-cars.component.scss']
})
export class SearchFilterCarsComponent implements OnInit {
  @Input() filterGroup: FormGroup;
  constructor(private validation: ValidationService) { }

  ngOnInit() {
  }

}
