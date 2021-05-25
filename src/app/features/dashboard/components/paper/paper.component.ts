import { Component, OnInit } from "@angular/core";

import { questions } from "src/app/shared/mocks/questions";
import { IConfigModel } from "src/app/shared/models/filter-config.model";
import { IQuestionModel } from "src/app/shared/models/question.model";
import { paperForm } from "../../../../shared/mocks/create-paper-form";

@Component({
  selector: "app-paper",
  templateUrl: "./paper.component.html",
  styleUrls: ["./paper.component.scss"],
})
export class PaperComponent implements OnInit {
  questions: IQuestionModel[];
  editPaperModel: IConfigModel[];
  editMode = false;
  paper = {
    title: "Practice Paper 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tagList: ["data-structures", "algorithms"],
    difficulty: 2.3,
    type: "Single Correct Answer",
    author: "Navdeep Singh",
  };

  constructor() {}

  ngOnInit() {
    this.questions = questions;
    this.editPaperModel = paperForm;
  }

  onEditSave() {
    this.editMode = !this.editMode;
  }
}
