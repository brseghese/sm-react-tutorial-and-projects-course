import { useContext, createContext, useReducer } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = 'hello';

  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
