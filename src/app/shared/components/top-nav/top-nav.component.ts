import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { NavUserActionModel } from './nav-user-actions.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopNavComponent {
  @Input() userActions: NavUserActionModel[];
  @Output() toggleSideNav = new EventEmitter<void>();

  // eslint-disable-next-line no-unused-vars
  constructor(private router: Router) {}

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
