import React from "react";
import Layout from "./layout/Layout";
import SectionCall from "../components/section-call/SectionCall";
import SectionFuture from "../components/section-future/SectionFuture";
import SectionReviews from "../components/section-reviews/SectionReviews";

const App = () => {
  return (
    <Layout>
      {/* Тут будут секции как отдельные компоненты */}
      <SectionFuture />
      <SectionReviews />
      <SectionCall />
    </Layout>
  );
};

export default App;
