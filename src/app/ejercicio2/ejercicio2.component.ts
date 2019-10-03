import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {
  message = false;
  numberArray = [];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.message = !this.message;
    this.numberArray.push(this.numberArray.length + 1);
  }


}
