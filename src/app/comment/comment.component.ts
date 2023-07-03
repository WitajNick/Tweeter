import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../Comment';
import { CommentService } from '../comment.service';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [UserService, CommentService]
})
export class CommentComponent implements OnInit {
  constructor(
    private userService: UserService,
    private commentService: CommentService
  ) {}
  @Input() comment: Comment = {
    id: 0,
    userId: 0,
    tweetId: 0,
    text: '',
    datetime: new Date(),
    likes: 0
  };
  ngOnInit() {
    this.user = this.userService.getUserById(this.comment.userId);
  }
  user: User = this.userService.getUserById(0);

}
