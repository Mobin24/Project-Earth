import { image } from 'framer-motion/client';
import { assets } from './assets';
import { Mail } from 'lucide-react';

export const leadershipData = {
  // presidential: [
  //   {
  //     id: 'p1',
  //     name: 'Dr. Evelyn Moss',
  //     position: 'President & Chief Ecologist',
  //     bio: 'Evelyn has spent over 20 years researching micro-ecosystems and forest floor dynamics. She founded Earth’s Ants to bridge the gap between microscopic biodiversity and global conservation policies.',
  //     imagePlaceholder: assets.images.leadership.evelynMoss,
  //     socials: { twitter: '#', linkedin: '#', email: 'evelyn@earthsants.org' }
  //   },
  //   {
  //     id: 'p2',
  //     name: 'Arthur Clay',
  //     position: 'Vice President of Operations',
  //     bio: 'With a background in environmental law and non-profit administration, Arthur oversees our global branches and drives tactical coordination with international conservation bodies.',
  //     imagePlaceholder: assets.images.leadership.arthurClay,
  //     socials: { twitter: '#', linkedin: '#', email: 'arthur@earthsants.org' }
  //   },
  //   {
  //     id: 'p2',
  //     name: 'Arthur Clay',
  //     position: 'Vice President of Operations',
  //     bio: 'With a background in environmental law and non-profit administration, Arthur oversees our global branches and drives tactical coordination with international conservation bodies.',
  //     imagePlaceholder: assets.images.leadership.arthurClay,
  //     socials: { twitter: '#', linkedin: '#', email: 'arthur@earthsants.org' }
  //   }
  // ],
  advisory: [
  {
  id: 'a1',
  name: 'Prof. Md. Zillur Rahman, PhD',
  position: '(Founding Advisor)',
  bio: 'PhD in Geotechnical Earthquake Engineering (UBC, Canada). MSc in Geological Engineering (UT, Netherlands). BSc & MSc in Geology (DU). Engineering Geologist and Professor, Department of Disaster Science and Climate Resilience, University of Dhaka. Former Dean, Faculty of Earth and Environmental Sciences, University of Dhaka.',
  imagePlaceholder: '/Zillur.jpg',
  socials: {
    linkedin: 'https://www.linkedin.com/in/md-zillur-rahman-81872440/'
  }
},
    {
  id: 'a2',
  name: 'Prof. Mohammed Jamal Uddin',
  position: '(Founding Advisor)',
  bio: 'Professor, Department of Environmental Sciences. Director, Students Counselling and Guidance Centre, Jahangirnagar University.',
  imagePlaceholder: '/jamal.jpeg',
  socials: {
    email: 'jamaluddinrunu@juniv.edu'
  }
},
    {
      id: 'a3',
      name: 'SOHAG AN NAFIS',
      position: '',
      bio: 'COUNTRY DIRECTOR (BANGLADESH), GLOBAL ENTREPRENEURSHIP BOOTCAMP; TRAINER- ENGLISH SPEAKING, NDF BD (NATIONAL DEBATE FEDERATION BANGLADESH); FOUNDER CHAIRMAN, SAIDPUR DEBATE FEDERATION',
      imagePlaceholder: '/Sohag.png',
      socials: { email: 'snafis238@gmail.com', }
    },
    {
      id: 'a4',
      name: 'DR. NAVIN YADAV',
      position: '',
      bio: 'FOUNDER PRESIDENT, NEPALESE MEDICAL STUDENTS ASSOCIATION, BANGLADESH; CHARTER PRESIDENT, KATHMANDU RAMECHHAP LEO CLUB; FORMER INTERN DOCTOR, POPULAR MEDICAL COLLEGE & HOSPITAL',
      imagePlaceholder: '/Nav.jpg',
      socials: { email: 'https://www.instagram.com/naya_navin?fbclid=IwY2xjawT02hNwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMWsxdk5jUkwxcDdlUWFMOHlzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeWru4e_bussVGkhNCL0figs2uaAhPHItKXhTI5S0WZrMsTtWL2h86yR2b3Ys_aem_0jWtwauL7TfXfA6ltpSPTQ', }
    }
    
  ],
  executive: [
    {
      id: 'e1',
      name: 'Md. Mirajul Islam',
      position: 'CEO-Chief Executive Officer',
      imagePlaceholder: '/miraj.jpg',
      socials: { linkedin: 'https://www.linkedin.com/in/mirajulislam003/', email: 'mirajul.communications@gmail.com' }
    },
     {
      id: 'e2',
      name: 'Md. Mirajul Islam',
      position: 'CTO-Chief Technology Officer',
      imagePlaceholder: '/Rafi.jpg',
      socials: { linkedin: 'https://www.linkedin.com/in/rafiahamed001/', email: 'fidaahamed15@gmail.com' }
    },
     {
      id: 'e3',
      name: 'Nuren Tasnim',
      position: 'COO-Chief Operating Officer',
      imagePlaceholder: '/Nur.jpg',
      socials: { linkedin: 'https://www.linkedin.com/in/nuren-tasnim/', email: 'tasnim.zeezpay@gmail.com'}

    },
  ],
  departments: [
    {
      id: 'd1',
      name: 'IT & Graphics (ITG)',
      position: 'Technology & Creative Design',
      bio: 'Handles the organization’s digital infrastructure, technology solutions, visual identity, and creative design. ITG ensures effective use of technology while creating engaging graphics and digital content.',
       imagePlaceholder: '/9.png',
       socials: {}
      
    },
    {
      id: 'd2',
      name: 'Marketing & Public Relations (MPR)',
      position: 'Marketing & Public Relations',
      bio: 'Builds the organization’s public presence through strategic marketing, communication, branding, and media engagement. MPR connects the organization with communities, partners, and the wider audience.',
       imagePlaceholder: '/11.png',
       socials: { }
      
    },
    {
      id: 'd3',
      name: 'Event & Operation (EO)',
      position: 'Events & Operations Management',
      bio: 'Plans, coordinates, and executes events while managing day-to-day operational activities. EO ensures smooth collaboration, efficient execution, and successful delivery of organizational programs.',
       imagePlaceholder: '/13.png',
       socials: { }
    },
    {
      id: 'd4',
      name: 'Research & Publication (RP)',
      position: 'Research & Publication Management',
      bio: 'Conducts research, develops insightful content, and manages publications to support knowledge sharing and organizational growth. RP focuses on collecting reliable information, producing quality publications, and communicating ideas effectively through research-based content.',
      imagePlaceholder: '/15.png',
      socials: { }
      
    }
  ]
};
