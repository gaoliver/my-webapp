// Tennis Pro
import tennisProLogo from '../assets/images/portfolio/tennispro-logo.png';
import tennisPro1 from '../assets/images/portfolio/tennispro-1.png';
import tennisPro2 from '../assets/images/portfolio/tennispro-2.png';
import tennisPro3 from '../assets/images/portfolio/tennispro-3.png';
import tennisPro4 from '../assets/images/portfolio/tennispro-4.png';
import tennisPro5 from '../assets/images/portfolio/tennispro-5.png';
import tennisPro6 from '../assets/images/portfolio/tennispro-6.png';
import tennisPro7 from '../assets/images/portfolio/tennispro-7.png';

// LOB Imóveis
import lobImoveisLogo from '../assets/images/portfolio/lobimoveis-logo.png';
import lobImoveis1 from '../assets/images/portfolio/lobimoveis-1.jpg';
import lobImoveis2 from '../assets/images/portfolio/lobimoveis-2.jpg';
import lobImoveis3 from '../assets/images/portfolio/lobimoveis-3.jpg';

// Ferti-Peixe
import fertiPeixeLogo from '../assets/images/portfolio/fertipeixe-logo.png';
import fertiPeixe1 from '../assets/images/portfolio/fertipeixe-1.png';
import fertiPeixe2 from '../assets/images/portfolio/fertipeixe-2.png';
import fertiPeixe3 from '../assets/images/portfolio/fertipeixe-3.png';
import fertiPeixe4 from '../assets/images/portfolio/fertipeixe-4.png';
import fertiPeixe5 from '../assets/images/portfolio/fertipeixe-5.png';

// Gonçalves e Filhos Importações
import GFLogo from '../assets/images/portfolio/GF-logo.png';
import GF1 from '../assets/images/portfolio/GF-1.png';
import GF2 from '../assets/images/portfolio/GF-2.png';
import GF3 from '../assets/images/portfolio/GF-3.png';
import GF4 from '../assets/images/portfolio/GF-4.png';
import GF5 from '../assets/images/portfolio/GF-5.png';
import GF6 from '../assets/images/portfolio/GF-6.png';
import GF7 from '../assets/images/portfolio/GF-7.png';

// Femperj
import femperjLogo from '../assets/images/portfolio/femperj-logo.jpg';
import femperj1 from '../assets/images/portfolio/femperj-1.jpg';
import femperj2 from '../assets/images/portfolio/femperj-2.jpg';
import femperj3 from '../assets/images/portfolio/femperj-3.jpg';
import femperj4 from '../assets/images/portfolio/femperj-4.jpg';

// Amperj
import amperjLogo from '../assets/images/portfolio/amperj-logo.png';
import amperj1 from '../assets/images/portfolio/amperj-1.png';
import amperj2 from '../assets/images/portfolio/amperj-2.png';
import amperj3 from '../assets/images/portfolio/amperj-3.png';
import amperj4 from '../assets/images/portfolio/amperj-4.png';
import amperj5 from '../assets/images/portfolio/amperj-5.png';
import amperj6 from '../assets/images/portfolio/amperj-6.png';
import amperj7 from '../assets/images/portfolio/amperj-7.png';

// Milk & Fruit
import milkLogo from '../assets/images/portfolio/milkefruit-logo.png';
import milk1 from '../assets/images/portfolio/milkefruit-1.png';
import milk2 from '../assets/images/portfolio/milkefruit-2.png';
import milk3 from '../assets/images/portfolio/milkefruit-3.png';
import milk4 from '../assets/images/portfolio/milkefruit-4.png';
import milk5 from '../assets/images/portfolio/milkefruit-5.png';
import milk6 from '../assets/images/portfolio/milkefruit-6.png';
import milk7 from '../assets/images/portfolio/milkefruit-7.png';
import milk8 from '../assets/images/portfolio/milkefruit-8.png';

// NerdLine
import nerdLogo from '../assets/images/portfolio/nerdline-logo.png';
import nerd1 from '../assets/images/portfolio/nerdline-1.png';
import nerd2 from '../assets/images/portfolio/nerdline-2.png';
import nerd3 from '../assets/images/portfolio/nerdline-3.png';
import nerd4 from '../assets/images/portfolio/nerdline-4.png';

export const PORTFOLIO = [
  {
    id: 8,
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
        tennisPro7
      ]
    },
    text: 'Mobile app for tennis players around the world, to participate on competitions, ranks, buy materials and hire a coach. The team had to create a connection between all the players and clubs, and that made this the most complex project.'
  },
  {
    id: 7,
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
  },
  {
    id: 6,
    name: 'Ferti-Peixe',
    company: 'Loomer Tech',
    mainImage: fertiPeixeLogo,
    url: 'https://fertipeixeapp.com.br/',
    slug: 'ferti-peixe',
    color: 'green',
    jobInfo: {
      role: 'Front-end developer',
      type: 'Mobile',
      language: 'React Native',
      startDate: {
        month: 'February',
        year: 2021
      },
      endDate: {
        month: 'March',
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
      images: [fertiPeixe1, fertiPeixe2, fertiPeixe3, fertiPeixe4, fertiPeixe5]
    },
    text: 'This Project was made for an external company to manage the representatives and show their fertilizer products for farm owners and plantation companies, as much as help them to know how to use it, calculate the values of use and results. We made two mobile apps, one for the representatives and other for the clients, and a web system for the Company to manage everything.'
  },
  {
    id: 5,
    name: 'Gonçalves e Filhos Importações',
    company: 'Inventa Produtos Digitais',
    mainImage: GFLogo,
    url: 'https://www.goncalvesefilhos.com.br/',
    slug: 'goncalvez-e-filhos-importacoes',
    color: 'maroon',
    jobInfo: {
      role: 'Front-end developer',
      type: 'Mobile',
      language: 'React Native',
      startDate: {
        month: 'March',
        year: 2021
      },
      endDate: {
        month: '',
        year: 2021
      },
      mainTools: [
        'React Native',
        'Redux',
        'JavaScript',
        'Axios, for API request',
        'GIT',
        'Microsoft Azure for versioning'
      ],
      images: [GF1, GF2, GF3, GF4, GF5, GF6, GF7]
    },
    text: 'Development of a mobile app for an importation company. In the same app, users can find their importation processes, download documents and see invoices. The admin users can manage all the processes, upload documents and invoices.'
  },
  {
    id: 4,
    name: 'AMPERJ 2021 Layout',
    company: 'Inventa Produtos Digitais',
    mainImage: amperjLogo,
    url: 'https://www.amperj.org/',
    slug: 'amperj-2021-layout',
    color: 'black',
    jobInfo: {
      role: 'Front-end developer',
      type: 'Web',
      language: 'HTML/CSS',
      startDate: {
        month: 'November',
        year: 2020
      },
      endDate: {
        month: 'February',
        year: 2021
      },
      mainTools: [
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'PHP',
        'GIT',
        'WordPress',
        'Bitbucket for versioning'
      ],
      images: [amperj1, amperj2, amperj3, amperj4, amperj5, amperj6, amperj7]
    },
    text: 'The Rio de Janeiro Public Ministry Association needed a new layout for their website and intranet system. I was the lead front-end developer of all development projects for them, so I created features for their interface, as I’ve already created a new layout from scratch by the end on 2020.'
  },
  {
    id: 3,
    name: 'FEMPERJ App',
    company: 'Inventa Produtos Digitais',
    mainImage: femperjLogo,
    url: 'https://appadvice.com/app/femperj/1450208563',
    slug: 'femperj-app',
    color: 'red',
    jobInfo: {
      role: 'Front-end developer',
      type: 'Mobile',
      language: 'React Native',
      startDate: {
        month: 'November',
        year: 2018
      },
      endDate: {
        month: 'January',
        year: 2019
      },
      mainTools: [
        'MySQL',
        'React Native (JavaScript framework)',
        'Redux',
        'REST',
        'VS Code',
        'NPM',
        'Git',
        'BitBucket'
      ],
      images: [femperj1, femperj2, femperj3, femperj4]
    },
    text: 'Development from scratch of Rio de Janeiro Public Ministry Foundation, a Superior Degree Faculty, front-end mobile app. This app was made for the students to follow the course, watch classes, get the material and files for studying and keep up with their grades and course performance.'
  },
  {
    id: 2,
    name: 'NerdLine website',
    company: 'NerdLine Youtube Channel',
    mainImage: nerdLogo,
    url: 'https://nerdline.com.br',
    slug: 'nerdline-website',
    color: 'black',
    jobInfo: {
      role: 'Full-stack developer',
      type: 'Web',
      language: 'HTML/CSS',
      startDate: {
        month: 'August',
        year: 2014
      },
      endDate: {
        month: 'October',
        year: 2014
      },
      mainTools: [
        'MySQL',
        'HTML',
        'CSS',
        'JavaScript',
        'WordPress',
        'Sublime',
        'LocaWeb'
      ],
      images: [nerd1, nerd2, nerd3, nerd4]
    },
    text: 'My first project of a newspaper website about comic books for NerdLine YouTube channel. Inside it, people can post and read articles about science, technology, cinema and comic books. They can also watch video from the YouTube channel through the website.'
  },
  {
    id: 1,
    name: 'Milk & Fruit website',
    company: 'Leites e Frutas Sorvetes e Produtos Alimentícios LTDA',
    mainImage: milkLogo,
    url: 'https://milkefruit.com.br',
    slug: 'milk-e-fruit-website',
    color: 'green',
    jobInfo: {
      role: 'Full-stack developer',
      type: 'Web',
      language: 'HTML/CSS',
      startDate: {
        month: 'April',
        year: 2019
      },
      endDate: {
        month: 'June',
        year: 2020
      },
      mainTools: [
        'MySQL',
        'HTML',
        'CSS',
        'JavaScript',
        'WordPress',
        'Sublime',
        'LocaWeb'
      ],
      images: [milk1, milk2, milk3, milk4, milk5, milk6, milk7, milk8]
    },
    text: 'Work made freom scratch. This website is for the relation between the company and the clients, where clients can see everything about the business and get the food catalog, contact and news.'
  }
];
