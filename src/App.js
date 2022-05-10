import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/style.css'
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from "./globalStyle";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home.jsx";
import ProductsListPage from "./Pages/ProductsListPage"



function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sale" element={<ProductsListPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
