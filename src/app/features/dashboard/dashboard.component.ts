import { Component } from "@angular/core";

import { IFilterValueModel } from "../../shared/models/filter-value.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  showSideNav = true;

  constructor() {}

  onToggleSideNav() {
    this.showSideNav = !this.showSideNav;
  }

  onFilterChange(value: IFilterValueModel) {}
}
