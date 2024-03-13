const tabs = [
  {
    id: 1,
    href: '#hero',
    class: 'nav-link scrollto active',
    icon: '<i class="bx bx-home"></i>',
    text: 'Home',
  },
  {
    id: 2,
    href: '#about',
    class: 'nav-link scrollto',
    icon: '<i class="bx bx-user"></i>',
    text: 'About',
  },
  {
    id: 3,
    href: '#skills',
    class: 'nav-link scrollto',
    icon: '<i class="bx bx-code-curly"></i>',
    text: 'Skills',
  },
  {
    id: 4,
    href: '#resume',
    class: 'nav-link scrollto',
    icon: '<i class="bx bx-book-content"></i>',
    text: 'Resume',
  },
  {
    id: 5,
    href: '#contact',
    class: 'nav-link scrollto',
    icon: '<i class="bx bx-envelope"></i>',
    text: 'Contact',
  },
];

const socials = [
  {
    id: 1,
    class: 'twitter',
    buttonIcon: '<i class="bx bxl-twitter"></i>',
    url: 'https://twitter.com/thq_duy23',
  },
  {
    id: 2,
    class: 'facebook',
    buttonIcon: '<i class="bx bxl-facebook"></i>',
    url: 'https://www.facebook.com/duytruong.vul/',
  },
  {
    id: 3,
    class: 'github',
    buttonIcon: '<i class="bx bxl-github"></i>',
    url: 'https://github.com/duytruong23',
  },
  {
    id: 4,
    class: 'google-mail',
    buttonIcon: '<i class="bx bx-envelope"></i>',
    url: 'mailto:truongduy.fu@gmail.com',
  },
  {
    id: 5,
    class: 'linkedin',
    buttonIcon: '<i class="bx bxl-linkedin"></i>',
    url: 'https://www.linkedin.com/in/duytruong-link',
  },
];

const information = [
  {
    id: 1,
    title: 'Full Name',
    description: 'Truong Hoang Quoc Duy',
    tag: '',
  },
  {
    id: 2,
    title: 'Birthday',
    description: 'Nov 22nd, 2000',
    tag: '',
  },
  {
    id: 3,
    title: 'Phone',
    description: '(+84) 793 960 152',
    tag: '',
  },
  {
    id: 4,
    title: 'Address',
    description: 'District 11, Ho Chi Minh City, VietNam',
    tag: '',
  },
  {
    id: 5,
    title: 'Age',
    description: new Date().getFullYear().toString().slice(-2),
    tag: '',
  },
  {
    id: 6,
    title: 'Level',
    description: 'Junior Front-end Developer',
    tag: '',
  },
  {
    id: 7,
    title: 'Email',
    description: 'truongduy.fu@gmail.com',
    tag: 'mailto:truongduy.fu@gmail.com',
  },
];
const skills = [
  {
    id: 1,
    title: 'Html/Css',
    year: '1',
    month: '4',
  },
  {
    id: 2,
    title: 'Javascript',
    year: '3',
    month: '2',
  },
  {
    id: 3,
    title: 'Typescript',
    year: '0',
    month: '8',
  },
];

const frameworks = [
  {
    id: 1,
    title: 'ReactJS',
    year: '2',
    month: '8',
  },
  {
    id: 2,
    title: 'NestJS',
    year: '0',
    month: '8',
  },
  {
    id: 3,
    title: 'NodeJS',
    year: '3',
    month: '0',
  },
  {
    id: 4,
    title: 'NuxtJS',
    year: '0',
    month: '4',
  },
  {
    id: 5,
    title: 'VueJS',
    year: '0',
    month: '4',
  },
  {
    id: 6,
    title: 'Material',
    year: '1',
    month: '8',
  },
  {
    id: 7,
    title: 'KendoUI',
    year: '1',
    month: '0',
  },
  {
    id: 8,
    title: 'Bootstrap',
    year: '3',
    month: '0',
  },
];

const softSkills = [
  {
    id: 1,
    title: 'Try Hard',
    description: 'High',
    valueNow: '100',
  },
  {
    id: 2,
    title: 'Research',
    description: 'Medium',
    valueNow: '65',
  },
  {
    id: 3,
    title: 'Multi Task',
    description: 'Medium',
    valueNow: '65',
  },
  {
    id: 4,
    title: 'Language',
    description: 'Low',
    valueNow: '25',
  },
  {
    id: 5,
    title: 'Teamwork',
    description: 'High',
    valueNow: '100',
  },
  {
    id: 6,
    title: 'Agility',
    description: 'Medium',
    valueNow: '65',
  },
  {
    id: 7,
    title: 'Basic Design',
    description: 'Low',
    valueNow: '25',
  },
  {
    id: 8,
    title: 'Time management',
    description: 'Medium',
    valueNow: '65',
  },
];

const experiences = [
  {
    id: 1,
    company: 'VIET JAPAN PARTNER',
    domain: 'Medical Booking',
    start: '8/2021',
    end: '11/2021',
    address: 'Ho Chi Minh City, VietNam',
    roll: 'Intern',
    position: 'Front-end developer',
    description: [
      'Analyze customer requirements',
      'Validate base on code structure',
      'Technology used: VueJS, Bootstrap 5, NuxtJS, MongoDB, Javascript, Html/Css, Typescript',
    ],
  },
  {
    id: 2,
    company: 'HITACHI DIGITAL SERVICES',
    domain: 'Logistic, Retail, Network, Environment',
    start: '5/2022',
    end: '',
    address: 'Ho Chi Minh City, VietNam',
    roll: 'Associate Software Engineer',
    position: 'Full-stack Developer',
    description: [
      'Analyzing application, converting windows app environment to web app platform',
      'Combining new technologies to optimize applications for customers',
      'Technology used: ReactJS 18, NestJS, Kendo UI, Material UI, Javascript, Typescript, Redux, React Router, Html/Css',
    ],
  },
];
const contact = [
  {
    id: 1,
    class: ' address',
    title: 'Location',
    description: 'District 11, Ho Chi Minh City, VietNam',
    buttonIcon: 'bi bi-geo-alt',
    tag: '',
  },
  {
    id: 2,
    class: ' email',
    title: 'Email',
    description: 'truongduy.fu@gmail.com',
    buttonIcon: 'bi bi-envelope',
    tag: 'mailto:truongduy.fu@gmail.com',
  },
  {
    id: 3,
    class: ' phone',
    title: 'Call',
    description: '+84 793 960 152',
    buttonIcon: 'bi bi-phone',
    tag: '',
  },
];

export {
  socials,
  information,
  skills,
  frameworks,
  softSkills,
  experiences,
  contact,
  tabs,
};
