import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

import { QuestionModel } from './question.model';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent {
  @Input() question: QuestionModel;
  @Input() index: number;
  @Input() highlightAnswer: boolean;

  userSelection: string[] = [];
  isExpansionOpened = false;

  isSingleCorrect() {
    return this.question.type === 'single_correct';
  }

  isMultipleCorrect() {
    return this.question.type === 'multiple_correct';
  }

  onCheckboxChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.userSelection.push(event.source.value);
    } else {
      this.userSelection = this.userSelection.filter((selection) => {
        return selection !== event.source.value;
      });
    }
  }

  highlightSuccess(isAnswer: boolean): boolean {
    return this.isExpansionOpened && this.highlightAnswer && isAnswer;
  }

  highlightError(isAnswer: boolean, value: string): boolean {
    if (typeof this.userSelection === 'string') {
      return (
        this.isExpansionOpened &&
        this.highlightAnswer &&
        !isAnswer &&
        this.userSelection === value
      );
    }
    return (
      this.isExpansionOpened &&
      this.highlightAnswer &&
      !isAnswer &&
      this.userSelection.findIndex((selection) => selection === value) !== -1
    );
  }
}
