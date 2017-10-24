import { Injectable } from '@angular/core';

@Injectable()
export class StockService {

  constructor() { }

  private stocks = [
      new Stock(1, 'Amazon', 70.56, 3.5, 'This is my Amazon stock', ['IT', 'Internet']),
      new Stock(2, 'Microsoft', 130.9, 4.0, 'This is my Microsoft stock', ['IT']),
      new Stock(3, 'Apple', 200.5, 2.5, 'This is my Apple stock', ['IT', 'Internet', 'Analysis']),
      new Stock(4, 'Google', 1.56, 3.5, 'This is my Google stock', ['IT', 'Internet']),
      new Stock(5, 'IBM', 1.56, 4.5, 'This is my IBM stock', ['IT', 'Analysis'])
  ]

  getStockList(){
    return this.stocks
  }

  getStock(id){
    return this.stocks.find(stock => stock.id == id)
  }

}

export class Stock{
  constructor(
              public id:number,
              public name:string,
              public price:number,
              public rating:number,
              public desc:string,
              public categories:Array<string>
  ) { }
}
