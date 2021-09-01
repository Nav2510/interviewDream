import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MeGQL } from '../../../../graphql/documents/queries/users/me.graphql-gen';
import { User } from '../../../../graphql/generated/graphql.types';
import { NavUserActionModel } from './nav-user-actions.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  @Input() userActions: NavUserActionModel[];
  @Output() toggleSideNav = new EventEmitter<void>();

  currentUser$: Observable<User> = this.meGQL
    .fetch()
    .pipe(map((response) => response.data.me));

  // eslint-disable-next-line no-unused-vars
  constructor(private readonly router: Router, private readonly meGQL: MeGQL) {}

  onToggleMenu() {
    this.toggleSideNav.emit();
  }

  onUserAction(userAction: NavUserActionModel) {
    if (userAction.type === 'method') {
      userAction.method();
    } else if (userAction.type === 'url') {
      this.router.navigate([userAction.url]);
    }
  }
}
