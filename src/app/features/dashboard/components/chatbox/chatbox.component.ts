import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageFragment } from '../../../../../graphql/documents/fragments/messages/message.graphql-gen';

import { User } from '../../../../../graphql/generated/graphql.types';
import { Message } from './models/message.model';
import { OnlineUser } from './models/online-user.model';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatboxComponent implements OnInit, OnDestroy {
  previousMessages$: Observable<Message[]>;
  messageForm: FormGroup;
  selectedUser: User = {} as User;
  model = new FormGroup({
    chat: new FormControl(''),
  });
  chatModel = '';
  onlineUsers$: Observable<OnlineUser[]> = this.socketService.onlineUsers$;
  selectedOnlineUser$: Observable<OnlineUser>;

  constructor(private readonly socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.initSocket();
  }

  onSendMessage(): void {
    if (this.chatModel.trim() !== '') {
      this.socketService.sendMessage(this.chatModel, this.selectedUser._id);
      this.chatModel = '';
    }
  }

  onUserSelected(user: User): void {
    this.selectedUser = user;
    this.setPreviousMessage(user._id);
    this.selectedOnlineUser$ = this.onlineUsers$.pipe(
      map((onlineUsers) => {
        return onlineUsers.find((onlineUser) => onlineUser.userId === user._id);
      }),
    );
  }

  setPreviousMessage(id: string): void {
    this.previousMessages$ = this.socketService.getPreviousMessages(id);
  }

  filterMessage(currentMessage, previousMessage): Message[] {
    if (!currentMessage) {
      return previousMessage;
    } else {
      return currentMessage;
    }
  }

  ngOnDestroy(): void {
    this.socketService.disconnectSocket();
  }
}
