import Navbar from './component/Navbar';
import About from './component/About';
import Home from './component/Home';
import Cars from './component/Cars';
import Reviews from './component/Reviews';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;