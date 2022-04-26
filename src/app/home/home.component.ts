import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myText = "HELLO THERE. MAKE ME RENDER IN LOWER CASE";
  theDate = new Date(2035, 3, 1, 14, 15);
  myTxt = "this title should be in title case";
  constructor() { }

  ngOnInit(): void {
  }

}
