import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import OrderResults from './Pages/OrderResults';
import Panel from './Pages/Panel';
import Payment from './Pages/Payment';
import ProductDetail from './Pages/ProductDetail';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <>

    <Router>
      <Routes>

        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/cart' element={<Cart />} />
        <Route path='/order-results' element={<OrderResults />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/product' element={<ProductDetail />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
    </Router>
      
    </>
  );
}

export default App;