import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  url:string ='https://www.youtube.com/embed/t34KNuqcg2w';
  constructor() { }

  ngOnInit(): void {
  }

}
