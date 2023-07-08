import React from 'react';
import Layout from "./layout/Layout"
import CounterCardsInfo from "../components/counter-cardsInfo/CounterCardsInfo"
import ContainersInfo from '../components/containers-info/ContainersInfo';
import InventorySection from "../components/inventory-section/InventorySection"
import GalleryContainers from '../components/gallery-containers/GalleryContainers';
import DataBase from "../components/database-section/DataBase"

const App = () => {
  return (
    <Layout>
      {/* Тут будут секции как отдельные компоненты */}
      <CounterCardsInfo />
      <ContainersInfo />
      <InventorySection />
      <GalleryContainers />
      <DataBase />
    </Layout>
  );
};

export default App;