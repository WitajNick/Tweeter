export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    phone: string;
    email: string;
    summary: string;
    google?: string;
    microsoft?: string;
    facebook?: string;
    apple?: string;
    profileImgLink?: string;
    bannerImgLink?: string;
    followingUserIds: number[];
    followers: number;
}