import Icon from '@asset/cryptoPlace/icon.png';
import Poster from '@asset/cryptoPlace/poster.png';
import Screenshot1 from '@asset/cryptoPlace/screenshot1.png';
import Screenshot2 from '@asset/cryptoPlace/screenshot2.png';
import Screenshot3 from '@asset/cryptoPlace/screenshot3.png';

import type { Project } from '@data/projects';

export const cryptoPlace: Project = {
    route: 'cryptoPlace',
    title: 'CryptoPlace',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3],
    subtitle: 'A recreation of the r/place experiment where every pixel is an NFT (Non Fungible Token).',
    description: [
        'Each pixel in the 256x256 canvas is owned by someone who can change its color. You can buy a group of them or work together to create pixel art.',
        'CryptoPlace is a decentralized app (DApp) that uses Smart Contracts and the ERC721 standard to make sure each pixel is really owned by the person that mints it or buys it.',
    ],
    links: [{ url: 'https://github.com/CarlesRojas/CryptoBoard', icon: 'ri:github-fill' }],
    process:
        'CryptoPlace is a DApp made using ReactJS and Solidity for the Smart Contracts. It hasn’t been deployed to the Ethereum network so it is not available right now.',
    date: '2021-05-01',
    horizontal: true,
    disabled: true,
};
