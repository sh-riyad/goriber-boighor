import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import ManageBooks from './Pages/ManageBooks/ManageBooks';
import AddBooks from './Pages/AddBooks/AddBooks';
import AddReview from './Pages/AddReview/AddReview';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
      loader: function(){
        return fetch(`http://localhost:3000/all-books`);
      }
    },
    {
      path: "/contact-us",
      element:<ContactUs/>
    },
    {
      path:"/manage-books",
      element:<ManageBooks/>,
      loader: function(){
        return fetch(`http://localhost:3000/all-books`);
      }
    },
    {
      path:"/add-books",
      element:<AddBooks/>
    },
    {
      path:"/add-review",
      element:<AddReview/>
    }
  ])

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
