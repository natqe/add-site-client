import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit {

  windowKeys: string[] = Object.keys(window);

  constructor() { }

  ngOnInit() {
  }

}
