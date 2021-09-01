import { io } from 'socket.io-client';

import { environment } from '../environments/environment';

const URL = environment.socketURI;
export const socketInstance = io(URL, { autoConnect: false });

socketInstance.onAny((event, ...args) => {
  console.log('onAny', event, args);
});
