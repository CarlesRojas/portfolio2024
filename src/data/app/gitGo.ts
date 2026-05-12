import Poster from '@asset/bookly/poster.png';
import Icon from '@asset/gitGo/icon.png';
import Qr from '@asset/gitGo/qr.png';
import QrInv from '@asset/gitGo/qr_inverted.png';
import Screenshot1 from '@asset/gitGo/screenshot1.png';
import Screenshot2 from '@asset/gitGo/screenshot2.png';
import Screenshot3 from '@asset/gitGo/screenshot3.png';
import Screenshot4 from '@asset/gitGo/screenshot4.png';

import type { Project } from '@data/projects';

export const gitGo: Project = {
    route: 'gitGo',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4],
    title: 'Git Go',
    subtitle:
        'A visual git graph explorer for VS Code. Browse branches, stashes, and commits with an interactive graph.',
    description: [
        'Git Go is a VS Code extension that visualizes and manages your git history with an interactive commit graph.',
        'View branches, merges, stashes, and uncommitted changes in real time.',
        'Manage branches, stashes, tags, and common git actions directly from the graph.',
        'Explore changed files and open side-by-side diffs for any commit or stash.'
    ],
    links: [
        { url: 'https://marketplace.visualstudio.com/items?itemName=Pinya.git-go', icon: 'ri:code-box-fill' },
        { url: 'https://github.com/CarlesRojas/git-go', icon: 'ri:github-fill' }
    ],
    qr: { url: 'https://marketplace.visualstudio.com/items?itemName=Pinya.git-go', src: Qr, srcInv: QrInv },
    process:
        'Git Go is a VS Code extension built with TypeScript, React, TanStack Query, and Tailwind CSS. The webview panel renders an SVG commit graph. The extension communicates with git via child processes and watches for repository changes with the VS Code git API.',
    date: '2026-05-01',
    horizontal: true
};
