import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-add-lender',
  templateUrl: './add-lender.component.html',
  styleUrls: ['./add-lender.component.scss']
})
export class AddLenderComponent implements OnInit {
  public isEdit: boolean;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.isEdit = params.type === 'edit' || false;
    });
  }

  registration() {

  }

}
