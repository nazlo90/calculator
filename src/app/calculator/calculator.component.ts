import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  @Input() firstNumber = 0;
  @Input() secondNumber = 0;
  @Output() counterChange = new EventEmitter();
  counterValue = 0;
  get counter() {
    return this.counterValue;
  }
  set counter(val) {
    this.counterValue = val;
    this.counterChange.emit(this.counterValue);
  }

  constructor() { }
  ngOnInit() {
  }
  add() {
    this.counter = this.firstNumber + this.secondNumber;
  }
  deduct() {
    this.counter = this.firstNumber - this.secondNumber;
  }
  multiply() {
    this.counter = this.firstNumber * this.secondNumber;
  }
  separate() {
    this.counter = this.firstNumber / this.secondNumber;
  }
  getSum() {
    let sum = 0;
    if (this.firstNumber !== undefined && this.secondNumber !== undefined) {
      sum = this.firstNumber + this.secondNumber;
    }
    return sum;
  }
}
