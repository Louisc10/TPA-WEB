import { Component, OnInit } from '@angular/core';
import { UserCacheService } from 'src/app/service/user-cache.service';
import { AuthService } from 'angularx-social-login';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {

  constructor(private authService: AuthService, private user: UserCacheService, 
    public dialogRef: MatDialogRef<ProfilComponent>) { }

  ngOnInit() {
  }

  signOut() {
    this.user.user = null
    this.user.currency = "IDR"
    this.user.language = "ID"
    this.authService.signOut();
    this.dialogRef.close()
  }
}
