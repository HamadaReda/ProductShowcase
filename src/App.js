import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import MainLayout from './pages/MainLayout.jsx';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Error from "./pages/Error.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [activeLink, setActiveLink] = useState("/");
  return (
    <div className="App">
      <Header activeLink={activeLink} handleLinkClick={setActiveLink} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer activeLink={activeLink} handleLinkClick={setActiveLink} />
    </div>
  );
}

export default App;
