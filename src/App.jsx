import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import AppLayout from './components/layout/AppLayout';
import ErrPage from './pages/ErrPage';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/projects',
          element: <Projects />
        },
        {
          path: '/projects/:id',
          element: <ProjectDetails />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;