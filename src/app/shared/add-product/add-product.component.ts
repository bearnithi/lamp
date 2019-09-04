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
      { name: 'Property', children: [] },
      { name: 'Plant and Machineries', children: [] },
      { name: 'Vehicles', children: [] },
      { name: 'Jewellery', children: [] },
      { name: 'Equipments', children: [] },
      { name: 'Stock-Lots', children: [] },
      { name: 'Takeover Offers', children: [] },
      { name: 'Others', children: [] }
    ];
  }

}
