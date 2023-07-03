import { Injectable, Input } from '@angular/core';
import { User } from './User';
import { sampleUsers } from './sampleusers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
  *@param {number} userId The user's id
  *@returns {User} The user object associated with the user id
  * If 0 is provided as the user id, then a dummy user object will be returned
  **/
  getUserById(userId: number): User {
    const altUser: User = {
      firstName: '',
      lastName: '',
      id: 0,
      username: '',
      phone: '',
      email: '',
      summary: '',
      followingUserIds: [],
      followers: 0
    }
    if (userId === 0) {
      return altUser;
    }
    const user = sampleUsers.find(user => user.id === userId)
    if (user === undefined) {
      throw Error(`cannot find user with user id: ${userId}`);
    }
    return user
  }
}
