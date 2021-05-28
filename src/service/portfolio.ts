// Tennis Pro
import tennisProLogo from '../assets/images/portfolio/tennispro-logo.png';
import tennisPro1 from '../assets/images/portfolio/tennispro-1.png';
import tennisPro2 from '../assets/images/portfolio/tennispro-2.png';
import tennisPro3 from '../assets/images/portfolio/tennispro-3.png';
import tennisPro4 from '../assets/images/portfolio/tennispro-4.png';
import tennisPro5 from '../assets/images/portfolio/tennispro-5.png';
import tennisPro6 from '../assets/images/portfolio/tennispro-6.png';
import tennisPro7 from '../assets/images/portfolio/tennispro-7.png';
import tennisPro8 from '../assets/images/portfolio/tennispro-8.png';

// LOB Imóveis
import lobImoveisLogo from '../assets/images/portfolio/lobimoveis-logo.png';
import lobImoveis1 from '../assets/images/portfolio/lobimoveis-1.jpg';
import lobImoveis2 from '../assets/images/portfolio/lobimoveis-2.jpg';
import lobImoveis3 from '../assets/images/portfolio/lobimoveis-3.jpg';

export const PORTFOLIO = [
  {
    id: 1,
    name: 'Tennis Pro',
    company: 'Loomer Tech',
    mainImage: tennisProLogo,
    url: 'https://tennisproapp.com/',
    slug: 'tennis-pro',
    color: 'orange',
    jobInfo: {
      role: 'Front-end developer',
      type: 'Mobile',
      language: 'React Native',
      startDate: {
        month: 'February',
        year: 2021
      },
      endDate: {
        month: '',
        year: 2021
      },
      mainTools: [
        'Redux',
        'JavaScript',
        'Axios',
        'Postgres',
        'Node.js',
        'React Native',
        'GIT',
        'Docker',
        'Scrum Methodology',
        'Microsoft Azure for versioning'
      ],
      images: [
        tennisPro1,
        tennisPro2,
        tennisPro3,
        tennisPro4,
        tennisPro5,
        tennisPro6,
        tennisPro7,
        tennisPro8
      ]
    },
    text: 'Mobile app for tennis players around the world, to participate on competitions, ranks, by materials and hire a coach. The team had to create a connection between all the players and clubs, and that made this the most complex project.'
  },
  {
    id: 2,
    name: 'LOB Imóveis',
    company: 'Loomer Tech',
    mainImage: lobImoveisLogo,
    url: 'https://lobimoveis.com/',
    slug: 'lob-imoveis',
    color: 'blue',
    jobInfo: {
      role: 'Front-end developer',
      type: 'Mobile',
      language: 'React Native',
      startDate: {
        month: 'March',
        year: 2021
      },
      endDate: {
        month: 'April',
        year: 2021
      },
      mainTools: [
        'React Native',
        'Redux',
        'JavaScript',
        'Axios, for API request',
        'Postgres',
        'GIT',
        'Docker',
        'Scrum methodology',
        'Microsoft Azure for versioning'
      ],
      images: [lobImoveis1, lobImoveis2, lobImoveis3]
    },
    text: 'Mobile app for people to buy, sell and rent properties. The project was made using React Native framework, Node.js and Postgres database. As front-end, I worked on it by using much knowledge of JavaScript, React Native, Node.js, Redux and Axios for API request.'
  }
];
