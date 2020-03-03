import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChattingService } from 'src/app/service/chatting.service';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.sass']
})
export class ChattingComponent implements OnInit {

  messageControl = new FormControl();
  messageLists: Array<any> = [];
  aMessage: boolean = false
  image: string=''
  constructor(private chatService: ChattingService, private dialog: MatDialog) { }

  ngOnInit() {
    

    this.messageControl.setValue("");
    this.chatService.listen('chat').subscribe(m => {
      this.messageLists.push(m);
    });
  }

  sendMessage() {
    this.chatService.emit('chat', this.messageControl.value);
    this.messageControl.setValue("");
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
      this.image = reader.result.toString() //ini reader.result ambil hasil encode gambar, tinggal ditembak ke source sudah bole pake

      // var word = this.image.split(",")
      

      // const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
      //   const byteCharacters = atob(b64Data);
      //   const byteArrays = [];
      
      //   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      //     const slice = byteCharacters.slice(offset, offset + sliceSize);
      
      //     const byteNumbers = new Array(slice.length);
      //     for (let i = 0; i < slice.length; i++) {
      //       byteNumbers[i] = slice.charCodeAt(i);
      //     }
      
      //     const byteArray = new Uint8Array(byteNumbers);
      //     byteArrays.push(byteArray);
      //   }
      
      //   const blob = new Blob(byteArrays, {type: contentType});
      //   return blob;
      // }
      // var blob = b64toBlob(word[1], 'image/png');
      // var blobUrl = URL.createObjectURL(blob);

      // console.log(blob)
      // console.log(blobUrl)
      console.log(this.image)
    }
  }
  
  // blob
  // blobUrl

  openlargeImage(){
    const dialogRef = this.dialog.open(ImageModalComponent, {
      width: '80%',
      data:  this.image
    });
  }
}
