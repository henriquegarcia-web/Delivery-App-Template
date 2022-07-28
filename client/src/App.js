import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import HomeApp from './Pages/HomeApp';
import Cart from './Pages/Cart';
import OrderResults from './Pages/OrderResults';
import Panel from './Pages/Panel';
import Payment from './Pages/Payment';
import ProductDetail from './Pages/ProductDetail';
import Login from './Pages/Login';
import Register from './Pages/Register';

import PageNotFound from './Pages/404';
import UserInfo from './Pages/UserInfo';
import UserSaves from './Pages/UserSaves';

function App() {
  return (
    <>

    <Router>
      <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/app' element={<HomeApp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order-result' element={<OrderResults />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/product' element={<ProductDetail />} />

        <Route path='/saves' element={<UserSaves />} />
        <Route path='/perfil' element={<UserInfo />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </Router>
      
    </>
  );
}

export default App;