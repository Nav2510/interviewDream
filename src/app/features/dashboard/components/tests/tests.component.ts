import { Component, OnInit } from '@angular/core';

import { TESTS } from '../../../../shared/mocks/tests';
import { InfoCardModel } from '../../../../shared/components/info-card/info-card.model';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss'],
})
export class TestsComponent implements OnInit {
  tests: InfoCardModel[];

  ngOnInit() {
    this.tests = TESTS;
  }

  onFilterChange(event: Event): void {
    console.log(event);
  }
}
