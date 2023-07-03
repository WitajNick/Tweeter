import { Component, OnInit } from '@angular/core';
import { sampleTopics } from '../sampletopics';
import { sampleUsers } from '../sampleusers';
import { sampleTweets } from '../sampleTweets';
import jwtDecode from 'jwt-decode';
import { GoogleResponse } from '../GoogleResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topics = sampleTopics;
  users = sampleUsers;
  tweets = sampleTweets;
  profilePicture: string = '';
  ngOnInit(): void {
    const token = localStorage.getItem("google");
    if (token) {
      const decodedMessage: GoogleResponse = jwtDecode(token);
      this.profilePicture = decodedMessage.picture
    }
  }
}
