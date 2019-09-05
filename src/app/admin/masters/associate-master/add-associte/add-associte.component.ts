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
  showLoader: boolean;
  formMessage: string;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private httpHelper: HttpHelperService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.isEdit = params.type === 'edit' || false;
    });
  }

  registration(formData) {
    this.showLoader = true;
    this.httpHelper.getInstance().post('/associates', formData)
      .then((response) => {
        this.showLoader = false;
        this.formMessage = 'User registered successfully';
      })
      .catch((error) => {
        this.showLoader = false;
        this.formMessage = 'Unexpected error occured';
      });

  }





}
