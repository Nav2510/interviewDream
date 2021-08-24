import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { PAPER_FORM } from '../../../../shared/mocks/create-paper-form';
import { ConfigModel } from '../../../../shared/components/dynamic-form/config.model';
import { PaperByIdGQL } from '../../../../../graphql/documents/queries/papers/paper-by-id.graphql-gen';
import { Paper } from '../../../../../graphql/generated/graphql.types';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss'],
})
export class PaperComponent implements OnInit {
  editPaperModel: ConfigModel[];
  editMode = false;
  paperDetails$: Observable<Paper>;

  constructor(
    private readonly paperById: PaperByIdGQL,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.paperDetails$ = this.paperById
      .fetch({
        paperId: this.route.snapshot.params.paperId,
      })
      .pipe(
        map((response) => {
          return response.data.paper;
        }),
      );
    this.editPaperModel = PAPER_FORM;
  }

  onEditSave() {
    this.editMode = !this.editMode;
  }
}
