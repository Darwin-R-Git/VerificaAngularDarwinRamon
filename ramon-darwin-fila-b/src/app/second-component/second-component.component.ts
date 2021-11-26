import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  burzum:string
  constructor() {
    this.burzum = "secondo"

   }

  ngOnInit(): void {
  }

}
