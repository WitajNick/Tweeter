import { Component, Input, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { GoogleResponse } from '../GoogleResponse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() tab: string = "";
  profileImgUrl: string = '';
  profileFirstName: string = '';
  profileLastName: string = '';
  ngOnInit(): void {
      const googleToken = localStorage.getItem("google");
      if (googleToken) {
        const googleProfile: GoogleResponse = jwtDecode(googleToken)
        this.profileImgUrl = googleProfile.picture;
        this.profileFirstName = googleProfile.given_name;
        this.profileLastName = googleProfile.family_name;
      }

  }

}
