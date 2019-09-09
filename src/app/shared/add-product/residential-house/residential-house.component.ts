import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import { Location } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpHelperService } from "src/app/services/http-helper.service";
import { ValidationService } from "src/app/services/validation.service";
import { UUID } from "angular2-uuid";
import { StoreService } from "src/app/services/store.service";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-residential-house",
  templateUrl: "./residential-house.component.html",
  styleUrls: ["./residential-house.component.scss"]
})
export class ResidentialHouseComponent implements OnInit {
  addResendentialPropertyForm: FormGroup;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpHelperService,
    public location: Location,
    public validation: ValidationService,
    public productService: ProductService,
    private store: StoreService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addResendentialPropertyForm = this.fb.group({
      buildInYear: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
      ],
      buildingArea: ["", Validators.required],
      carpetArea: ["", Validators.required],
      guideLineValue: [""],
      marketValue: [""],
      fairRentalValue: [""],
      floorPrice: ['', Validators.required],
      addressLine1: ["", Validators.required],
      addressLine2: [""],
      state: ["", Validators.required],
      city: ["", Validators.required],
      builderCompany: [""],
      builderCity: [""],
      amenties: ["", Validators.required]
    });
  }

  get control(): any {
    return this.addResendentialPropertyForm.controls;
  }

  addProduct(type) {
    let data = {};
    data["assetType"] = type;
    data["assetId"] = UUID.UUID();
    data["assetDetails"] = this.addResendentialPropertyForm.value;

    this.productService
      .saveProductInfo(data)
      .then(response => {
        this.store.showGrowl.next({
          text: "Asset has been saved successfully",
          title: "Success",
          type: "success"
        });
      })
      .catch(error => {
        this.store.showGrowl.next({
          text: "Error while creating asset",
          title: "Error",
          type: "danger"
        });
      });
  }
}
