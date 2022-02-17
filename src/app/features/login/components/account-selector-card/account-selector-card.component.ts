import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../../../environments/environment';
import { SetRoleGQL } from '../../../../../graphql/documents/mutations/users/set-role.graphql-gen';
import { RoleEnum } from '../../../../../graphql/generated/graphql.types';

@Component({
  selector: 'app-account-selector-card',
  templateUrl: './account-selector-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSelectorCardComponent {
  readonly accountType = RoleEnum;
  readonly studentCardBg = `${environment.firebaseStorageURI}12.jpg`;
  readonly instructorCardBg = `${environment.firebaseStorageURI}10.jpg`;

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
