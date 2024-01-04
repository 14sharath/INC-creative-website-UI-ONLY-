import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Contact } from './Contact';
import { Autoslider } from './Autoslider';
import { Home2 } from './Home2';
import {About} from './About';
import {Project} from './Project';
import {Project1} from './Project1';
import {Project2} from './Project2';
import {Services} from './Services';
import { PictureSwitching } from './Pictureswitching';
import { ColorSwitching } from './ColorSwitching';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home2/>
  },

  {
    path:"/about",
    element:<About/>
  
  },
  {
    path:"/contact",
    element:<Contact/>
  },

  {
    path:"/services",
    element:<Services/>
  },

  {
    path:"/project",
    element:<Project/>
  
  },

  {
    path:"/project1",
    element:<Project1/>
  },

  {
    path:"/project2",
    element:<Project2/>
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Router>
        <App />
      </Router>
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();

