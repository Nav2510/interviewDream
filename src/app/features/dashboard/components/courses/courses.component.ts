import { Component, OnInit } from '@angular/core';

import { courses } from '../../../../shared/mocks/courses';
import { ICardModel } from '../../../../shared/models/card.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: ICardModel[];
  constructor() {}

  ngOnInit() {
    this.courses = courses;
  }

  onFilterChange(event: Event): void {
    console.log(event);
  }
}
