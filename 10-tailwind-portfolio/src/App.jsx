import About from './components/About';
import About2 from './components/About2';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About2 />
      <About />
      <Projects />
    </>
  );
};

export default App;
