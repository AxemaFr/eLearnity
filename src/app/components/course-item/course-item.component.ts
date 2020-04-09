import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input('courseName') nme: string;
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('logoUrl') logoUrl: string;
  @Input('price') price: string;
  @Input('body') body: string;

  constructor() { }

  ngOnInit() {
  }

}
