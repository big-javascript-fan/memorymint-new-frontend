import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './assets/styles/style.css'
import GlobalStyle from "./globalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home.jsx";
import ProductsListPage from "./Pages/ProductsListPage"



function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<ProductsListPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
