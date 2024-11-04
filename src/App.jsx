import React from 'react'
import {Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Placeorder from './pages/Placeorder'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ai from './pages/Ai'
import Appointment from './pages/Appointment'
import Donate from './pages/Donate'
import Doctors from './pages/Doctors'
import Choose from './pages/Choose'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
          <Navbar />
          <SearchBar />
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route  path='/collection' element={<Collection/>}/>
       <Route path='/ai' element={<Ai/>} />
       <Route path='/about' element={<About/>}/>
       <Route path='/product/:productId' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/placeorder' element={<Placeorder/>}/>
       <Route path='/orders' element={<Orders />} />
       <Route path='/doctors' element={<Doctors />} />
       <Route path='/appointment' element={<Appointment />} />
       <Route path='/choose' element={<Choose />} />
       <Route path='/donate' element={<Donate />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App