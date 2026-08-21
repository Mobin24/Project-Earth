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
  advisory: [{
      id: 'a1',
      name: 'Md. jamal Uddin',
      position: 'PROFESSOR AND CHAIRMAN, DEPARTMENT OF ENVIRONMENTAL SCIENCES, STUDENTS COUNSELLING & GUIDANCE CENTER, JAHANGIRNAGAR UNIVERSITY',
      bio: 'As a geologist, I believe Earths Ants is paving the way for a greener future by engaging communities in environmental conservation. Their initiatives inspire real change and safeguard our planet for generations to come',
      imagePlaceholder: '/jamal.jpeg',
      socials: { email: 'jamaluddinrunu@juniv.edu' }
    },
    {
      id: 'a2',
      name: 'Md. Zillur Rahman',
      position: 'PROFESSOR, DEPT. OF DISASTER SCIENCE AND CLIMATE RESILIENCE, FORMER DEAN, FACULTY OF EARTH & ENVIRONMENTAL SCIENCES, UNIVERSITY OF DHAKA',
      bio: 'Earths Ants stands out for its commitment to raising environmental awareness. Their work is crucial in addressing pressing climate challenges and fostering a sustainable world for our future',
      imagePlaceholder: '/Zillur.jpg',
      socials: { linkedin: 'https://www.linkedin.com/in/md-zillur-rahman-81872440/', }
    },
    {
      id: 'a3',
      name: 'SOHAG AN NAFIS',
      position: 'COUNTRY DIRECTOR (BANGLADESH), GLOBAL ENTREPRENEURSHIP BOOTCAMP; TRAINER- ENGLISH SPEAKING, NDF BD (NATIONAL DEBATE FEDERATION BANGLADESH); FOUNDER CHAIRMAN, SAIDPUR DEBATE FEDERATION',
      bio: 'Earths Ants is dedicated to fostering environmental awareness and sustainable practices through impactful initiatives. Their work empowers communities to take meaningful action toward a greener, more resilient planet',
      imagePlaceholder: '/Sohag.png',
      socials: { email: 'snafis238@gmail.com', }
    },
    {
      id: 'a4',
      name: 'DR. NAVIN YADAV',
      position: 'FOUNDER PRESIDENT, NEPALESE MEDICAL STUDENTS ASSOCIATION, BANGLADESH; CHARTER PRESIDENT, KATHMANDU RAMECHHAP LEO CLUB; FORMER INTERN DOCTOR, POPULAR MEDICAL COLLEGE & HOSPITAL',
      bio: 'Earths Ants stands out for its commitment to raising environmental awareness. Their work is crucial in addressing pressing climate challenges and fostering a sustainable world for our future.',
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
      position: 'Events & Operations Management',
      bio: 'Plans, coordinates, and executes events while managing day-to-day operational activities. EO ensures smooth collaboration, efficient execution, and successful delivery of organizational programs.',
      imagePlaceholder: '/15.png',
      socials: { }
      
    }
  ]
};
