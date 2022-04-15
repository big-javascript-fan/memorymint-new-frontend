import React from "react";
import GlobalStyle from "./globalStyle";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MemoryMintHome from "./components/MemoryMintHome";
import NewEraPage from "./components/NewEraPage";
import CardsSection from "./components/CardsSection";
import ExperienceSection from "./components/ExperienceSection";
import OtherThanNFTCardSection from "./components/OtherThanNFTCardSection";
import TicketMetaVerseSection from "./components/TicketMetaVerseSection";
import RoadMapSec from "./components/RoadMapSec";
import FaqSection from "./components/FaqSection";
import ReachOutSection from "./components/ReachOutSection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      {/* <HeroSection /> */}
      <MemoryMintHome />
      <CardsSection />
      <ExperienceSection />
      <OtherThanNFTCardSection />
      <NewEraPage />
      <TicketMetaVerseSection />
      <RoadMapSec />
      <FaqSection />
      <ReachOutSection />
      <Footer />
    </div>
  );
}

export default App;
