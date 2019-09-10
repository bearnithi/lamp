import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form-group',
  templateUrl: './contact-form-group.component.html',
  styleUrls: ['./contact-form-group.component.scss']
})
export class ContactFormGroupComponent implements OnInit {
  @Input() contactFormGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  get control(): any { return this.contactFormGroup.controls; }

}
