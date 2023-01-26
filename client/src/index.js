import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './Components/page/Home'
import Add from './Components/page/Add'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      
    ],
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);


