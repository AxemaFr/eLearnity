import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private http: HttpClient) { }

  /*private courses = [
    {
      courseName: 'How to train your dragon',
      tittle: 'Learn how to handle it!',
      description: 'liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      logoUrl: 'https://cdn.europosters.eu/image/750webp/71605.webp',
      price: '180',
      body: [
        '1234',
        '1234'
      ],
      Author: 'Yann Donon'
    },
    {
      courseName: 'How to train your dragon',
      tittle: 'Learn how to handle it!',
      description: 'liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      logoUrl: 'https://cdn.europosters.eu/image/750webp/71605.webp',
      price: '180',
      body: [
        '1234',
        '1234'
      ],
      Author: 'Yann Donon'
    },
    {
      courseName: 'How to train your dragon',
      tittle: 'Learn how to handle it!',
      description: 'liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      logoUrl: 'https://cdn.europosters.eu/image/750webp/71605.webp',
      price: '180',
      body: [
        '1234',
        '1234'
      ],
      Author: 'Yann Donon'
    },
    {
      courseName: 'How to train your dragon',
      tittle: 'Learn how to handle it!',
      description: 'liqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      logoUrl: 'https://cdn.europosters.eu/image/750webp/71605.webp',
      price: '180',
      body: [
        '1234',
        '1234'
      ],
      Author: 'Yann Donon'
    }
  ];*/
  private courses: any;
  ngOnInit() {
    // this.courses.forEach( (course) => {
    //   this.http.post('http://localhost:8080/course/', course).subscribe( (item) => console.log(item));
    // })
    this.http.get('http://localhost:8080/course/').subscribe( (response) => {
      this.courses = response;
    });
  }


}
