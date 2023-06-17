import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './Pages/Home/Home';
import ManageBooks from './Pages/ManageBooks/ManageBooks';
import AddBooks from './Pages/AddBooks/AddBooks';
import AddReview from './Pages/AddReview/AddReview';
import ContactUs from './Pages/ContactUs/ContactUs';
import BookDetails from './Pages/BookDetails/BookDetails';
import UpdateBook from './Pages/UpdateBooks/UpdateBook';
function App() {

  // Routes
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
    },

    // Single data route
    {
      path: "/all-books/:id",
      element:<BookDetails/>,
      loader : function({params}){
        //console.log(params)
        return fetch(`http://localhost:3000/all-books/${params.id}`)
      }

    },
    // for updating details
    {
      path: "/update-book/:id",
      element:<UpdateBook/>,
      // geting single book details
      loader : function({params}){
        //console.log(params)
        return fetch(`http://localhost:3000/all-books/${params.id}`)
      }
      

    }
  ])

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
