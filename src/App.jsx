import { BrowserRouter, Route, Routes  } from "react-router-dom";
import './App.css'
import Home from "./pages/landing-pages/home";
import ErrorPage from "./pages/landing-pages/error-page";
import Contact from "./pages/landing-pages/contact";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}
      <Route exact path="/contact" element={<Contact />} />
        <Route exact path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App