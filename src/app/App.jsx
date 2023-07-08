import Layout from "./layout/Layout";
import SectionCall from "../components/section-call/SectionCall";
import SectionFuture from "../components/section-future/SectionFuture";
import SectionReviews from "../components/section-reviews/SectionReviews";
import CounterCardsInfo from "../components/counter-cardsInfo/CounterCardsInfo";
import ContainersInfo from "../components/containers-info/ContainersInfo";
import InventorySection from "../components/inventory-section/InventorySection";
import GalleryContainers from "../components/gallery-containers/GalleryContainers";
import DataBase from "../components/database-section/DataBase";
import Cover from "../components/cover/Cover";
import Subcover from "../components/subcover/Subcover";
import Analytics from "../components/analytics/Analytics";
import Slider from "../components/slider/Slider";
import Amount from "../components/amount/Amount";
const App = () => {
  return (
    <Layout>
      <Cover />
      <Subcover />
      <Analytics />
      <Slider />
      <Amount />
      <div id="container">
        <CounterCardsInfo />
        <ContainersInfo />
        <InventorySection />
        <GalleryContainers />
        <DataBase />
      </div>

      <SectionFuture />
      <SectionReviews />
      <SectionCall />
    </Layout>
  );
};

export default App;
