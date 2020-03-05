import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-home-chatroom',
  templateUrl: './home-chatroom.component.html',
  styleUrls: ['./home-chatroom.component.sass']
})
export class HomeChatroomComponent implements OnInit {

  constructor(private route: Router, private chatServ: BackendServiceService) { }

  chats: Chat[] = []
  userEmail: string = ""

  ngOnInit() {
    this.getUserData()
  }

  getUserData() {
    this.userEmail = localStorage.getItem("user")
    if(this.userEmail == null || this.userEmail == ""){
      this.backToMain()
    }
    this.getAllChat()
  }

  getAllChat() {
    this.chatServ.getChat(this.userEmail).subscribe(async q => {
      this.chats = q.data.getChat
    })
  }

  validateUser1Id(idx: number) {
    return this.userEmail != this.chats[idx].sender
  }

  validateUser2Id(idx: number) {
    return this.userEmail != this.chats[idx].recv
  }

  openChat(idx: number) {
    var id = this.chats[idx].id
    this.route.navigate(['/chat', id])
  }

  createNewChat() {
    var friendId = prompt("Input Email")
    if (friendId == null) {
      return
    }
    let chat: Chat = new Chat()
    chat.recv = this.userEmail
    chat.sender = friendId
    chat.content = ""
    this.chatServ.createChat(chat).subscribe(async q => {
      await alert("Success Create New Chat")
      await this.getAllChat()
    })
  }

  backToMain(){
    this.route.navigate([''])
  }
}