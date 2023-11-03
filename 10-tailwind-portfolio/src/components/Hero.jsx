import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className='bg-emerald-100 py-24  '>
      <div className=' align-element  px-8  grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wide'>Bruno Seghese</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Desenvolvedor Web Full Stack
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            HTML | CSS | JavaScript | React.js | Node.js
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href='https://github.com/brseghese'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithubSquare className='h-8 w-8 text-slate-500  hover:text-emerald-600 duration-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/brunoseghese/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedin className='h-8 w-8 text-slate-500  hover:text-emerald-600 duration-300' />
            </a>
            <a
              href='https://twitter.com/brseghese'
              target='_blank'
              rel='noreferrer'
            >
              <FaTwitterSquare className='h-8 w-8 text-slate-500  hover:text-emerald-600 duration-300' />
            </a>
          </div>
        </article>

        <article className='hidden md:block '>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </section>
  );
};

export default Hero;
