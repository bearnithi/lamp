import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Location } from '@angular/common';

@Component({
  selector: "app-add-auction",
  templateUrl: "./add-auction.component.html",
  styleUrls: ["./add-auction.component.scss"]
})
export class AddAuctionComponent implements OnInit {
  auctionForm: FormGroup;
  lenders: Array<any> = [];
  assets: Array<any> = [];
  lenderAsset: Array<any> = [];
  isEdit: boolean;
  selectedAuction: any = {};
  constructor(private fb: FormBuilder,
              public location: Location,
              private activatedRoute: ActivatedRoute,
              private store: StoreService) {}

  ngOnInit() {


    this.auctionForm = this.fb.group({
      lenderId: ["", Validators.required],
      assetId: [{value: '', disabled: true}, Validators.required],
      auctionDate: ["", Validators.required],
      description: [""]
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.isEdit = params.type === 'edit' || false;

      if (this.isEdit) {
        this.selectedAuction = this.store.getValue('selected_auction');
      }
    });

    this.fetchLenders();
    this.fetchAssets();
    this.listenForLender();
  }

  get control(): any {
    return this.auctionForm.controls;
  }

  listenForLender() {
    this.control.lenderId.valueChanges.subscribe((lenderId: any) => {
      this.lenderAsset = this.assets.filter((asset) => asset.lenderId === lenderId);
      this.auctionForm.controls.assetId.enable();
    });
  }

  fetchLenders() {
    this.lenders = [
      {
        _id: '1',
        bankName: "Indian Bank"
      },
      {
        _id: '2',
        bankName: "Indian Overseas Bank"
      },
      {
        _id: '3',
        bankName: "State Bank"
      },
      {
        _id: '4',
        bankName: "Canara Bank"
      }
    ];
  }

  fetchAssets() {
    this.assets = [
      {
        lenderId: '1',
        assetType: "Residential Home",
        assetDetails: {
          city: "Tirunelveli"
        }
      },
      {
        lenderId: '2',
        assetType: "Residential Flat",
        assetDetails: {
          city: "Tirunelveli"
        }
      },
      {
        lenderId: '3',
        assetType: "Commercial",
        assetDetails: {
          city: "Tirunelveli"
        }
      }
    ];
  }
}
