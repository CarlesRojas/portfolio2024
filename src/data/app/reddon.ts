import Icon from '@asset/reddon/icon.png';
import Poster from '@asset/reddon/poster.png';
import Screenshot1 from '@asset/reddon/screenshot1.png';
import Screenshot2 from '@asset/reddon/screenshot2.png';
import Screenshot3 from '@asset/reddon/screenshot3.png';
import Screenshot4 from '@asset/reddon/screenshot4.png';

import type { Project } from '@data/projects';

export const reddon: Project = {
    route: 'reddon',
    title: 'Reddon',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4],
    subtitle: 'A client for Reddit that navigates posts horizontally.',
    description: [
        'Reddon is an app that connects to your current Reddit account and lets you navigate the most recent posts using horizontal scrolling.',
    ],
    links: [{ url: 'https://github.com/CarlesRojas/Reddon', icon: 'ri:github-fill' }],
    process:
        'Reddon is a Progressive Web App made with ReactJS targeting mobile devices. It is not available right now.',
    date: '2020-09-01',
    horizontal: false,
    disabled: true,
};
