import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
declare var $: any;
@Component({
  selector: 'app-growl',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.scss']
})
export class GrowlComponent implements OnInit {
  constructor(private store: StoreService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.store.showGrowl.subscribe((config) => {
      $.jGrowl(config.text, {
        header: config.title,
        theme: `bg-${config.type}`
    });
    });
  }
}
