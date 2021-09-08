import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
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

  currentUser$: Observable<User> = this.meGQL.fetch().pipe(
    map((response) => {
      const currentUser = { ...response.data.me };
      const profilePath = currentUser?.profileImagePath
        ? environment.baseURI + '/' + currentUser.profileImagePath
        : '../../../../assets/icons/user.svg';
      currentUser.profileImagePath = profilePath;
      return currentUser;
    }),
  );

  constructor(private readonly meGQL: MeGQL) {}

  onToggleMenu() {
    this.toggleSideNav.emit();
  }
}
