import { Injectable } from '@angular/core';
import { Comment } from './Comment';
import { sampleComments } from './sampleComments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  /**
  *@param {number} tweetId The tweets's id
  *@returns {Comment[]} The user object associated with the user id
  * If 0 is provided as the user id, then a dummy user object will be returned
  **/
  getCommentsByTweetId(tweetId: number): Comment[] {
    if (tweetId == 0) {
      return []
    }
    const filteredComments = sampleComments.filter(comment => comment.tweetId === tweetId)
    return filteredComments
  }

}
