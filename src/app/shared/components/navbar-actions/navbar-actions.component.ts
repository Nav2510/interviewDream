import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { User } from '../../../../graphql/generated/graphql.types';
import { DEFAULT_LANGUAGE, LANGUAGES } from '../../constants/languages.constant';
import { LanguageModel } from '../../models/language.model';
import { NavUserActionModel } from '../top-nav/nav-user-actions.model';

@Component({
  selector: 'app-navbar-actions',
  templateUrl: './navbar-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarActionsComponent {
  @Input() currentUser: User;
  @Input() actions: NavUserActionModel[];
  @Input() userLogged: boolean = false;

  readonly LANGUAGES = LANGUAGES;
  currentLanguage = DEFAULT_LANGUAGE;

  constructor(
    private readonly router: Router,
    private readonly translateService: TranslateService,
  ) {}

  onUserAction(userAction: NavUserActionModel) {
    if (userAction.type === 'method') {
      userAction.method();
    } else if (userAction.type === 'url') {
      this.router.navigate([userAction.url]);
    }
  }

  changeLanguage(language: LanguageModel): void {
    this.currentLanguage = language; 
    this.translateService.use(language.code);
  }
}
