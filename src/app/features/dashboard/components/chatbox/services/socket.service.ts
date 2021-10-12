import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { GetMessagesGQL } from 'src/graphql/documents/queries/messages/get-messages.graphql-gen';
import { MessageFragment } from '../../../../../../graphql/documents/fragments/messages/message.graphql-gen';

import { AuthService } from '../../../../../core/services/auth.service';
import { socketInstance } from '../../../../../socket';
import { Message } from '../models/message.model';
import { OnlineUser } from '../models/online-user.model';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private onlineUsersSource: OnlineUser[] = [];
  private readonly onlineUsersSource$ = new BehaviorSubject<OnlineUser[]>(
    this.onlineUsersSource,
  );
  private selectedOnlineUser: OnlineUser = {} as OnlineUser;

  constructor(
    private readonly authService: AuthService,
    private readonly getmessageGQL: GetMessagesGQL,
  ) {}

  get onlineUsers$(): Observable<OnlineUser[]> {
    return this.onlineUsersSource$.asObservable();
  }

  updateSelectedUser(userId: string): void {
    let selectedUser: OnlineUser;
    this.getmessageGQL
      .fetch({ fromID: userId })
      .pipe(
        take(1),
        tap((response) => {
          const fetchedMessages = response.data.getUserMessages;
          this.onlineUsersSource = this.onlineUsersSource.map((onlineUser) => {
            if (onlineUser.userId === userId) {
              selectedUser = onlineUser;
              return new OnlineUser(
                onlineUser.socketId,
                onlineUser.userId,
                [
                  ...fetchedMessages.map(
                    (message) =>
                      new Message(
                        message.content,
                        new Date(message.timestamp),
                        message.owner,
                      ),
                  ),
                  ...onlineUser.messages,
                ],
                onlineUser.isOnline,
                false,
              );
            }
            return onlineUser;
          });
          this.onlineUsersSource$.next(this.onlineUsersSource);
          this.selectedOnlineUser = selectedUser;
        }),
      )
      .subscribe();
  }

  initSocket(): void {
    const token = this.authService.getToken();
    socketInstance.auth = { token };
    socketInstance.connect();
    socketInstance.on('users', (users: OnlineUser[]) => {
      this.onlineUsersSource = users.map(
        (user) => new OnlineUser(user.socketId, user.userId),
      );
      this.onlineUsersSource$.next(this.onlineUsersSource);
    });
    socketInstance.on('user connected', (user: OnlineUser) => {
      const fetchedUser = this.onlineUsersSource.find(
        (onlineUser) => onlineUser.userId === user.userId,
      );
      if (fetchedUser) {
        this.onlineUsersSource = this.onlineUsersSource.map((onlineUser) => {
          if (onlineUser.userId === user.userId) {
            return new OnlineUser(
              onlineUser.socketId,
              onlineUser.userId,
              onlineUser.messages,
              true,
              onlineUser.hasNewMsg,
            );
          }
          return onlineUser;
        });
      } else {
        this.onlineUsersSource.push(new OnlineUser(user.socketId, user.userId));
      }
      this.onlineUsersSource$.next(this.onlineUsersSource);
    });
    socketInstance.on(
      'private message',
      ({ msgContent, timestamp, fromSocket }) => {
        this.addMessageToUser(msgContent, timestamp, fromSocket);
      },
    );
    socketInstance.on('user disconnected', (disconnectedUser: OnlineUser) => {
      this.onlineUsersSource = this.onlineUsersSource.map((onlineUser) => {
        if (onlineUser.userId === disconnectedUser.userId) {
          return new OnlineUser(
            onlineUser.socketId,
            onlineUser.userId,
            onlineUser.messages,
            false,
            onlineUser.hasNewMsg,
          );
        }
        return onlineUser;
      });
      this.onlineUsersSource$.next(this.onlineUsersSource);
      console.log(this.onlineUsersSource);
    });
  }

  getPreviousMessages(id: string): Observable<Message[]> {
    return this.getmessageGQL
      .fetch({ fromID: id })
      .pipe(
        map((response) =>
          response.data.getUserMessages.map(
            (message) =>
              new Message(
                message.content,
                new Date(message.timestamp),
                message.owner,
              ),
          ),
        ),
      );
  }

  addMessageToUser(
    msg: string,
    timestamp: string,
    fromUserSocket: string,
  ): void {
    this.onlineUsersSource = this.onlineUsersSource.map((onlineUser) => {
      if (onlineUser.socketId === fromUserSocket) {
        const messageList = [...onlineUser.messages];
        messageList.push(
          new Message(msg, new Date(timestamp), onlineUser.userId),
        );
        const updatedUser = new OnlineUser(
          onlineUser.socketId,
          onlineUser.userId,
          messageList,
          onlineUser.isOnline,
          onlineUser.hasNewMsg,
        );
        if (fromUserSocket !== this.selectedOnlineUser?.socketId) {
          updatedUser.hasNewMsg = true;
        }
        return updatedUser;
      }
      return onlineUser;
    });
    this.onlineUsersSource$.next(this.onlineUsersSource);
  }

  getMessages(userId: string): Message[] {
    return this.onlineUsersSource.find(
      (onlineUser) => onlineUser.userId === userId,
    ).messages;
  }

  sendMessage(msgContent: string, userId: string): void {
    let socketId;
    this.onlineUsersSource = this.onlineUsersSource.map((onlineUser) => {
      if (onlineUser.userId === userId) {
        const loggedUserId = this.authService.getLoggedUserId();
        const updatedMessages = [...onlineUser.messages];
        socketId = onlineUser.socketId;
        updatedMessages.push(new Message(msgContent, new Date(), loggedUserId));
        return new OnlineUser(
          onlineUser.socketId,
          onlineUser.userId,
          updatedMessages,
          onlineUser.isOnline,
          onlineUser.hasNewMsg,
        );
      }
      return onlineUser;
    });
    this.onlineUsersSource$.next(this.onlineUsersSource);
    socketInstance.emit('private message', {
      toUserId: userId,
      msgContent,
      toSocketId: socketId,
    });
  }

  disconnectSocket(): void {
    socketInstance.disconnect();
  }
}
