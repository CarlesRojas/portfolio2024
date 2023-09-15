import Icon from '@asset/escape/icon.png';
import Poster from '@asset/escape/poster.png';
import Screenshot1 from '@asset/escape/screenshot1.png';
import Screenshot2 from '@asset/escape/screenshot2.png';
import Screenshot3 from '@asset/escape/screenshot3.png';
import Screenshot4 from '@asset/escape/screenshot4.png';
import Screenshot5 from '@asset/escape/screenshot5.png';
import Screenshot6 from '@asset/escape/screenshot6.png';
import Screenshot7 from '@asset/escape/screenshot7.png';
import Video from '@asset/escape/video.mp4';

import type { Project } from '@data/projects';

export const escape: Project = {
    route: 'escape',
    title: 'Escape',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5, Screenshot6, Screenshot7],
    subtitle: 'Escape through the maze using power ups and avoiding the red wall!',
    description: [
        'Use the phones accelerometer to move around a dark maze and collect power ups to escape from the inevitable red wall.',
    ],
    links: [{ url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.Escape', icon: 'ri:android-fill' }],
    video: Video,
    process:
        'Escape is a game made with Unity targeting the mobile devices. It was coded in C# is currently published on the Google Play Store.',
    date: '2018-02-01',
    horizontal: true,
    disabled: true,
};
