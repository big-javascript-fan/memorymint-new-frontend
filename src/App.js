import React from "react";
import GlobalStyle from "./globalStyle";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MemoryMintHome from "./components/MemoryMintHome";
import NewEraPage from "./components/NewEraPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {/* <HeroSection /> */}
      <MemoryMintHome />
      {/* <NewEraPage /> */}

    </div>
  );
}

export default App;
