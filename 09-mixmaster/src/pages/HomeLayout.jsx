import { Link } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLayout</h1>
      <Link to='/about'>About Page </Link>
      <a href='https://brseghese.github.io/#home'>brseghese</a>
    </div>
  );
};

export default HomeLayout;
