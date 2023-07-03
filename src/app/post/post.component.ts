import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../Tweet';
import { UserService } from '../user.service';
import { CommentService } from '../comment.service';
import { Comment } from '../Comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [UserService, CommentService]
})
export class PostComponent implements OnInit {
  constructor(
    private userService: UserService,
    private commentService: CommentService
  ) {}
  @Input() tweet: Tweet = {
    id: 0,
    userId: 0,
    text: '',
    date: new Date(),
    public: true,
    img: false,
    likes: 0,
    retweets: 0,
    saved: 0,
    likingUsers: []
  };
  ngOnInit() {
    this.user = this.userService.getUserById(this.tweet.userId);
    this.comments = this.commentService.getCommentsByTweetId(this.tweet.id);
  }
    user = this.userService.getUserById(0);
    comments: Comment[] = [];
}