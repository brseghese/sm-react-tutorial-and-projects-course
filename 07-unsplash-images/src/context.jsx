import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', newDarkTheme);
    console.log(body);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
