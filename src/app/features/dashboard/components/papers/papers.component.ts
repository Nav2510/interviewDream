import { Component, OnInit } from "@angular/core";

import { papers } from "src/app/shared/mocks/papers";
import { IInfoCardModel } from "src/app/shared/models/info-card.model";

@Component({
  selector: "app-papers",
  templateUrl: "./papers.component.html",
  styleUrls: ["./papers.component.scss"],
})
export class PapersComponent implements OnInit {
  papers: IInfoCardModel[];

  constructor() {}

  ngOnInit() {
    this.papers = papers;
  }
}
