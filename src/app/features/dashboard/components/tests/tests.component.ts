import { Component, OnInit } from '@angular/core';

import { tests } from '../../../../shared/mocks/tests';
import { InfoCardModel } from '../../../../shared/components/info-card/info-card.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
})
export class TestsComponent implements OnInit {
  tests: InfoCardModel[];
  constructor() {}

  ngOnInit() {
    this.tests = tests;
  }

  onFilterChange(event: Event): void {
    console.log(event);
  }
}
