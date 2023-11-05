import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className='text-4xl text-primary'>Comfy</span>
      </nav>
      <section className='align-element py-8'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
