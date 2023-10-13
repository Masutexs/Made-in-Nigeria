import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Carousel from '../carousel/carousel';

const Layout = ({ children }) => {
  return (
    <>
      <section className="text-center  text-white flex flex-col">
        <Navbar />
        <Carousel />
        <div className="p-8">{children}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
