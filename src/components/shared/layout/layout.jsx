import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <section className='  text-white flex flex-col'>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;