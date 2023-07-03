import { Tweet } from "./Tweet";

export const sampleTweets: Tweet[] = [
    {id: 1, userId: 1, text: 'Programming a new app to learn Angular', date: new Date, public: true, img: false, likes: 1, retweets: 100, saved: 0, likingUsers: [2]},
    {id: 2, userId: 1, text: 'The sun is very bright today', date: new Date, public: true, img: true, imgLink: '/src/assets/imgs/img_1.jpg', likes: 2, retweets: 5, saved: 2, likingUsers: [2, 3]}
]