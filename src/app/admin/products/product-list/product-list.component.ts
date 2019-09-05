import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  filterObj : any = {};

  constructor(private routes:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.routes.params.subscribe((params:Params)=>{
      if(params['id'] !== undefined){
        this.filterObj['lender'] = params['id'];
       }
    })
  }

  addProperty(){
    
    this.router.navigate(['admin','add-product','add'])
  }

}
