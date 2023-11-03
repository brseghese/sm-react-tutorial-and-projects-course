import aboutSvg from '../assets/progressive.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
        <article>
          <SectionTitle text='Desenvolvimento de Sistemas Web, API`s e aplicativos' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </article>
        <img src={aboutSvg} className='w-full h-64' />
      </div>
    </section>
  );
};

export default About;
