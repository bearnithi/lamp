import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-associte',
  templateUrl: './add-associte.component.html',
  styleUrls: ['./add-associte.component.scss']
})
export class AddAssociteComponent implements OnInit {
  public isEdit: boolean;
  addAssociateForm: FormGroup;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.createForm();

    this.activatedRoute.params.subscribe((params: Params) => {
      this.isEdit = params.type === 'edit' || false;

      if (this.isEdit) {
        this.addAssociateForm.controls.email.disable();
      }
    });
  }

  createForm() {
    this.addAssociateForm = this.fb.group({
      userType: ['Associate'],
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')
      ]],
      address1: ['', Validators.required],
      address2: [''],
      street: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  get control(): any { return this.addAssociateForm.controls; }

  registration() {

  }

}
