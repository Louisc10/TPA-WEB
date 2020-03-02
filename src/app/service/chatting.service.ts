import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChattingService {

  socket: any;
  readonly uri: string = 'ws://localhost:1234';

  constructor() {
    this.socket = io(this.uri);
  }

  public listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  public emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  public removeListener(e: string){
    this.socket.removeListener(e)
  }


}
