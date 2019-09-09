import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpHelperService } from 'src/app/services/http-helper.service';

@Component({
  selector: 'app-address-group',
  templateUrl: './address-group.component.html',
  styleUrls: ['./address-group.component.scss']
})
export class AddressGroupComponent implements OnInit {
  @Input() addressGroup: FormGroup;
  states: Array<any> = [];
  cities: Array<any> = [];

  constructor(
    private http: HttpHelperService,
  ) { }

  ngOnInit() {
    this.fetchState();
    this.listenForCity();
  }

  get control(): any { return this.addressGroup.controls; }


  fetchState() {
    this.http.getLocalInstance().get('/assets/json/statecity.json').then((res: any) => {
      this.states = res.data.states;
    });
  }

  listenForCity() {
    this.addressGroup.controls.state.valueChanges.subscribe((selectedState: any) => {
      this.cities = this.states.find((state) => state.state === selectedState).districts;
    });
  }
}
