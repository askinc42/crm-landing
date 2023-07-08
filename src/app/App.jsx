import Layout from "./layout/Layout";
import SectionCall from "../components/section-call/SectionCall";
import SectionFuture from "../components/section-future/SectionFuture";
import SectionReviews from "../components/section-reviews/SectionReviews";
import CounterCardsInfo from "../components/counter-cardsInfo/CounterCardsInfo"
import ContainersInfo from '../components/containers-info/ContainersInfo';
import InventorySection from "../components/inventory-section/InventorySection"
import GalleryContainers from '../components/gallery-containers/GalleryContainers';
import DataBase from "../components/database-section/DataBase"

const App = () => {
  return (
    <Layout>
      {/* Тут будут секции как отдельные компоненты */}
      <SectionFuture />
      <SectionReviews />
      <SectionCall />
      <CounterCardsInfo />
      <ContainersInfo />
      <InventorySection />
      <GalleryContainers />
      <DataBase />
    </Layout>
  );
};

export default App;
