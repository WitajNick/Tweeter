export interface Tweet {
    id: number;
    userId: number;
    text: string;
    date: Date;
    public: boolean;
    img: boolean;
    imgLink?: string;
    likes: number;
    retweets: number;
    saved: number;
    likingUsers: number[];
}