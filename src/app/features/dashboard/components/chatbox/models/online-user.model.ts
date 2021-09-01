import { Message } from './message.model';

export class OnlineUser {
  constructor(
    public socketId: string,
    public userId: string,
    public messages: Message[] = [],
    public isOnline: boolean = true,
    public hasNewMsg: boolean = false,
  ) {}
}
