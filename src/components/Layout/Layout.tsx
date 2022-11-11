import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.css';
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
