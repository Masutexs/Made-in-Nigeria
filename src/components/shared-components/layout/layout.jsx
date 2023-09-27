import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <section className='text-center items-center bg-[gray] h-[100vh] text-white flex flex-col justify-between '>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;