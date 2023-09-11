import type { Project } from '@data/projects';

export const games: Project[] = [
    // {
    //     route: 'kubic',
    //     title: 'Kubic',
    //     subtitle: 'Stack and puzzle the 3D tetrominos to avoid them getting to the top!',
    //     description: [
    //         'Both the pieces and the board have three dimensions, making this a lot more challenging! Clear planes by filling them and try to reach the highest score by clearing four at the same time!',
    //     ],
    //     links: [
    //         { url: 'https://play.google.com/store/apps/details?id=app.pinya.kubic', icon: 'ri:android-fill' },
    //         { url: 'https://www.microsoft.com/store/apps/9NZLVCD128J4', icon: 'ri:windows-fill' },
    //         { url: 'https://github.com/CarlesRojas/kubic-client', icon: 'ri:github-fill' },
    //         { url: 'https://github.com/CarlesRojas/kubic-server', icon: 'ri:github-fill' },
    //     ],
    //     qr: 'https://kubic.pinya.app/',
    //     videoPosition: 0,
    //     video: true,
    //     numberOfScreenshots: 3, // 5
    //     process:
    //         'Kubic is a Progressive Web App made with ReactJS and ThreeJS. It targets mobile, tablet and desktop devices. The game is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
    //     date: '2022-02-01',
    //     horizontal: false,
    // },
    // {
    //     route: 'letsDrive',
    //     title: "Let's Drive",
    //     subtitle: 'Deliver all cars to their destination while avoiding your past trips!',
    //     description: [
    //         'You drive a single vehicle with a destination, and you decide the way, but beware! In each round you will cross with all your previous vehicles and their routes.',
    //         'Add seconds to the clock or repair your vehicle by getting the powerups around the map. Will you deliver all cars to their destinations without accidents?',
    //         'Let’s drive!',
    //     ],
    //     links: [
    //         { url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.LetsDrive', icon: 'ri:android-fill' },
    //     ],
    //     qr: false,
    //     videoPosition: 0,
    //     video: true,
    //     numberOfScreenshots: 3, // 6
    //     process:
    //         'Let’s Drive is a game made with Unity targeting the mobile devices. This app was developed alongside Alejandra Jiménez. The game is coded in C# and it is currently published on the Google Play Store.',
    //     date: '2018-12-01',
    //     horizontal: true,
    // },
    // {
    //     route: 'neoWar',
    //     title: 'NeoWar',
    //     subtitle: 'Avoid the endless stream of neon enemies coming at you!',
    //     description: [
    //         'Control your neon spaceship and shoot down the opposition trying to bring you down. Grab powerups to help you get out of sticky situations and hang on as much as possible.',
    //     ],
    //     links: [
    //         { url: 'https://pinyagames.itch.io/neowar', icon: 'ri:gamepad-fill' },
    //         { url: 'https://github.com/CarlesRojas/Neowar', icon: 'ri:github-fill' },
    //     ],
    //     qr: false,
    //     videoPosition: 0,
    //     video: true,
    //     numberOfScreenshots: 3, // 6
    //     process:
    //         'NeoWar is a game made with Unity targeting Windows devices. It was developed alongside Jaume Ballester and Santi Rubio. It was coded in C# and can be played online.',
    //     date: '2020-01-01',
    //     horizontal: true,
    // },
    // {
    //     route: 'portal',
    //     title: 'Portal',
    //     subtitle: 'A Portal inspired game, but 2D and using pixel art.',
    //     description: [
    //         'Solve Portal-like puzzles in 2D. Create your own levels with an intuitive in-game tool and share them. You can play any level in the game as well as the ones created by the community.',
    //     ],
    //     links: [],
    //     qr: false,
    //     videoPosition: 0,
    //     video: false,
    //     numberOfScreenshots: 4,
    //     process:
    //         'Portal is a work in progress game made with Unity targeting Windows devices. The sprites were created using Photoshop and Illustrator. The game is coded in C# and is not yet available.',
    //     date: '2019-07-01',
    //     horizontal: true,
    // },
    // {
    //     route: 'rushSlide',
    //     title: 'Rush Slide',
    //     subtitle: 'Rush Hour is a puzzle game where players use strategy to escape a congested grid.',
    //     description: [
    //         'Rush Slide is a puzzle game that challenges players to manoeuvre a series of pieces in a congested grid, with the goal of creating a clear path for the red piece to exit the grid. Players must carefully shift the positions of the long and short pieces on the board, using logic and strategy to find the solution.',
    //     ],
    //     links: [
    //         { url: 'https://play.google.com/store/apps/details?id=app.vercel.rushslide', icon: 'ri:android-fill' },
    //         { url: 'https://www.microsoft.com/store/apps/9NJ1PDVTFVF1', icon: 'ri:windows-fill' },
    //         { url: 'https://github.com/CarlesRojas/rush-slide', icon: 'ri:github-fill' },
    //     ],
    //     qr: 'https://rushslide.vercel.app/',
    //     videoPosition: 0,
    //     video: true,
    //     numberOfScreenshots: 3, // 4
    //     process:
    //         'Rush Slide is a cross-platform puzzle game that can be played on mobile, tablet, and desktop devices. It was developed using NextJS and TypeScript, and is available for download through the Google Play Store and Microsoft Store. iPhone users can also access the game by scanning a QR code and adding the website to their home screen.',
    //     date: '2022-12-01',
    //     horizontal: false,
    // },
    // {
    //     route: 'simulchess',
    //     title: 'SimulChess',
    //     subtitle: 'A chess variant where turns are played simultaneously.',
    //     description: [
    //         'Your turn and the opponents happen at the same time. You have 60 seconds to decide your move. Missing it loses you the game. Once both players have decided, both moves will resolve simultaneously.',
    //         'If both moves end up in the same square, the player with precedence will capture the opponent’s piece. White starts having precedence, and it changes every turn.',
    //     ],
    //     links: [
    //         { url: 'https://play.google.com/store/apps/details?id=app.pinya.simulchess', icon: 'ri:android-fill' },
    //         { url: 'https://www.microsoft.com/store/apps/9N7L52DD9PFK', icon: 'ri:windows-fill' },
    //         { url: 'https://github.com/CarlesRojas/simulchess', icon: 'ri:github-fill' },
    //     ],
    //     qr: 'https://simulchess.pinya.app/',
    //     videoPosition: 0,
    //     video: true,
    //     numberOfScreenshots: 3, // 5
    //     process:
    //         'SimulChess is a Progressive Web App made with ReactJS and PixiJS. It targets mobile, tablet and desktop devices. The game is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
    //     date: '2022-07-01',
    //     horizontal: false,
    // },
    // {
    //     route: 'escape',
    //     title: 'Escape',
    //     subtitle: 'Escape through the maze using power ups and avoiding the red wall!',
    //     description: [
    //         'Use the phones accelerometer to move around a dark maze and collect power ups to escape from the inevitable red wall.',
    //     ],
    //     links: [
    //         { url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.Escape', icon: 'ri:android-fill' },
    //     ],
    //     qr: false,
    //     videoPosition: 0,
    //     video: true,
    //     numberOfScreenshots: 7,
    //     process:
    //         'Escape is a game made with Unity targeting the mobile devices. It was coded in C# is currently published on the Google Play Store.',
    //     date: '2018-02-01',
    //     horizontal: true,
    //     disabled: true,
    // },
    // {
    //     route: 'holoChess',
    //     title: 'HoloChess',
    //     subtitle: 'The first holographic chess game ever.',
    //     description: [
    //         'Play against as AI with three difficulty levels and enjoy the classic game of chess in the augmented world. Choose your favorite style, place the board on your table and enjoy!',
    //     ],
    //     links: [
    //         { url: 'https://www.microsoft.com/en-us/store/p/holochess-beta/9nblggh40d7c', icon: 'ri:windows-fill' },
    //     ],
    //     qr: false,
    //     videoPosition: 0,
    //     video: false,
    //     numberOfScreenshots: 4,
    //     process:
    //         'HoloChess is a game made with Unity targeting the HoloLens device by Microsoft. The distinctively styled chessboards and pieces have been modeled using SolidWorks and Maya and textured with Photoshop. The game is coded in C# and is currently published on the Windows Store, available only for the HoloLens.',
    //     date: '2016-11-01',
    //     horizontal: true,
    //     disabled: true,
    // },
    // {
    //     route: 'infinityGallery',
    //     title: 'Infinity Gallery',
    //     subtitle: 'The biggest collection of pictures in the world, for a specific kind of pictures.',
    //     description: [
    //         'All the pictures in Infinity Gallery are 64 by 64 pixels and in grayscale, using 64 shades of grey. The reason the Infinity Gallery is so big is because it contains every combination possible of this finite number of pixels and gray tonalities. Exactly 1.29 x 10^7398 pictures. You’ve read this number quite fast, and you’re probably not grasping how enormously big that is.',
    //         'So, what are the implications of this? In this Gallery you can find every single picture (with those properties) that has been taken in the past and that will be taken in the future. It even contains all the pictures that will never be taken. There is a 64x64 grayscale version of every picture you have posted and will ever post on social media, of each planet in the Universe and each species that may or may not live on them. There is also a picture of those keys you lost a few years ago in the exact location they are now. The only hard task is finding them. Good luck!',
    //     ],
    //     links: [
    //         {
    //             url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.InfinityGallery',
    //             icon: 'ri:android-fill',
    //         },
    //     ],
    //     qr: false,
    //     videoPosition: 0,
    //     video: false,
    //     numberOfScreenshots: 8,
    //     process:
    //         'Infinity Gallery is an app made with Unity targeting mobile devices. All images been made using Illustrator and Photoshop. The app was coded in C# is currently published on Google Play Store.',
    //     date: '2017-05-01',
    //     horizontal: false,
    //     disabled: true,
    // },
    // {
    //     route: 'trickShots',
    //     title: 'TrickShots',
    //     subtitle: 'Augmented reality trick-shots using your room and virtual props.',
    //     description: [
    //         'Perform limitless trick shots with a holographic tennis ball that will interact with your surroundings. Add an assortment of different holographic objects like a basketball hoop, a paper bin or a couple of teleporting portals. Challenge yourself and achieve bigger combos to get the higher scores.',
    //     ],
    //     links: [{ url: 'https://www.microsoft.com/en-us/store/p/trickshots/9nkmv03xqcng', icon: 'ri:windows-fill' }],
    //     qr: false,
    //     videoPosition: 0,
    //     video: false,
    //     numberOfScreenshots: 4,
    //     process:
    //         'TrickShots is a game made with Unity targeting the HoloLens device by Microsoft. The 3D holograms that can be placed into the world have been modeled using SolidWorks and Maya and textured with Photoshop. The game is coded in C# and is currently published on the Windows Store, available only for the HoloLens.',
    //     date: '2017-03-01',
    //     horizontal: true,
    //     disabled: true,
    // },
];
