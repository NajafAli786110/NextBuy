import React from "react";
import HeroSection from "../components/layout/HeroSection";
import GenderCollectionSection from "../components/products/GenderCollectionSection";
import NewArrivals from "../components/products/NewArrivals";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Gender Collection Section */}
      <GenderCollectionSection />

      {/* NewArrivals */}
      <NewArrivals />
    </div>
  );
};

export default Home;
