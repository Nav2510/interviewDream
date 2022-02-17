import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from 'src/app/core/services/auth.service';
import { NavUserActionModel } from 'src/app/shared/components/top-nav/nav-user-actions.model';
import { MeGQL } from 'src/graphql/documents/queries/users/me.graphql-gen';
import { User } from 'src/graphql/generated/graphql.types';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean;
  currentUser$: Observable<User> = this.meGQL.fetch().pipe(
    map((response) => {
      const currentUser = { ...response.data.me };
      const profilePath = currentUser?.profileImagePath
        ? currentUser.profileImagePath
        : '../../../../assets/icons/user.svg';
      currentUser.profileImagePath = profilePath;
      return currentUser;
    }),
  );
  userActions: NavUserActionModel[] = [
    { label: 'Profile', type: 'url', url: '/dashboard/profile' },
    {
      label: 'Logout',
      type: 'method',
      method: () => {
        this.onLogout();
      },
    },
  ];

  constructor(
    private readonly authService: AuthService,
    private readonly meGQL: MeGQL,
    private readonly router: Router,
    private readonly translateService: TranslateService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onUserAction(userAction: NavUserActionModel) {
    if (userAction.type === 'method') {
      userAction.method();
    } else if (userAction.type === 'url') {
      this.router.navigate([userAction.url]);
    }
  }

  toggleLang(): void {
    console.log(this.translateService.getLangs())
    this.translateService.use('hi');
    console.log(this.translateService.getLangs())
    this.cdr.detectChanges();
  }

  onLogout(): void {
    this.authService.logout().subscribe((isLoggedOut) => {
      if (isLoggedOut) {
        this.router.navigate(['/login']);
      }
    });
  }
}
