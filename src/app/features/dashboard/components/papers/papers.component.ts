import { Component, OnInit } from '@angular/core';

import { papers } from '../../../../shared/mocks/papers';
import { InfoCardModel } from '../../../../shared/components/info-card/info-card.model';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss'],
})
export class PapersComponent implements OnInit {
  papers: InfoCardModel[];

  constructor() {}

  ngOnInit() {
    this.papers = papers;
  }

  onFilterChange(event: Event): void {}
}
