import MemoryMintHome from "../components/MemoryMintHome";
import NewEraPage from "../components/NewEraPage";
import CardsSection from "../components/CardsSection";
import ExperienceSection from "../components/ExperienceSection";
import OtherThanNFTCardSection from "../components/OtherThanNFTCardSection";
import TicketMetaVerseSection from "../components/TicketMetaVerseSection";
import RoadMapSec from "../components/RoadMapSec";
import FaqSection from "../components/FaqSection";
import ReachOutSection from "../components/ReachOutSection";

const allCards = [
  {
   title: '1. PRESENT MOMENT',
    subtitles: [
      'Welcome! Bask in present-moment awareness!',
      'Pre-Sale of our first collection begins soon!',
      'Join our Discord for news, whitelist and drop details'
    ]
  },
  {
    title: '2. SHORT-TERM MEMORIES(Next Six Months)',
    subtitles: [
      'Future releases, including collections from Tokyo, Machu Pichu and Australia.',
      'Expand our network of Memory Mint Creators, featuring collaborations with travel bloggers, athletes and other amazing artists.',
      'Launch of personalized Memory Mint Vaults for all NFT holders',
      'Additional awards for complete series, set and collection holders',
      'Create the world’s largest network of immersive memory collections in the Metaverse!'
    ]
  },{
    title: '3. LONG-TERM MEMORIES (Next year)',
    subtitles: [
      'Introduction of long-form memories:  Exquisite, immersive story-telling that sends you on an experience that will make you question the difference between a memory and a dream.',
      'Launch of the Memory Marketplace:  Buy, sell, rent and trade your collection on the largest network of immersive memories in the Metaverse!',
      'Grow and support a community of immersive memory and experience creators.'
    ]
  },{
    title: 'LUCID DREAMING (Beyond)',
    subtitles: [
      'Continue to grow our community.',
      'Help foster a world in which we create memories worth preserving… especially ones preserved for all eternity in the Metaverse.',
    ]
  },
]

const cardData = allCards[0];
const Home = () => {
  return (
    <>
      <MemoryMintHome />
      <OtherThanNFTCardSection />
      <ExperienceSection />
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
