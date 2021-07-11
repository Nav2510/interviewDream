import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-selector-card',
  templateUrl: './account-selector-card.component.html',
  styleUrls: ['./account-selector-card.component.scss'],
})
export class AccountSelectorCardComponent {
  accountType = {
    student: 'student',
    instructor: 'instructor',
  };
  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

  onSelection(accountType) {
    console.log(accountType);
    this.router.navigate(['/dashboard/profile']);
  }
}
