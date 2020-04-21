import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  private course;
  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( (params) =>
    {
      this.http.get(`http://localhost:8080/course/${params.id}`).subscribe( (course) => {
        this.course = course;
      })
    })
  }

}
