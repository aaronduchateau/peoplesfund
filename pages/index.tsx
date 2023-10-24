import type { NextPage } from "next";

import HeaderContainer from "../containers/Marketplace/components/HeaderContainer";
import Footer from "../containers/Marketplace/components/Footer";
import HeroSection from "../containers/Marketplace/components/HeroSection";
import FrontItems from "../containers/Marketplace/components/FrontItems";

import FinalStart from "../containers/Marketplace/components/FinalStart";

import CampaignStrategies from "../containers/Marketplace/components/CampaignStrategies";

const Store: NextPage = () => {

  return (
    <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug">
      <HeaderContainer />
      <div className="flex w-full">
        <FrontItems />
      </div>
      <div className="flex w-full">
        <HeroSection />
      </div>
      <div className="flex w-full" style={{background: '#02a95c'}}>
        <CampaignStrategies  />
      </div>
      <div className="flex w-full" style={{background: '#017A42'}}>
        <FinalStart  />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
