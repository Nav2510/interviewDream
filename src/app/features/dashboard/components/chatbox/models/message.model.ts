export class Message {
  constructor(
    public content: string,
    public timestamp: Date,
    public owner: string,
    public isRead?: boolean,
    public isSent?: boolean,
  ) {}
}
