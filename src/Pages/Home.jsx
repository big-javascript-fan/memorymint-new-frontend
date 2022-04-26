import MemoryMintHome from "../components/MemoryMintHome";
import NewEraPage from "../components/NewEraPage";
import CardsSection from "../components/CardsSection";
import ExperienceSection from "../components/ExperienceSection";
import OtherThanNFTCardSection from "../components/OtherThanNFTCardSection";
import TicketMetaVerseSection from "../components/TicketMetaVerseSection";
import RoadMapSec from "../components/RoadMapSec";
import FaqSection from "../components/FaqSection";
import ReachOutSection from "../components/ReachOutSection";

const cardData ={
  title: '1. PRESENT MOMENT',
  subtitles: [
    'Welcome! Bask in present-moment awareness!',
    'Pre-Sale of our first collection begins on February 27, 2022, exclusively from our website.',
    'Pre-Sale of our first collection begins on February 27, 2022, exclusively from our website.' 
  ]
}
const Home = () => {
  return (
    <>
      <MemoryMintHome />
      <OtherThanNFTCardSection />
      <NewEraPage />
      <CardsSection />
      <TicketMetaVerseSection />
      <RoadMapSec title="Road Map" cardData={cardData}  />
      <FaqSection />
      <ReachOutSection />
    </>
  );
};

export default Home;
