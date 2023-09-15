import Icon from '@asset/fanfastic/icon.png';
import Poster from '@asset/fanfastic/poster.png';
import Screenshot1 from '@asset/fanfastic/screenshot1.png';
import Screenshot2 from '@asset/fanfastic/screenshot2.png';
import Screenshot3 from '@asset/fanfastic/screenshot3.png';
import Screenshot4 from '@asset/fanfastic/screenshot4.png';
import Screenshot5 from '@asset/fanfastic/screenshot5.png';
import Video from '@asset/fanfastic/video.mp4';

import type { Project } from '@data/projects';

export const fanfastic: Project = {
    route: 'fanfastic',
    title: 'Fanfastic',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5],
    subtitle: 'Keep track of your fasting schedule in a healthy way.',
    description: [
        'In Fanfastic you can setup any intermittent fasting routine you wish. Choose how long you want to fast for and when to start. You can also track your weight and BMI.',
        'The app will remind you of when to start and stop fasting and it will provide an explanation for the different phases of fasting.',
    ],
    links: [
        // { url: "https://play.google.com/store/apps/details?id=app.netlify.fanfastic", icon: "ri:android-fill" },
        // { url: "https://www.microsoft.com/store/productId/9NFJ33VBGK91", icon: "ri:windows-fill" },
        { url: 'https://github.com/CarlesRojas/fanfastic-client', icon: 'ri:github-fill' },
        { url: 'https://github.com/CarlesRojas/fanfastic-server', icon: 'ri:github-fill' },
    ],
    video: Video,
    process:
        'Fanfastic is a Progressive Web App made with ReactJS that targets mobile, tablet and desktop devices. It is available through the Google Play Store and in the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
    date: '2022-01-01',
    horizontal: false,
};
