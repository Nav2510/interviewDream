import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseContactGQL } from '../../../../../../../graphql/documents/mutations/users/respones-contact.graphql-gen';
import { FetchAddedContactsGQL } from '../../../../../../../graphql/documents/queries/users/fetch-added-contacts.graphql-gen';
import { FetchRequestsGQL } from '../../../../../../../graphql/documents/queries/users/fetch-requests.graphql-gen';
import { User } from '../../../../../../../graphql/generated/graphql.types';
import { OnlineUser } from '../../models/online-user.model';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent implements OnDestroy {
  @Output() selected = new EventEmitter<User>();

  requests$: Observable<User[]> = this.fetchRequests();
  contacts$: Observable<User[]> = this.fetchContacts();
  onlineUsers$: Observable<OnlineUser[]> = this.socketService.onlineUsers$;
  selectedUser: User;

  subscription = new Subscription();

  constructor(
    private readonly fetchRequestsGQL: FetchRequestsGQL,
    private readonly fetchAddedContactsGQL: FetchAddedContactsGQL,
    private readonly responseContactGQL: ResponseContactGQL,
    private readonly socketService: SocketService,
  ) {}

  isOnline(id: string, onlineUsers: OnlineUser[]): boolean {
    return onlineUsers?.find((user) => {
      return id === user.userId;
    })?.isOnline;
  }

  isNew(id: string, onlineUsers: OnlineUser[]): boolean {
    return onlineUsers.find((user) => id === user.userId)?.hasNewMsg;
  }

  response(user: User, value: boolean): void {
    const successCode = 200;

    this.subscription = this.responseContactGQL
      .mutate({ id: user._id, response: value })
      .pipe(map((response) => response.data.reponseRequest))
      .subscribe((result) => {
        if (result.code === successCode) {
          this.requests$ = this.fetchRequests();
          this.contacts$ = this.fetchContacts();
        }
      });
  }

  onSelecteUser(user: User): void {
    this.selectedUser = user;
    this.selected.emit(user);
    this.socketService.updateSelectedUser(user._id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private fetchContacts(): Observable<User[]> {
    return this.fetchAddedContactsGQL
      .fetch()
      .pipe(map((response) => response.data.fetchAddedContacts));
  }
  private fetchRequests(): Observable<User[]> {
    return this.fetchRequestsGQL
      .fetch()
      .pipe(map((response) => response.data.fetchContactRequests));
  }
}
