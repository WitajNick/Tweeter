import { User } from "./User";

export const sampleUsers: User[] = [
    {
        id: 1,
        firstName: 'Nick',
        lastName: 'Liszewski',
        username: 'nickliszewski',
        phone: '7143934622',
        email: 'nickliszewski@gmail.com',
        summary: 'Programmer, Mountain Climber, Photographer, Explorer',
        followingUserIds: [2],
        followers: 1,
        profileImgLink: '/assets/imgs/facebook-logo.svg',
        bannerImgLink: '/assets/imgs/banner.jpg'
    },
    {
        id: 2,
        firstName: 'Ann',
        lastName: 'Rondeau',
        username: 'arondeau',
        phone: '7149961725',
        email: 'arondeau2002@yahoo.com',
        summary: 'Pet parent, Tv watcher',
        followingUserIds: [1],
        followers: 1000000,
        profileImgLink: '/assets/imgs/facebook-logo.svg',
        bannerImgLink: '/assets/imgs/banner.jpg'
    },
    {
        id: 3,
        firstName: 'Tim',
        lastName: 'Liszewski',
        username: 'tliszewski',
        phone: '7149208788',
        email: 'tliszewski@hotmail.com',
        summary: 'Pet owner, cloud architect',
        followingUserIds: [1, 2],
        followers: 58,
        profileImgLink: '/assets/imgs/facebook-logo.svg',
        bannerImgLink: '/assets/imgs/banner.jpg'
    }
]