import React from 'react';
import ReactDOM from 'react-dom/client';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import './index.css'
import WelcomePage from './WelcomePage.tsx'
import ProjectPage from './ProjectPage.tsx'

const router = createBrowserRouter([

  {
    path:'/',
    element: <WelcomePage />,

  },
  {
    path: '/projects',
    element: <ProjectPage />,
  },
  {
    path:'/contact',
    element: <h1>UNDER CONSTRUCTIONS ^_^ </h1>,
  },

]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
