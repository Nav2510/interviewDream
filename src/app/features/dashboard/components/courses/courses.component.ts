import { Component, OnInit } from '@angular/core';

import { COURSES } from '../../../../shared/mocks/courses';
import { CardModel } from '../../../../shared/components/card/card.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: CardModel[];

  ngOnInit() {
    this.courses = COURSES;
  }

  onFilterChange(event: Event): void {
    console.log(event);
  }
}
