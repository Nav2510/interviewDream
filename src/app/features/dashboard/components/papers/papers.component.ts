import { Component, OnInit } from '@angular/core';

import { papers } from '../../../../shared/mocks/papers';
import { IInfoCardModel } from '../../../../shared/models/info-card.model';

@Component({
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss'],
})
export class PapersComponent implements OnInit {
  papers: IInfoCardModel[];

  constructor() {}

  ngOnInit() {
    this.papers = papers;
  }

  onFilterChange(event: Event): void {}
}
