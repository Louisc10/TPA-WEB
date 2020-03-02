import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChattingService } from 'src/app/service/chatting.service';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.sass']
})
export class ChattingComponent implements OnInit {

  messageControl = new FormControl();
  messageLists: Array<any> = [];
  aMessage: boolean = false
  constructor(private  chatService: ChattingService) { }

  ngOnInit() {
    this.messageControl.setValue("");
    this.chatService.listen('chat').subscribe(m => {
      this.messageLists.push(m);
    });
  }

  sendMessage() {
    this.chatService.emit('chat', this.messageControl.value);
    this.messageControl.setValue("");
    this.c()
  }

  c(){
    this.aMessage = (this.messageControl.value != "")
  }
}
 