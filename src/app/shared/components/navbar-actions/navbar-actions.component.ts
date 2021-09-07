import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/graphql/generated/graphql.types';
import { NavUserActionModel } from '../top-nav/nav-user-actions.model';

@Component({
  selector: 'app-navbar-actions',
  templateUrl: './navbar-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarActionsComponent {
  @Input() currentUser: User;
  @Input() actions: NavUserActionModel[];

  constructor(private readonly router: Router) {}

  onUserAction(userAction: NavUserActionModel) {
    if (userAction.type === 'method') {
      userAction.method();
    } else if (userAction.type === 'url') {
      this.router.navigate([userAction.url]);
    }
  }
}
