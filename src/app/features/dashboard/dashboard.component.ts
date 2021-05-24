import { Component, OnInit } from '@angular/core'

import { paperInfoCards } from '../../shared/mocks/paper-info-cards'
import { questions } from '../../shared/mocks/questions'
import { testInfoCards } from '../../shared/mocks/test-info-cards'
import { IFilterValueModel } from '../../shared/models/filter-value.model'
import { IInfoCardModel } from '../../shared/models/info-card.model'
import { IQuestionModel } from '../../shared/models/question.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  testInfoCards: IInfoCardModel[]
  paperInfoCards: IInfoCardModel[]
  questionList: IQuestionModel[]
  showSideNav = true;

  constructor() { }
  ngOnInit() {
    this.testInfoCards = testInfoCards
    this.paperInfoCards = paperInfoCards
    this.questionList = questions
  }

  onToggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }

  onFilterChange(value: IFilterValueModel) {
  }

}
