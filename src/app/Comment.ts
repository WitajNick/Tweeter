export interface Comment {
    id: number;
    userId: number;
    tweetId: number;
    text: string;
    datetime: Date;
    likes: number;
}