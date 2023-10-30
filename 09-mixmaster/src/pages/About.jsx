import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Outlet />
      <Link to='/'>Home Page</Link>
    </div>
  );
};

export default About;
