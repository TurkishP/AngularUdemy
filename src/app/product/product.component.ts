import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //@input means it is 'settable' by other components
  @Input() productName: string;

  //object that can emit events as output
  @Output() productClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClicked(){
    this.productClicked.emit();
  }
}
