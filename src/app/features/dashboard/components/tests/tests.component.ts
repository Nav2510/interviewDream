import { Component, OnInit } from '@angular/core';

import { tests } from '../../../../shared/mocks/tests';
import { IInfoCardModel } from '../../../../shared/models/info-card.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
})
export class TestsComponent implements OnInit {
  tests: IInfoCardModel[];
  constructor() {}

  ngOnInit() {
    this.tests = tests;
  }

  onFilterChange(event: Event): void {
    console.log(event);
  }
}
