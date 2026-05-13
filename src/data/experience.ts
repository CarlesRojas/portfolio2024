export interface Experience {
    title: string;
    place: string;
    date: string;
    icon: string;
    description: string[];
}

export const experiences: Experience[] = [
    {
        title: 'Fullstack Software Engineer II',
        place: 'Rover.com',
        date: '2025 - Present',
        icon: 'Computer',
        description: ["I'm part of the booking group and help mantain and improve the booking flow for Rover customers"]
    },
    {
        title: 'Fullstack Software Engineer & Product Owner',
        place: 'MundiMoto Group',
        date: '2022 - 2025',
        icon: 'Computer',
        description: [
            "Fullstack developer and product owner for one of the company's products. Using NextJS, Django and AWS."
        ]
    },
    {
        title: 'Frontend Software Engineer',
        place: 'Accedo.tv',
        date: '2021 - 2022',
        icon: 'React',
        description: [
            'Frontend developer for Smart TV streaming and video on demand apps. Using React, Redux and Typescript.'
        ]
    },
    {
        title: 'Frontend Web Developer',
        place: 'G-Stocks Global Investments',
        date: '2018 - 2021',
        icon: 'React',
        description: ["Frontend developer for the company's main website and stock analysis tool. Using React."]
    },
    {
        title: 'Game Developer & Designer',
        place: 'Pinya Games - Freelance',
        date: '2016 - Present',
        icon: 'Gamepad',
        description: [
            "Freelance game developer. I've worked in several Unity games and some web-based Typescript ones."
        ]
    },
    {
        title: 'Certificate of Proficiency in English - C2 Level',
        place: 'Cambridge University',
        date: '2019',
        icon: 'Translate',
        description: []
    },
    {
        title: "Bachelor's Degree in informatics Engineering",
        place: "Facultat d'Informàtica de Barcelona",
        date: '2015 - 2019',
        icon: 'Graduation',
        description: []
    },
    {
        title: "Bachelor's Degree in Product Design",
        place: 'EINA Centre Universitari de Disseny i Art de Barcelona',
        date: '2011 - 2015',
        icon: 'Graduation',
        description: []
    }
];
