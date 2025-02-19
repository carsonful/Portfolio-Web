import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ProjectPage from './sections/Projects/ProjectPage'; 
import './styles/global.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/projects',
    element: <ProjectPage />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);