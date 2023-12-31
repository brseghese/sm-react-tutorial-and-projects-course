import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

import imgBickcreft from './assets/bickcreft.svg';
import imgOmnifood from './assets/omnifood.svg';
import imgNatours from './assets/natours.svg';
import imgTrillo from './assets/trillo.svg';
import imgNexter from './assets/nexter.svg';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in Node, developing efficient and interactive back-end applications.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in MongoDB.',
  },
];

export const projects = [
  {
    id: nanoid(),
    // img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    // img: '../src/assets/bickcreft.svg',
    img: imgBickcreft,
    url: 'https://brseghese.github.io/origamid-bikcraft/',
    github: 'https://github.com/brseghese/origamid-bikcraft',
    title: 'Bikcraft - Bicicletas Artesanais',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    // img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    // img: '../src/assets/omnifood.svg',
    img: imgOmnifood,
    url: 'https://js-omnifood.netlify.app/',
    github:
      'https://github.com/brseghese/js-html-css-course/tree/main/03-omnifood',
    title: 'Omnifood - Receitas de Pratos',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    // img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    // img: '../src/assets/trillo.svg',
    img: imgTrillo,
    url: 'https://js-trillo.netlify.app/',
    github: 'https://github.com/brseghese/js-advanced-css-and-sass-course',
    title: 'Trillo - Reservas de Hotel',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    // img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    // img: '../src/assets/natours.svg',
    img: imgNatours,
    url: 'https://js-natours.netlify.app/',
    github: 'https://github.com/brseghese/js-advanced-css-and-sass-course',
    title: 'Natours - Agência de Viagens',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    // img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    // img: '../src/assets/nexter.svg',
    img: imgNexter,
    url: 'https://js-nexter.netlify.app/',
    github: 'https://github.com/brseghese/js-advanced-css-and-sass-course',
    title: 'Nexter - Imobiliária',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
