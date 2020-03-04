import { Component, OnInit } from '@angular/core';
import { ChattingService } from 'src/app/service/chatting.service';

@Component({
  selector: 'app-pesawat',
  templateUrl: './pesawat.component.html',
  styleUrls: ['./pesawat.component.sass']
})
export class PesawatComponent implements OnInit {

  constructor(
  private note: ChattingService) { 
    this.note.listen('blog').subscribe(M=>alert(M))
  }

  ngOnInit() {
  }

}
