import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { Location } from '@angular/common';
import { HttpHelperService } from 'src/app/services/http-helper.service';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/shared/dialog-notification-components/confirm-dialog/confirm-dialog.component';
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
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private store: StoreService,
    private httpHelper: HttpHelperService,
    private router: Router) { }

  ngOnInit() {


    this.auctionForm = this.fb.group({
      lenderId: ["", Validators.required],
      assetId: [{ value: '', disabled: true }, Validators.required],
      auctionDate: ["", Validators.required],
      description: [""]
    });

    this.activatedRoute.params.subscribe((params: Params) => {
      this.isEdit = params.type === 'edit' || false;

      if (this.isEdit) {
        this.selectedAuction = this.store.getValue('selected_auction');
        this.auctionForm.patchValue(this.selectedAuction);
      }
    });

    this.fetchLenders();
    this.listenForLender();
  }



  get control(): any {
    return this.auctionForm.controls;
  }

  listenForLender() {
    this.control.lenderId.valueChanges.subscribe((lenderId: any) => {
      this.fetchAssets(lenderId);
    });
  }

  fetchLenders() {
    const qry = { query: { role: 'Lender' } };

    this.httpHelper.find('users', qry)
      .then(res => {
        console.log(res.data);
        this.lenders = res.data || [];
      });
  }

  fetchAssets(lenderId) {
    const qry = { query: { lenderId } };
    this.httpHelper.find('assets', qry).then(res => {
      console.log(res.data);
      this.lenderAsset = res.data;
      this.auctionForm.controls.assetId.enable();
    });
  }

  registerAuction() {
    if (this.isEdit) {
      this.editAuction();
    } else {
      this.addAuction();
    }
  }

  addAuction() {
    this.store.showLoader.next(true);
    this.httpHelper.create('auctions', this.auctionForm.value).then((res: any) => {
      this.onSuccess();
    }).catch((err) => {
      this.onFailure();
    });
  }

  editAuction() {
    this.store.showLoader.next(true);
    this.httpHelper.patch('auctions', this.selectedAuction._id, this.auctionForm.value)
      .then((response: any) => {
        this.onSuccess();
      }).catch((err) => {
        this.onFailure();
      });
  }

  onSuccess() {
    this.store.showLoader.next(false);
    this.store.showGrowl.next({
      text: 'E-Auction has been created successfully',
      title: 'Success',
      type: 'success'
    });
    this.router.navigate(['admin/auctions']);
  }

  onFailure() {
    this.store.showLoader.next(false);

    this.store.showGrowl.next({
      text: 'Error while creating E-Auction',
      title: 'Error',
      type: 'danger'
    });
  }
}
