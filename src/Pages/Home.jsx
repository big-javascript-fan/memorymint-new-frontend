import MemoryMintHome from "../components/MemoryMintHome";
import NewEraPage from "../components/NewEraPage";
import CardsSection from "../components/CardsSection";
import ExperienceSection from "../components/ExperienceSection";
import OtherThanNFTCardSection from "../components/OtherThanNFTCardSection";
import TicketMetaVerseSection from "../components/TicketMetaVerseSection";
import RoadMapSec from "../components/RoadMapSec";
import FaqSection from "../components/FaqSection";
import ReachOutSection from "../components/ReachOutSection";

const Home = () => {
  return (
    <>
      <MemoryMintHome />
      <CardsSection />
      <ExperienceSection />
      <OtherThanNFTCardSection />
      <NewEraPage />
      <TicketMetaVerseSection />
      <RoadMapSec />
      <FaqSection />
      <ReachOutSection />
    </>
  );
};

export default Home;
