import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChattingService } from 'src/app/service/chatting.service';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { MatDialog } from '@angular/material';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from 'src/app/models/chat';


export interface Message {
  sender: string,
  content: string
}

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.sass']
})


export class ChattingComponent implements OnInit {

  chats: Message[] = []
  messageControl = new FormControl();
  messageLists: Array<any> = [];
  aMessage: boolean = false
  image: string = ''


  inputChat: string = null
  userEmail: string = ""
  chatId: number = 0

  constructor(private chatService: ChattingService, private dialog: MatDialog, private aR: ActivatedRoute, private apolo: BackendServiceService, private route: Router) {
  }


  ngOnInit() {
    this.userEmail = localStorage.getItem('user')
    this.chatId = parseInt(this.aR.snapshot.paramMap.get("id"))
    this.getChatData()
    this.messageControl.setValue("");
  }

  getChatData() {
    console.log(this.chatId)
    this.apolo.getAllChat(this.chatId).subscribe(async q => {
      console.table(q.data.getAllChat)
      if (q.data.getAllChat[0].sender != this.userEmail && q.data.getAllChat[0].recv != this.userEmail) {
        this.route.navigate([''])
      }
      if (q.data.getAllChat[0].content != "") {
        this.chats = JSON.parse(`${q.data.getAllChat[0].content}`)
      }
      await this.addWebsocket()
    })
  }

  addWebsocket() {
    this.chatService.listen("chat").subscribe(async data => {
      await this.assignChat(data)
      await console.log(data)
    })
  }
  assignChat(data: any) {
    var chatData = JSON.parse(data.toString())
    this.chats.push({
      sender: chatData.user,
      content: chatData.content
    })
    this.updateChatDB()
  }
  updateChatDB() {
    var chat = JSON.stringify(this.chats)
    let char = new Chat()
    char.content = chat
    char.id = this.chatId
    this.apolo.updateChat(char).subscribe(async q => {
    })
  }

  sendMessage() {
    // this.chatService.emit('chat', this.messageControl.value);
    // console.log(this.messageControl.value)
    // this.messageControl.setValue("");

    var msg = {
      user: this.userEmail,
      content: this.messageControl.value
    }
    this.chatService.emit("chat", JSON.stringify(msg))
    this.inputChat = null
  }

  c() {
    var xx = (<HTMLInputElement>document.getElementById('myfile'))
    console.log(xx)
    this.aMessage = this.messageControl.value != null
  }

  onFileChanged(event) {

    var reader = new FileReader()

    reader.readAsDataURL(event.target.files[0])
    var a = new Image()

    reader.onload = (e) => {
      this.image = reader.result.toString()
      console.log(this.image)
    }
    this.selectedFile = event.target.files[0]
    if (this.selectedFile != null) {
      var msg = {
        user: this.userEmail,
        content: "img:" + this.selectedFile.name
      }
      this.chatService.emit("chat", JSON.stringify(msg))
    }
  }


  openImage(image) {
    console.log(image)
    const dialogRef = this.dialog.open(ImageModalComponent, {
      width: "700px",
      data: ("assets/chat/" + image)
    });


  }



  sendMsg() {
    var msg = {
      user: this.userEmail,
      content: this.inputChat
    }
    this.chatService.emit("chat", JSON.stringify(msg))
    this.inputChat = null
  }


  checkUserId(idx: number) {
    return this.chats[idx].sender == this.userEmail
  }

  backToMain() {
    this.chatService.removeListener('chat')
    this.route.navigate(['/chat'])
  }

  selectedFile: File


  checkContentIsImage(idx: number): string {
    var content = this.chats[idx].content
    var sC = content.split(":")
    if (sC.length > 1 && sC[0] == "img") {
      var aC = ""
      for (let i = 1; i < sC.length; i++) {
        aC += sC[i]
      }
      return aC
    }
    else {
      return ""
    }
  }

  // openImage(img: string) {
  //   // console.log(img)
  //   this.imageModal = this.dialog.open(ChatImageModalComponent, { panelClass: 'dialog-box', data: img })
  // }

}

