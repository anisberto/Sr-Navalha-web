import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ads-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dev: string = 'CEO - Developer';

  constructor() { }

  ngOnInit(): void {
  }

}
