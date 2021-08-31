import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss'],
})
export class ChatboxComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  messages$: Observable<string[]> = this.http.get<string[]>(
    'http://localhost:8080/messages',
  );

  constructor(
    private readonly http: HttpClient,
    private readonly socketService: SocketService,
  ) {}

  ngOnInit(): void {
    this.socketService.initSocket();
  }

  ngOnDestroy(): void {
    this.socketService.disconnectSocket();
  }
}
