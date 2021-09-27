import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { MeGQL } from '../../../../graphql/documents/queries/users/me.graphql-gen';
import { User } from '../../../../graphql/generated/graphql.types';
import { ProfilePicUploadService } from '../profile-pic-upload/services/profile-pic-upload.service';
import { NavUserActionModel } from './nav-user-actions.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent implements OnInit {
  @Input() userActions: NavUserActionModel[];
  @Output() toggleSideNav = new EventEmitter<void>();

  currentUser$ = new BehaviorSubject<User>(null);

  constructor(
    private readonly meGQL: MeGQL,
    private readonly profilePicUploadService: ProfilePicUploadService,
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.profilePicUploadService.fileChanged$.subscribe((userImagePath) => {
      const profilePath = userImagePath;
      const user = this.currentUser$.getValue();
      const updatedUser = {
        ...user,
        profileImagePath: profilePath,
      };
      this.currentUser$.next(updatedUser);
    });
  }

  fetchData(): void {
    this.meGQL
      .fetch()
      .pipe(
        take(1),
        map((response) => {
          const currentUser = { ...response.data.me };
          const profilePath = currentUser?.profileImagePath
            ? currentUser.profileImagePath
            : '../../../../assets/icons/user.svg';
          currentUser.profileImagePath = profilePath;
          return currentUser;
        }),
      )
      .subscribe((user) => {
        this.currentUser$.next(user);
      });
  }
  onToggleMenu() {
    this.toggleSideNav.emit();
  }
}
