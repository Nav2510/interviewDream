import { Component, OnInit } from '@angular/core';

import { paperForm } from '../../../../shared/mocks/create-paper-form';
import { questions } from '../../../../shared/mocks/questions';
import { ConfigModel } from '../../../../shared/components/dynamic-form/config.model';
import { QuestionModel } from '../../../../shared/components/question-card/question.model';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss'],
})
export class PaperComponent implements OnInit {
  questions: QuestionModel[];
  editPaperModel: ConfigModel[];
  editMode = false;
  paper = {
    title: 'Practice Paper 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['data-structures', 'algorithms'],
    difficulty: 2.3,
    type: 'Single Correct Answer',
    author: 'Navdeep Singh',
  };

  ngOnInit() {
    this.questions = questions;
    this.editPaperModel = paperForm;
  }

  onEditSave() {
    this.editMode = !this.editMode;
  }
}
