import React from 'react';
import { Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import { SearchPage } from './SearchPage';

export const Mypage = () => {
  return (
    <Router>
      <div className='btns' style={{ height: '70px', width: '100%' }}>
        <Button id='b3' variant="outlined">
          <Link to='/home' style={{ height: '30px', width: '90px', color: 'white' }}>
            Home
          </Link>
        </Button>
        <Button id='b1' variant="outlined">
          <Link to='/register' style={{ height: '30px', width: '90px', color: 'white' }}>
            Register
          </Link>
        </Button>
        <p></p>
        <Button id='b2' variant="outlined">
          <Link to='/login' style={{ height: '30px', width: '90px', color: 'white' }}>
            Login
          </Link>
        </Button>
        <p></p>
        <Button
          style={{ color: 'white', width: '90px' }}
          variant="outlined"
          href="https://medium.com/@kshitiz01sharma/melodic-mirage-931b509f2c38"
          target="_blank"
        >
          About
        </Button>
      </div>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};
