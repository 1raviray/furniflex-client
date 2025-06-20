import React from 'react'
import Header from './Header';
import { Route,Routes } from 'react-router-dom';
import Home from './Home/Home';
import Contact from './Contact page/Contact';
import Footer from './Footer';
import Admin_login from './Admin/Admin_login';
import Error from './Error';
import Dashboard from './Admin/Dashboard';
import Hide from './Hide';
import Products from './Products/Products';
import ProductsDetail from './Products/ProductsDetail';
import AboutUs from './AboutUs/AboutUs';
import Blog from './Blog/Blog';
import BlogDetails from './Blog/BlogDetails';
import Signup from './Signup&Login/Signup';
import Cart from './AddToCart/Cart';
import Wishlist from './AddToCart/Wishlist';
import Login from './Signup&Login/Login';
import Myprofile from './Myprofile';

const Routing_ = () => {
  return (
    <div>
        <Hide>
          <Header/>
        </Hide>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/productsdetails/:_id" element={<ProductsDetail/>} />
          <Route path='/contactus' element={<Contact/>} />
          {/* <Route path='/' element={<Myprofile/>} /> */}
          <Route path='/admin' element={<Admin_login/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/wishlist' element={<Wishlist/>} />
          <Route path='/blogs' element={<Blog/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/blogdetails/:_id' element={<BlogDetails/>} />
          <Route path='*' element={<Error/>} />
          <Route path='/dashboardqwsfrnullnbhhj123nkc' element={<Dashboard/>} />
        </Routes>
        <Hide>
        <Footer/>
        </Hide>
    </div>
  )
}

export default Routing_