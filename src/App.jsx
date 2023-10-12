import { BrowserRouter, Route, Routes  } from "react-router-dom";
import './App.css'
import Home from "./pages/landing-pages/home";
import ErrorPage from "./pages/landing-pages/error-page";
import Contact from "./pages/landing-pages/contact";
import Login from './pages/auth/login';
// import Signup from './pages/auth/signup';
import Computer from './pages/landing-pages/computer'
import Payment from "./pages/Order-Section/Payment";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
      <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<ErrorPage />} />

        <Route exact path="/login" element={<Login/>} />
        {/* <Route exact path="/signup" element={<Signup />} /> */}
        <Route exact path="/computer" element={<Computer />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route/>
    </Routes>
  </BrowserRouter>
  )
}

export default App