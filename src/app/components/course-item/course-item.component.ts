import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input('courseName') name: string;
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('logoUrl') logoUrl: string;
  @Input('price') price: string;
  @Input('body') body: string;
  @Input('Author') Author: string;

  @Input('uid') uid: string;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    console.log(this.uid)
  }

  navigate() {
    this.router.navigate([`course/`, this.uid]);
    document.documentElement.scrollTop = 0;
  }
}
