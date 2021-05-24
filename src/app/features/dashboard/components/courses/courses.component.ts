import { Component, OnInit } from "@angular/core";
import { courses } from "src/app/shared/mocks/courses";

import { ICardModel } from "src/app/shared/models/card.model";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  courses: ICardModel[];
  constructor() {}

  ngOnInit() {
    this.courses = courses;
  }
}
