import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Carousel from "../carousel/carousel";

const Layout = ({ children }) => {
  return (
    <>
      <section className='   flex flex-col'>
        <Navbar />
        <Carousel/>
        <div className="">{children}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;