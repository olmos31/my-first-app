import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  username = '';

  constructor() { }

  ngOnInit() {
  }
  // onClick(event: any) {
  //   this.username = <HTMLInputElement>(event.target).value;
  // }

}
