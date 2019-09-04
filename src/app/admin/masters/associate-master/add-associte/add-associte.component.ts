import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-add-associte',
  templateUrl: './add-associte.component.html',
  styleUrls: ['./add-associte.component.scss']
})
export class AddAssociteComponent implements OnInit {
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
