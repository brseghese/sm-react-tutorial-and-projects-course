import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <section className='align-element py-8'>
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
