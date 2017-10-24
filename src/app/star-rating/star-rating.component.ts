import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit, OnChanges {

  @Input()
    rating:number;

  @Output()
    ratingChange:EventEmitter<number> = new EventEmitter();

  @Input()
    readOnly:Boolean = true;

  stars: Boolean[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {  // 在ngOnInit前被调用;每次数据变更都会被调用.
    this.stars = [];
    for(let i=1; i<=5; i++){
        this.stars.push(this.rating < i)
    }
  }

  clickStar(index){
    if(!this.readOnly){
      this.rating = index + 1;
      this.ratingChange.emit(this.rating)
    }
  }

}
