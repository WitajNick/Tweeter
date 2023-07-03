import { Component } from '@angular/core';
import { sampleTweets } from '../sampleTweets';
import { Tweet } from '../Tweet';
import { Tab } from '../Tab';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent {
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
  focusSearch = () => {
    const searchBoxInput = document.getElementById("explore-searchBox-input");
    searchBoxInput?.focus();
  }
  unfocusSearch = () => {
    const searchBoxInput = document.getElementById("explore-searchBox-input");
    searchBoxInput?.blur()
  }
}
