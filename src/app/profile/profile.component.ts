import { Component } from '@angular/core';
import { sampleUsers } from '../sampleusers';
import { sampleTweets } from '../sampleTweets';

const firstUser = sampleUsers[0];
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users = sampleUsers;
  user = firstUser;
  tweets = sampleTweets;
}
