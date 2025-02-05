import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';



//import './index.css'
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
  }

]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
