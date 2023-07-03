import { Component } from '@angular/core';
import { Tweet } from '../Tweet';
import { sampleTweets } from '../sampleTweets';
import { Tab } from '../Tab';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent {
  tweets = sampleTweets;
  tab: Tab = "Tweets"

  updateTab = (newTab: Tab) => {
    this.tab = newTab;
  }
  shouldAppear = (tweet: Tweet) => {
    if(this.tab === "Tweets") {
      return true;
    } else if (this.tab === "TweetsAndReplies") {
      return true;
    } else if (this.tab === "Media") {
      if (tweet.imgLink) {
        return true;
      } else {
        return false;
      }
    } else if (this.tab === "Likes") {
      return false;
    }
    return false;
  }
}
