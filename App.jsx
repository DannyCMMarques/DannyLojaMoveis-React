import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import Produto from "./pages/Produto/Produto.jsx";
import Navegacao from "./components/Navbar/Navbar.jsx";
import Footer from './components/footer/Footer.jsx'
function App() {
  return (
    <>
      <header>
        <BrowserRouter>
          <Navegacao />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/produto" element={<Produto />} />
          </Routes>
        </BrowserRouter>
      </header>
      <Footer/>
    </>
  );
}

export default App;
