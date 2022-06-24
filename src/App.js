import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/home/Home';
import Hotels from './Pages/hotel/Hotels';
import HotelLIst from './Pages/hotelLIst/HotelLIst';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/hotels' element={<HotelLIst/>}></Route>
          <Route exact path='/hotels:id' element={<Hotels/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

