import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {
  third:string
  constructor() { 
    this.third = "app"
  }

  ngOnInit(): void {
  }

}
