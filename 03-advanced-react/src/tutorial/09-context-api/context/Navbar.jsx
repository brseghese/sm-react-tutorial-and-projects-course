import { createContext, useState } from 'react';
import NavLinks from './NavLinks';

export const NavbarContext = createContext();

function Navbar() {
  const [user, setUser] = useState({ name: 'Bob' });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
