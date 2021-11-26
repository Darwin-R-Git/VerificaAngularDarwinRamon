import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.css']
})
export class FourthComponentComponent implements OnInit {
  fourth:string
  constructor() {
    this.fourth = "app"
   }

  ngOnInit(): void {
  }

}
