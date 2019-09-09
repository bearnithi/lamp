import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-search-filter-home',
  templateUrl: './search-filter-home.component.html',
  styleUrls: ['./search-filter-home.component.scss']
})
export class SearchFilterHomeComponent implements OnInit {
  @Input() filterGroup: FormGroup;
  constructor(public validation: ValidationService) { }

  ngOnInit() {
  }

}
