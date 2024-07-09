import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarListing from '../pages/CarListing';
import CarDetails from '../pages/CarDetails' ;
import Blog from '../pages/Blog' ;
import BlogDetails from '../pages/BlogDetails' ;
import NotFound from '../pages/NotFound' ;
import Contact from '../pages/Contact' ;
import Login from '../pages/Login';
import Register from '../pages/Register';
import Admin from '../pages/Admin';
import Admindata from '../pages/Admindata';
import Status from '../pages/Status';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/Login' />} />
        <Route path='/home' element={<Home />} />
         <Route path='/about' element={<About />} />
          <Route path='/cars' element={<CarListing />} />
           <Route path='/cars/:slug' element={<CarDetails />} />
            <Route path='/blogs' element={<Blog />} />
             <Route path='/blogs/:slug' element={<BlogDetails />} />
             <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Register' element={<Register />} />
              <Route path='/Admin' element={<Admin />} />
              <Route path='/Admindata' element={<Admindata />} />
              <Route path='/Status' element={<Status />} />
              
    </Routes>
};

export default Routers;