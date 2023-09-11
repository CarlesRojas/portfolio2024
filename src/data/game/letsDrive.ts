import Icon from '@asset/letsDrive/icon.png';
import Poster from '@asset/letsDrive/poster.png';
import Screenshot1 from '@asset/letsDrive/screenshot1.png';
import Screenshot2 from '@asset/letsDrive/screenshot2.png';
import Screenshot3 from '@asset/letsDrive/screenshot3.png';
// import Screenshot4 from '@asset/letsDrive/screenshot4.png';
// import Screenshot5 from '@asset/letsDrive/screenshot5.png';
// import Screenshot6 from '@asset/letsDrive/screenshot6.png';
import Video from '@asset/letsDrive/video.mp4';

import type { Project } from '@data/projects';

export const letsDrive: Project = {
    route: 'letsDrive',
    title: "Let's Drive",
    icon: Icon,
    poster: Poster,
    screenshots: [
        Screenshot1,
        Screenshot2,
        Screenshot3,
        // Screenshot4,
        // Screenshot5,
        // Screenshot6,
    ],

    subtitle: 'Deliver all cars to their destination while avoiding your past trips!',
    description: [
        'You drive a single vehicle with a destination, and you decide the way, but beware! In each round you will cross with all your previous vehicles and their routes.',
        'Add seconds to the clock or repair your vehicle by getting the powerups around the map. Will you deliver all cars to their destinations without accidents?',
        'Let’s drive!',
    ],
    links: [{ url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.LetsDrive', icon: 'ri:android-fill' }],
    video: Video,
    process:
        'Let’s Drive is a game made with Unity targeting the mobile devices. This app was developed alongside Alejandra Jiménez. The game is coded in C# and it is currently published on the Google Play Store.',
    date: '2018-12-01',
    horizontal: true,
};
