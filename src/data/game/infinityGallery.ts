import Icon from '@asset/infinityGallery/icon.png';
import Poster from '@asset/infinityGallery/poster.png';
import Screenshot1 from '@asset/infinityGallery/screenshot1.png';
import Screenshot2 from '@asset/infinityGallery/screenshot2.png';
import Screenshot3 from '@asset/infinityGallery/screenshot3.png';
import Screenshot4 from '@asset/infinityGallery/screenshot4.png';
// import Screenshot5 from '@asset/infinityGallery/screenshot5.png';
// import Screenshot6 from '@asset/infinityGallery/screenshot6.png';
// import Screenshot7 from '@asset/infinityGallery/screenshot7.png';
// import Screenshot8 from '@asset/infinityGallery/screenshot8.png';

import type { Project } from '@data/projects';

export const infinityGallery: Project = {
    route: 'infinityGallery',
    title: 'Infinity Gallery',
    icon: Icon,
    poster: Poster,
    screenshots: [
        Screenshot1,
        Screenshot2,
        Screenshot3,
        Screenshot4,
        // Screenshot5,
        // Screenshot6,
        // Screenshot7,
        // Screenshot8,
    ],
    subtitle: 'The biggest collection of pictures in the world, for a specific kind of pictures.',
    description: [
        'All the pictures in Infinity Gallery are 64 by 64 pixels and in grayscale, using 64 shades of grey. The reason the Infinity Gallery is so big is because it contains every combination possible of this finite number of pixels and gray tonalities. Exactly 1.29 x 10^7398 pictures. You’ve read this number quite fast, and you’re probably not grasping how enormously big that is.',
        'So, what are the implications of this? In this Gallery you can find every single picture (with those properties) that has been taken in the past and that will be taken in the future. It even contains all the pictures that will never be taken. There is a 64x64 grayscale version of every picture you have posted and will ever post on social media, of each planet in the Universe and each species that may or may not live on them. There is also a picture of those keys you lost a few years ago in the exact location they are now. The only hard task is finding them. Good luck!',
    ],
    links: [
        {
            url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.InfinityGallery',
            icon: 'ri:android-fill',
        },
    ],
    process:
        'Infinity Gallery is an app made with Unity targeting mobile devices. All images been made using Illustrator and Photoshop. The app was coded in C# is currently published on Google Play Store.',
    date: '2017-05-01',
    horizontal: false,
    disabled: true,
};
