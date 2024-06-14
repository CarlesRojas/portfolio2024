import Poster from '@asset/bookly/poster.png';
import Icon from '@asset/spellbook/icon.png';
import Qr from '@asset/spellbook/qr.png';
import QrInv from '@asset/spellbook/qr_inverted.png';
import Screenshot1 from '@asset/spellbook/screenshot1.png';
import Screenshot2 from '@asset/spellbook/screenshot2.png';
import Screenshot3 from '@asset/spellbook/screenshot3.png';
import Screenshot4 from '@asset/spellbook/screenshot4.png';
import Screenshot5 from '@asset/spellbook/screenshot5.png';
import Screenshot6 from '@asset/spellbook/screenshot6.png';

import type { Project } from '@data/projects';

export const spellbook: Project = {
    route: 'spellbook',
    icon: Icon,
    poster: Poster,
    screenshots: [Screenshot1, Screenshot2, Screenshot3, Screenshot4, Screenshot5, Screenshot6],
    title: 'SpellBook',
    subtitle: 'Discover all D&D 5e spells! Create characters, and track your spell slots.',
    description: [
        "Unleash your magical potential with our ultimate Dungeons & Dragons 5th Edition spell management app! Whether you're a seasoned wizard or a new adventurer, our app provides everything you need to elevate your spellcasting experience.",
        '- All D&D 5E Spells at Your Fingertips: Browse and explore an extensive database of every spell from D&D 5E, complete with detailed descriptions, effects, and requirements. Never miss out on a crucial incantation again!',
        "- Create and Customize Characters: Easily create unique characters, each with their own tailored spellbooks. Personalize your spell lists to fit your character's class, level, and unique abilities.",
        '- Effortless Spell Slot Management: Keep track of your spell slots with ease. Our app helps you manage your spell usage, ensuring you always know how many spells you have left to cast during your adventures.',
        'With an intuitive interface and powerful features, our app is designed to enhance your D&D experience, allowing you to focus on the magic and wonder of your journey. Download now and start your spellbinding adventure!'
    ],
    links: [
        { url: 'https://play.google.com/store/apps/details?id=com.spellbook.dnd', icon: 'ri:android-fill' },
        { url: 'https://github.com/CarlesRojas/spellbook', icon: 'ri:github-fill' }
    ],
    qr: { url: 'https://www.spellbookdnd.com', src: Qr, srcInv: QrInv },
    process:
        'SpellBook is a Progressive Web App made with NextJS 14, TypeScript, React-Query, Next-Auth and Drizzle. It targets mobile, tablet and desktop devices and it is available through the Google Play Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
    date: '2024-06-01',
    horizontal: false
};
