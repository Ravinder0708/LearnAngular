import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "Course Title from folder courses";
  coursesList=["Course1","Course2","Course3"]
  getTitle() {
    return this.title;
  }
  constructor() { }

  ngOnInit() {
  }

}
