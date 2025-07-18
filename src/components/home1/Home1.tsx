import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroBanner from "../common/HeroBanner";
import { ToolbarItem } from "../common/Toolbar";
import Brands, { BrandItem } from "../common/Brands";
import CarCardList from '../common/CarCardList';
import { carData } from '../../data/carData';
import VideoDescriptionSection from '../VideoDescriptionSection';
import WhyUsSection, { defaultFeatures } from '../common/WhyUsSection';
import PopularMakesSection from '../common/PopularMakesSection';


const toolbarItems: ToolbarItem[] = [
  {
    type: "dropdown",
    label: "Any Makes",
    options: ["Toyota", "BMW", "Audi"],
    value: "",
    onChange: () => {},
  },
  {
    type: "dropdown",
    label: "Any Models",
    options: ["Corolla", "X5", "A4"],
    value: "",
    onChange: () => {},
  },
  {
    type: "dropdown",
    label: "Prices",
    options: ["All Prices", "$10k-$20k", "$20k-$30k"],
    value: "",
    onChange: () => {},
  },
  { type: "button", label: "Search Cars", onClick: () => {} },
];

const brandList: BrandItem[] = [
  { image: "/images/brands/audi.png", label: "Audi" },
  { image: "/images/brands/bmw.png", label: "BMW" },
  { image: "/images/brands/ford.png", label: "Ford" },
  { image: "/images/brands/mercedes.png", label: "Mercedes Benz" },
  { image: "/images/brands/peugeot.png", label: "Peugeot" },
  { image: "/images/brands/volkswagen.png", label: "Volkswagen" },
];

const Home1 = () => (
  <>
    <Header />

    <HeroBanner
      title="Find Your Perfect Car"
      subtitle="Find cars for sale and for rent near you"
      backgroundImage="/images/home1/car1.jpg"
      filterTabs={["All", "New", "Used"]}
      toolbarItems={toolbarItems}
      chips={["SUV", "Sedan", "Hatchback", "Coupe", "Hybrid"]}
      activeTab="All"
      onTabChange={() => {}}
    />

    <Brands
      heading="Explore Our Premium Brands"
      rightLinkText="Show All Brands"
      rightLinkUrl="/brands"
      brands={brandList}
      boxDefaultSize={150}
    />

    <CarCardList heading="Featured Cars" cars={carData} />

    <VideoDescriptionSection
      videoLink="/images/cars/luxury.mp4"
      heading="Get A Fair Price For Your Car\nSell To Us Today"
      description="We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of..."
      points={[
        "We are the UK's largest provider, with more patrols in more places",
        "You get 24/7 roadside assistance",
        "We fix 4 out of 5 cars at the roadside"
      ]}
      buttonText="Get Started"
    />

    <div style={{ display: "flex", justifyContent: "space-around", margin: "100px 40px 100px 40px" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>836M</div>
        <div style={{ fontSize: "0.9rem", letterSpacing: "1px", marginTop: "8px" }}>CARS FOR SALE</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>738M</div>
        <div style={{ fontSize: "0.9rem", letterSpacing: "1px", marginTop: "8px" }}>DEALER REVIEWS</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>100M</div>
        <div style={{ fontSize: "0.9rem", letterSpacing: "1px", marginTop: "8px" }}>VISITORS PER DAY</div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>238M</div>
        <div style={{ fontSize: "0.9rem", letterSpacing: "1px", marginTop: "8px" }}>VERIFIED DEALERS</div>
      </div>
    </div>
    <hr style={{ margin: "10px 0" }} />

    <WhyUsSection heading="Why Choose Us?" features={defaultFeatures} />

    <PopularMakesSection />

    <Footer />
  </>
);

export default Home1;
