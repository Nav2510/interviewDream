import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { AuthService } from '../../../../../../core/services/auth.service';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-messages-area',
  templateUrl: './messages-area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesAreaComponent {
  @Input() messages: Message[];

  readonly currentUserId = this.authService.getLoggedUserId();

  constructor(private readonly authService: AuthService) {}
}
