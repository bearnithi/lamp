import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-consultant-main",
  templateUrl: "./consultant-main.component.html",
  styleUrls: ["./consultant-main.component.scss"]
})
export class ConsultantMainComponent implements OnInit {
  menu: any;
  constructor() {}

  ngOnInit() {
    this.menu = [
      {
        name: "Dashboard",
        link: "/consultant/consultant-dashboard"
      },
      {
        name: "Properties",
        link: "/consultant/products"
      }
    ];
  }
}
