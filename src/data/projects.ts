export type Project = {
    route: string;
    title: string;
    subtitle: string;
    description: string[];
    links: {
        url: string;
        icon: string;
    }[];
    qr: string | false;
    videoPosition: number;
    video: boolean;
    numberOfScreenshots: number;
    process: string;
    date: string;
    horizontal: boolean;
    disabled?: boolean;
};

export const apps: Project[] = [
    {
        route: 'bookly',
        title: 'Bookly',
        subtitle: 'Keep track of the books you’ve read and the ones you wish to read.',
        description: [
            'Search for any book and add it to your library. Keep track of the books you are reading and the ones you wish to read.',
            'View stats like how many books you have read in total or the average number of pages you read per year.',
        ],
        links: [
            { url: 'https://play.google.com/store/apps/details?id=app.vercel.bookly2', icon: 'ri:android-fill' },
            { url: 'https://www.microsoft.com/store/apps/9P8HL4CVHVBM', icon: 'ri:windows-fill' },
            { url: 'https://github.com/CarlesRojas/bookly2', icon: 'ri:github-fill' },
        ],
        qr: 'https://bookly2.vercel.app/',
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 4, // 6
        process:
            'Bookly is a Progressive Web App made with NextJS, TypeScript, tRPC, next-auth and Prisma. It targets mobile, tablet and desktop devices and it is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
        date: '2022-09-01',
        horizontal: false,
    },
    {
        route: 'covid19',
        title: 'Covid-19',
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
        qr: false, //  "https://estado-covid.netlify.app/"
        videoPosition: 2,
        video: true,
        numberOfScreenshots: 3, // 6
        process:
            'Covid-19 is a Progressive Web App made with ReactJS targeting mobile devices. It is not available right now.',
        date: '2022-02-01',
        horizontal: false,
    },
    {
        route: 'fanfastic',
        title: 'Fanfastic',
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
        qr: false, // https://fanfastic.netlify.app/
        videoPosition: 5,
        video: true,
        numberOfScreenshots: 3, // 5
        process:
            'Fanfastic is a Progressive Web App made with ReactJS that targets mobile, tablet and desktop devices. It is available through the Google Play Store and in the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
        date: '2022-01-01',
        horizontal: false,
    },
    {
        route: 'godHead',
        title: 'GodHead',
        subtitle: 'Find out what each item does in The Binding of Isaac: Repentance.',
        description: [
            'Having trouble remembering what an item does? The Binding of Isaac has more than a thousand of them, so it is not surprising. Use this app to quickly find out everything about them.',
            'You can search the items by their icon, their name or their subtitle.',
        ],
        links: [{ url: 'https://github.com/CarlesRojas/GodHead', icon: 'ri:github-fill' }],
        qr: 'http://godhead.netlify.app/',
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 3, // 4
        process:
            'GodHead is a Progressive Web App made with ReactJS targeting mobile and desktop devices. You can add it as an app to your PC, Android, or iPhone by scanning this QR and adding the page to your Home Screen.',
        date: '2021-05-01',
        horizontal: true,
    },
    {
        route: 'limeLauncher',
        title: 'Lime Launcher',
        subtitle: 'Clean and efficient Android launcher with strong privacy and no ads.',
        description: [
            'Introducing Lime Launcher - the minimalistic Android launcher that puts simplicity and efficiency first. With a clean and straightforward design, this launcher makes it easy to access and organize your apps.',
        ],
        links: [
            { url: 'https://play.google.com/store/apps/details?id=app.pinya.lime', icon: 'ri:android-fill' },
            { url: 'https://github.com/CarlesRojas/lime-launcher', icon: 'ri:github-fill' },
        ],
        qr: 'https://play.google.com/store/apps/details?id=app.pinya.lime',
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 4, // 7
        process:
            'Lime Launcher was developed using Android Studio and available for download through the Google Play Store.',
        date: '2023-01-01',
        horizontal: false,
    },
    {
        route: 'scoot',
        title: 'Scoot',
        subtitle: 'Navigate a great catalog of motorcycles by Mundimoto.',
        description: [
            'The application allows you to explore Mundimoto’s motorcycles while it learns your preferences to show you more relevant results.',
            'This app was developed alongside Jaume Ballester and Santi Rubio for the 2022 HackUPC.',
        ],
        links: [
            { url: 'https://github.com/CarlesRojas/hackupc2022', icon: 'ri:github-fill' },
            { url: 'https://github.com/JaumeBallester/hackupc2022-server', icon: 'ri:github-fill' },
        ],
        qr: 'https://scoot.pinya.app/',
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 3, // 7
        process:
            'Scoot is a Progressive Web App made with ReactJS that targets mobile, tablet and desktop devices. You can also add it to your phone by scanning or clicking this QR and adding the website to your Home Screen.',
        date: '2022-05-01',
        horizontal: false,
    },
    {
        route: 'cryptoPlace',
        title: 'CryptoPlace',
        subtitle: 'A recreation of the r/place experiment where every pixel is an NFT (Non Fungible Token).',
        description: [
            'Each pixel in the 256x256 canvas is owned by someone who can change its color. You can buy a group of them or work together to create pixel art.',
            'CryptoPlace is a decentralized app (DApp) that uses Smart Contracts and the ERC721 standard to make sure each pixel is really owned by the person that mints it or buys it.',
        ],
        links: [{ url: 'https://github.com/CarlesRojas/CryptoBoard', icon: 'ri:github-fill' }],
        qr: false, // "http://cryptoplace.netlify.app/"
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 3,
        process:
            'CryptoPlace is a DApp made using ReactJS and Solidity for the Smart Contracts. It hasn’t been deployed to the Ethereum network so it is not available right now.',
        date: '2021-05-01',
        horizontal: true,
        disabled: true,
    },
    {
        route: 'matchEat',
        title: 'MatchEat',
        subtitle: 'Find the restaurant around you that matches your friend group best.',
        description: [
            'Having trouble choosing a restaurant with your friends or your significant other? Use MatchEat to find the restaurant around you that the group likes the most.',
            'Everyone joins a room at the same time from their phones. Each of you will see the same list of nearby restaurants and will give each one a Like, Love or Nope. When everyone is finished, the restaurants will be ranked, and you can get directions to any of them.',
        ],
        links: [
            { url: 'https://github.com/CarlesRojas/matcheat-client', icon: 'ri:github-fill' },
            { url: 'https://github.com/CarlesRojas/matcheat-server', icon: 'ri:github-fill' },
        ],
        qr: 'http://matcheat.netlify.app/',
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 7,
        process:
            'MatchEat is a Progressive Web App made with ReactJS targeting mobile devices. You can add it as an app to your Android or iPhone by scanning this QR and adding the page to your Home Screen.',
        date: '2021-08-01',
        horizontal: false,
        disabled: true,
    },
    {
        route: 'reddon',
        title: 'Reddon',
        subtitle: 'A client for Reddit that navigates posts horizontally.',
        description: [
            'Reddon is an app that connects to your current Reddit account and lets you navigate the most recent posts using horizontal scrolling.',
        ],
        links: [{ url: 'https://github.com/CarlesRojas/Reddon', icon: 'ri:github-fill' }],
        qr: false,
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 4,
        process:
            'Reddon is a Progressive Web App made with ReactJS targeting mobile devices. It is not available right now.',
        date: '2020-09-01',
        horizontal: false,
        disabled: true,
    },
    {
        route: 'spot',
        title: 'Spot',
        subtitle: 'A minimal and traditional client for Spotify.',
        description: [
            'Spot is an app that connects to your current Spotify account and lets you explore your music using a traditional library with a minimalistic design.',
        ],
        links: [
            { url: 'https://github.com/CarlesRojas/Spot2', icon: 'ri:github-fill' },
            { url: 'https://github.com/CarlesRojas/Spot-Server', icon: 'ri:github-fill' },
        ],
        qr: false,
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 6,
        process:
            'Spot is a Progressive Web App made with ReactJS targeting mobile devices. It is not available right now.',
        date: '2021-08-01',
        horizontal: false,
        disabled: true,
    },
];

export const games: Project[] = [
    {
        route: 'kubic',
        title: 'Kubic',
        subtitle: 'Stack and puzzle the 3D tetrominos to avoid them getting to the top!',
        description: [
            'Both the pieces and the board have three dimensions, making this a lot more challenging! Clear planes by filling them and try to reach the highest score by clearing four at the same time!',
        ],
        links: [
            { url: 'https://play.google.com/store/apps/details?id=app.pinya.kubic', icon: 'ri:android-fill' },
            { url: 'https://www.microsoft.com/store/apps/9NZLVCD128J4', icon: 'ri:windows-fill' },
            { url: 'https://github.com/CarlesRojas/kubic-client', icon: 'ri:github-fill' },
            { url: 'https://github.com/CarlesRojas/kubic-server', icon: 'ri:github-fill' },
        ],
        qr: 'https://kubic.pinya.app/',
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 3, // 5
        process:
            'Kubic is a Progressive Web App made with ReactJS and ThreeJS. It targets mobile, tablet and desktop devices. The game is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
        date: '2022-02-01',
        horizontal: false,
    },
    {
        route: 'letsDrive',
        title: "Let's Drive",
        subtitle: 'Deliver all cars to their destination while avoiding your past trips!',
        description: [
            'You drive a single vehicle with a destination, and you decide the way, but beware! In each round you will cross with all your previous vehicles and their routes.',
            'Add seconds to the clock or repair your vehicle by getting the powerups around the map. Will you deliver all cars to their destinations without accidents?',
            'Let’s drive!',
        ],
        links: [
            { url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.LetsDrive', icon: 'ri:android-fill' },
        ],
        qr: false,
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 3, // 6
        process:
            'Let’s Drive is a game made with Unity targeting the mobile devices. This app was developed alongside Alejandra Jiménez. The game is coded in C# and it is currently published on the Google Play Store.',
        date: '2018-12-01',
        horizontal: true,
    },
    {
        route: 'neoWar',
        title: 'NeoWar',
        subtitle: 'Avoid the endless stream of neon enemies coming at you!',
        description: [
            'Control your neon spaceship and shoot down the opposition trying to bring you down. Grab powerups to help you get out of sticky situations and hang on as much as possible.',
        ],
        links: [
            { url: 'https://pinyagames.itch.io/neowar', icon: 'ri:gamepad-fill' },
            { url: 'https://github.com/CarlesRojas/Neowar', icon: 'ri:github-fill' },
        ],
        qr: false,
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 3, // 6
        process:
            'NeoWar is a game made with Unity targeting Windows devices. It was developed alongside Jaume Ballester and Santi Rubio. It was coded in C# and can be played online.',
        date: '2020-01-01',
        horizontal: true,
    },
    {
        route: 'portal',
        title: 'Portal',
        subtitle: 'A Portal inspired game, but 2D and using pixel art.',
        description: [
            'Solve Portal-like puzzles in 2D. Create your own levels with an intuitive in-game tool and share them. You can play any level in the game as well as the ones created by the community.',
        ],
        links: [],
        qr: false,
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 4,
        process:
            'Portal is a work in progress game made with Unity targeting Windows devices. The sprites were created using Photoshop and Illustrator. The game is coded in C# and is not yet available.',
        date: '2019-07-01',
        horizontal: true,
    },
    {
        route: 'rushSlide',
        title: 'Rush Slide',
        subtitle: 'Rush Hour is a puzzle game where players use strategy to escape a congested grid.',
        description: [
            'Rush Slide is a puzzle game that challenges players to manoeuvre a series of pieces in a congested grid, with the goal of creating a clear path for the red piece to exit the grid. Players must carefully shift the positions of the long and short pieces on the board, using logic and strategy to find the solution.',
        ],
        links: [
            { url: 'https://play.google.com/store/apps/details?id=app.vercel.rushslide', icon: 'ri:android-fill' },
            { url: 'https://www.microsoft.com/store/apps/9NJ1PDVTFVF1', icon: 'ri:windows-fill' },
            { url: 'https://github.com/CarlesRojas/rush-slide', icon: 'ri:github-fill' },
        ],
        qr: 'https://rushslide.vercel.app/',
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 3, // 4
        process:
            'Rush Slide is a cross-platform puzzle game that can be played on mobile, tablet, and desktop devices. It was developed using NextJS and TypeScript, and is available for download through the Google Play Store and Microsoft Store. iPhone users can also access the game by scanning a QR code and adding the website to their home screen.',
        date: '2022-12-01',
        horizontal: false,
    },
    {
        route: 'simulchess',
        title: 'SimulChess',
        subtitle: 'A chess variant where turns are played simultaneously.',
        description: [
            'Your turn and the opponents happen at the same time. You have 60 seconds to decide your move. Missing it loses you the game. Once both players have decided, both moves will resolve simultaneously.',
            'If both moves end up in the same square, the player with precedence will capture the opponent’s piece. White starts having precedence, and it changes every turn.',
        ],
        links: [
            { url: 'https://play.google.com/store/apps/details?id=app.pinya.simulchess', icon: 'ri:android-fill' },
            { url: 'https://www.microsoft.com/store/apps/9N7L52DD9PFK', icon: 'ri:windows-fill' },
            { url: 'https://github.com/CarlesRojas/simulchess', icon: 'ri:github-fill' },
        ],
        qr: 'https://simulchess.pinya.app/',
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 3, // 5
        process:
            'SimulChess is a Progressive Web App made with ReactJS and PixiJS. It targets mobile, tablet and desktop devices. The game is available through the Google Play Store and the Microsoft Store. You can also add it to your iPhone by scanning this QR and adding the website to your Home Screen.',
        date: '2022-07-01',
        horizontal: false,
    },
    {
        route: 'escape',
        title: 'Escape',
        subtitle: 'Escape through the maze using power ups and avoiding the red wall!',
        description: [
            'Use the phones accelerometer to move around a dark maze and collect power ups to escape from the inevitable red wall.',
        ],
        links: [
            { url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.Escape', icon: 'ri:android-fill' },
        ],
        qr: false,
        videoPosition: 0,
        video: true,
        numberOfScreenshots: 7,
        process:
            'Escape is a game made with Unity targeting the mobile devices. It was coded in C# is currently published on the Google Play Store.',
        date: '2018-02-01',
        horizontal: true,
        disabled: true,
    },
    {
        route: 'holoChess',
        title: 'HoloChess',
        subtitle: 'The first holographic chess game ever.',
        description: [
            'Play against as AI with three difficulty levels and enjoy the classic game of chess in the augmented world. Choose your favorite style, place the board on your table and enjoy!',
        ],
        links: [
            { url: 'https://www.microsoft.com/en-us/store/p/holochess-beta/9nblggh40d7c', icon: 'ri:windows-fill' },
        ],
        qr: false,
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 4,
        process:
            'HoloChess is a game made with Unity targeting the HoloLens device by Microsoft. The distinctively styled chessboards and pieces have been modeled using SolidWorks and Maya and textured with Photoshop. The game is coded in C# and is currently published on the Windows Store, available only for the HoloLens.',
        date: '2016-11-01',
        horizontal: true,
        disabled: true,
    },
    {
        route: 'infinityGallery',
        title: 'Infinity Gallery',
        subtitle: 'The biggest collection of pictures in the world, for a specific kind of pictures.',
        description: [
            'All the pictures in Infinity Gallery are 64 by 64 pixels and in grayscale, using 64 shades of grey. The reason the Infinity Gallery is so big is because it contains every combination possible of this finite number of pixels and gray tonalities. Exactly 1.29 x 10^7398 pictures. You’ve read this number quite fast, and you’re probably not grasping how enormously big that is.',
            'So, what are the implications of this? In this Gallery you can find every single picture (with those properties) that has been taken in the past and that will be taken in the future. It even contains all the pictures that will never be taken. There is a 64x64 grayscale version of every picture you have posted and will ever post on social media, of each planet in the Universe and each species that may or may not live on them. There is also a picture of those keys you lost a few years ago in the exact location they are now. The only hard task is finding them. Good luck!',
        ],
        links: [
            {
                url: 'https://play.google.com/store/apps/details?id=com.PinyaGames.InfinityGallery',
                icon: 'ri:android-fill',
            },
        ],
        qr: false,
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 8,
        process:
            'Infinity Gallery is an app made with Unity targeting mobile devices. All images been made using Illustrator and Photoshop. The app was coded in C# is currently published on Google Play Store.',
        date: '2017-05-01',
        horizontal: false,
        disabled: true,
    },
    {
        route: 'trickShots',
        title: 'TrickShots',
        subtitle: 'Augmented reality trick-shots using your room and virtual props.',
        description: [
            'Perform limitless trick shots with a holographic tennis ball that will interact with your surroundings. Add an assortment of different holographic objects like a basketball hoop, a paper bin or a couple of teleporting portals. Challenge yourself and achieve bigger combos to get the higher scores.',
        ],
        links: [{ url: 'https://www.microsoft.com/en-us/store/p/trickshots/9nkmv03xqcng', icon: 'ri:windows-fill' }],
        qr: false,
        videoPosition: 0,
        video: false,
        numberOfScreenshots: 4,
        process:
            'TrickShots is a game made with Unity targeting the HoloLens device by Microsoft. The 3D holograms that can be placed into the world have been modeled using SolidWorks and Maya and textured with Photoshop. The game is coded in C# and is currently published on the Windows Store, available only for the HoloLens.',
        date: '2017-03-01',
        horizontal: true,
        disabled: true,
    },
];
