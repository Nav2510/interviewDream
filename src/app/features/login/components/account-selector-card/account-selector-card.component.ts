import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetRoleGQL } from 'src/graphql/documents/mutations/users/set-role.graphql-gen';
import { RoleEnum } from 'src/graphql/generated/graphql.types';

@Component({
  selector: 'app-account-selector-card',
  templateUrl: './account-selector-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSelectorCardComponent {
  readonly accountType = RoleEnum;
  // eslint-disable-next-line no-unused-vars
  constructor(
    private readonly router: Router,
    private readonly setRoleGQL: SetRoleGQL,
  ) {}

  onSelection(accountType: RoleEnum) {
    this.setRoleGQL.mutate({ role: accountType }).subscribe((response) => {
      this.router.navigate(['/dashboard/profile']);
    });
  }
}
