import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { Location} from '@angular/common';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  propertyType: string;
  properties: Array<any> = [];

  constructor() {}

  ngOnInit() {
    this.properties = [
      { name: 'Resential Flat', children: [] },
      { name: 'Resential House', children: [] },
      { name: 'Commercial Building', children: [] },
      { name: 'Cars', children: [] },
      { name: 'Light Commercial Vehicle', children: [] },
      { name: 'Machinery', children: [] },
      { name: 'Equipments', children: [] },
      { name: 'Stock-Lots', children: [] },
      { name: 'Takeover Offers', children: [] }
    ];
  }

}
