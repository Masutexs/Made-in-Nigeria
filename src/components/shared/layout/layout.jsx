import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <section className='   flex flex-col'>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </section>
    </>
  );
};

export default Layout;