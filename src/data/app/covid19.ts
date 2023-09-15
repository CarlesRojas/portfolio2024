import Icon from '@asset/covid19/icon.png';
import Poster from '@asset/covid19/poster.png';
import Screenshot1 from '@asset/covid19/screenshot1.png';
import Screenshot2 from '@asset/covid19/screenshot2.png';
import Screenshot3 from '@asset/covid19/screenshot3.png';
import Screenshot4 from '@asset/covid19/screenshot4.png';
import Screenshot5 from '@asset/covid19/screenshot5.png';
import Screenshot6 from '@asset/covid19/screenshot6.png';
import Video from '@asset/covid19/video.mp4';

import type { Project } from '@data/projects';

export const covid19: Project = {
    route: 'covid19',
    title: 'Covid-19',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5, Screenshot6],
    subtitle: 'Check how the Covid-19 virus is affecting each Province in Spain.',
    description: [
        'Get information about how Covid-19 is affecting every Province in Spain in the last 14 days. Get updated numbers every day about the current state of the virus and track its progress.',
        'If you must travel around Spain, with some guides about what measures you should take once there.',
        'If you just caught Covid-19, the app shows you useful information about how to proceed.',
    ],
    links: [
        { url: 'https://github.com/CarlesRojas/estado-covid-client', icon: 'ri:github-fill' },
        { url: 'https://github.com/CarlesRojas/estado-covid-server', icon: 'ri:github-fill' },
    ],
    video: Video,
    process:
        'Covid-19 is a Progressive Web App made with ReactJS targeting mobile devices. It is not available right now.',
    date: '2022-02-01',
    horizontal: false,
};
