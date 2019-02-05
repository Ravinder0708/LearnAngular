import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directive-mode',
  templateUrl: './directive-mode.component.html',
  styleUrls: ['./directive-mode.component.css']
})
export class DirectiveModeComponent {

  viewModeInSwitch = "Else"

  switchClicked(value) {
    this.viewModeInSwitch = value;
  }

  courseList =[];
  addDefaultCourse() {
    this.courseList = [
      { id: 1, name: 'Course1 Added' },
      { id: 2, name: 'Course2 Added' },
      { id: 3, name: 'Course3 Added' },
      { id: 4, name: 'Course4 Added' },
      { id: 5, name: 'Course5 Added' },
    ];
  }
  addCourse() {
    let a = this.courseList.length;
    let length = a + 1;
    let name = 'Course' + length + ' Added';
    console.log("Length: " + a + " --Name: " + name);
    this.courseList.push({ id: length, name: 'Course' + length + ' Added' })
  }

  removeCourse(courseId, course) {
    let index = this.courseList.indexOf(course);
    this.courseList.splice(index, 1);
  }

  removeAll() {
    //this.courseList.length = 0;//Clear array
    //this.courseList=[];//Clear array
    this.courseList.splice(0);//Clear array
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
