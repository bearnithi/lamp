import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.scss']
})
export class AddConsultantComponent implements OnInit {
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
