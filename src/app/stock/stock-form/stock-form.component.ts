import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  categories = ['IT', 'Internet', 'Analysis'];

  formModel:FormGroup;

  stock: Stock;

  constructor(private routeInfo: ActivatedRoute, private stockService:StockService,
              private router:Router
  ) { }

  ngOnInit() {
    let stockID = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockID);
    if(stockID == 0){
      this.stock = new Stock(0, '', 0, 0, '', [])
    }

    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
      price: [this.stock.price, Validators.required],
      desc: [this.stock.desc],
      categories: fb.array([
          new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
      ])
    })

  }

  cancel(){
    this.router.navigateByUrl('/stock')
  }

  save(){

    let categories_name = [];
    for(let i=0; i<3; i++){
      if(this.formModel.value.categories[i]){
        categories_name.push(this.categories[i])
      }
    }

    this.formModel.value.categories = categories_name;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value)
    // this.router.navigateByUrl('/stock')
  }
}
