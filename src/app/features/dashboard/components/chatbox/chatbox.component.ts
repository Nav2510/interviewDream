import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { User } from '../../../../../graphql/generated/graphql.types';
import { OnlineUser } from './models/online-user.model';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatboxComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  selectedUser: User = {} as User;
  model = new FormGroup({
    chat: new FormControl(''),
  });
  chatModel = '';
  onlineUsers$: Observable<OnlineUser[]> = this.socketService.onlineUsers$;
  selectedOnlineUser$: Observable<OnlineUser>;
  readonly baseURI = environment.baseURI;

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
    this.selectedOnlineUser$ = this.onlineUsers$.pipe(
      map((onlineUsers) => {
        return onlineUsers.find((onlineUser) => onlineUser.userId === user._id);
      }),
    );
  }

  ngOnDestroy(): void {
    this.socketService.disconnectSocket();
  }
}
