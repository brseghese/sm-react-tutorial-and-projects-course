import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Cocktail,
  NewsLetter,
  About,
  Error,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'cocktail',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'error',
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
