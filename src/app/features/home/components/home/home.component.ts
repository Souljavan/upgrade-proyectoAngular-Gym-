import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1950/500`);
  images = [
    '../../../../../assets/imgs/gimnasio1.jpg',
    '../../../../../assets/imgs/gimnasio2.jpg',
    '../../../../../assets/imgs/gimnasio3.jpg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
