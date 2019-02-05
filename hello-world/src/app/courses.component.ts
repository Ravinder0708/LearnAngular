import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
})

export class CoursesComponent {
    title = "Course Title from external"
    getTitle() {
        return this.title;
    }
}