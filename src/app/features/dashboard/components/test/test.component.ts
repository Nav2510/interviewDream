import { Component, OnInit } from '@angular/core';

import { testForm } from '../../../../shared/mocks/create-test-form';
import { questions } from '../../../../shared/mocks/questions';
import { ConfigModel } from '../../../../shared/components/dynamic-form/config.model';
import { QuestionModel } from '../../../../shared/components/question-card/question.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  questions: QuestionModel[];
  editTestModel: ConfigModel[];
  editMode = false;
  test = {
    title: 'Practice Test 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tagList: ['data-structures', 'algorithms'],
    difficulty: 2.3,
    type: 'Single Correct Answer',
    author: 'Navdeep Singh',
  };

  ngOnInit() {
    this.questions = questions;
    this.editTestModel = testForm;
  }

  onEditSave() {
    this.editMode = !this.editMode;
  }
}
