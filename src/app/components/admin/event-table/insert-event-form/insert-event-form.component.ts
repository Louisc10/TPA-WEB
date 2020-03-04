import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BackendServiceService } from 'src/app/service/backend-service.service';
import { async } from '@angular/core/testing';
import { Entertainment } from 'src/app/models/entertainment';
import { Train } from 'src/app/models/train';
import { transformOperation } from 'apollo-link/lib/linkUtils';
import { ChattingService } from 'src/app/service/chatting.service';

@Component({
  selector: 'app-insert-event-form',
  templateUrl: './insert-event-form.component.html',
  styleUrls: ['./insert-event-form.component.sass']
})
export class InsertEventFormComponent implements OnInit {

  account;
  name = ""
  latitude = ""
  longitude = ""
  location = ""
  photolink = ""
  price = 0
  description = ""
  category = ""
  picker = null

  constructor(private route: Router,
    private apolo: BackendServiceService,
    private note: ChattingService) { 
      this.note.listen('event').subscribe(M=>alert(M))
    }

  ngOnInit() {
  }

  back() {
    this.route.navigate(['admin'])
  }

  getMessage(message: string) {
    this.description = message;
  }

  openDialog() {
    if (this.name == "") {
      alert("Input Name")
    }
    else if (this.location == "") {
      alert("Input location")
    }
    else if (this.latitude == "") {
      alert("Input latitude")
    }
    else if (this.longitude == "") {
      alert("Input longitude")
    }
    else if (this.photolink == "") {
      alert("Input photolink")
    }
    else if (this.price == 0) {
      alert("price can t be 0")
    }
    else if (this.description == "") {
      alert("Input description")
    }
    else if (this.category == "") {
      alert("Input category")
    }
    else if (this.picker == null) {
      alert("Pick date")
    }
    else {
      var train: Entertainment = new Entertainment()
      train.dateLast = this.picker
      train.name = this.name
      train.latitude = this.latitude
      train.location = this.location
      train.longitude = this.longitude
      train.photoLink1 = train.photoLink2 = train.photoLink3 = train.photoLink4 = train.photoLink5 = train.photoLink6 = this.photolink
      train.price = this.price
      train.category = this.category
      train.description = this.description
      train.dateLast = this.picker


      this.apolo.createEntertainment(train).subscribe(
        async Query => {
          this.account = Query.data.createEntertainment
          await this.c()
        }
      );
    }
  }

  c() {
    this.note.emit('event','[!] New Event Post!')
    location.reload()
  }
}
