import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AuthService } from '../../../../../core/services/auth.service';
import { socketInstance } from '../../../../../socket';

export interface OnlineUser {
  socketId: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private readonly onlineUsersSource$ = new BehaviorSubject<OnlineUser[]>(null);

  constructor(private readonly authService: AuthService) {}

  get onlineUsers$(): Observable<OnlineUser[]> {
    return this.onlineUsersSource$.asObservable();
  }

  initSocket(): void {
    const token = this.authService.getToken();
    socketInstance.auth = { token };
    socketInstance.connect();
    socketInstance.on('user connected', (users) => {
      this.onlineUsersSource$.next(users);
    });
  }

  disconnectSocket(): void {
    socketInstance.disconnect();
    socketInstance.off();
  }
}
