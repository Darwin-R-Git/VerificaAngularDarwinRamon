import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent implements OnInit {
  burzum:string
  constructor() {
    this.burzum = "quarto"
   }

  ngOnInit(): void {
  }

}
