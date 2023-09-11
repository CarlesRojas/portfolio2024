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

export const games: Project[] = [];
