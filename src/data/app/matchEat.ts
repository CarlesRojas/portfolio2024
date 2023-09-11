import Icon from '@asset/matchEat/icon.png';
import Poster from '@asset/matchEat/poster.png';
import Screenshot1 from '@asset/matchEat/screenshot1.png';
import Screenshot2 from '@asset/matchEat/screenshot2.png';
import Screenshot3 from '@asset/matchEat/screenshot3.png';
// import Screenshot4 from '@asset/matchEat/screenshot4.png';
// import Screenshot5 from '@asset/matchEat/screenshot5.png';
// import Screenshot6 from '@asset/matchEat/screenshot6.png';
// import Screenshot7 from '@asset/matchEat/screenshot7.png';
import Qr from '@asset/matchEat/qr.png';
import QrInv from '@asset/matchEat/qr_inverted.png';
import Video from '@asset/matchEat/video.mp4';

import type { Project } from '@data/projects';

export const matchEat: Project = {
    route: 'matchEat',
    title: 'MatchEat',
    icon: Icon,
    poster: Poster,
    screenshots: [
        Screenshot1,
        Screenshot2,
        Screenshot3,
        // Screenshot4,
        // Screenshot5,
        // Screenshot6,
        // Screenshot7,
    ],
    subtitle: 'Find the restaurant around you that matches your friend group best.',
    description: [
        'Having trouble choosing a restaurant with your friends or your significant other? Use MatchEat to find the restaurant around you that the group likes the most.',
        'Everyone joins a room at the same time from their phones. Each of you will see the same list of nearby restaurants and will give each one a Like, Love or Nope. When everyone is finished, the restaurants will be ranked, and you can get directions to any of them.',
    ],
    links: [
        { url: 'https://github.com/CarlesRojas/matcheat-client', icon: 'ri:github-fill' },
        { url: 'https://github.com/CarlesRojas/matcheat-server', icon: 'ri:github-fill' },
    ],
    qr: { url: 'http://matcheat.netlify.app/', src: Qr, srcInv: QrInv },

    video: Video,
    process:
        'MatchEat is a Progressive Web App made with ReactJS targeting mobile devices. You can add it as an app to your Android or iPhone by scanning this QR and adding the page to your Home Screen.',
    date: '2021-08-01',
    horizontal: false,
    disabled: true,
};
