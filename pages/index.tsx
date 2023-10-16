import type { NextPage } from "next";
import { SetStateAction, useState, useEffect } from "react";
import { useRouter } from "next/router";

import HeaderContainer from "../containers/Marketplace/components/HeaderContainer";
import Footer from "../containers/Marketplace/components/Footer";
import HeroSection from "../containers/Marketplace/components/HeroSection";
import FrontItems from "../containers/Marketplace/components/FrontItems";
import FundingStrategies from "../containers/Marketplace/components/FundingStrategies";
import FundingExamples from "../containers/Marketplace/components/FundingExamples";

import FinalStart from "../containers/Marketplace/components/FinalStart";

import CampaignStrategies from "../containers/Marketplace/components/CampaignStrategies";
import { StoreThing } from "../containers/Marketplace/controllers/useMarketplaceController";
import ConversationModal from "../containers/Marketplace/components/ConversationModal";
import DashboardModal from "../containers/Marketplace/components/DashboardModal";
import TermsOfService from "../containers/Marketplace/components/TermsOfService";


const Store: NextPage = () => {
  const [showConversationModal, setShowConversationModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);


  const handleShowConversationModal = () => {
    setShowConversationModal(true);
  }

  const handleHideConversationModal = () => {
    setShowConversationModal(false);
  }

  const handleShowDashboardModal = () => {
    setShowDashboardModal(true);
  }

  const handleHideDashboardModal = () => {
    setShowDashboardModal(false);
  }

 
  const { query } = useRouter();
  
 

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
      <div className="mx-4 md:mx-24 md:mt-4">
        {showTermsModal && <TermsOfService />}
        {showConversationModal && <ConversationModal closeModal={handleHideConversationModal} />}
        {showDashboardModal && < DashboardModal closeModal={handleHideDashboardModal} />}
      </div>
  
      <Footer />
    </div>
  );
};

export default Store;
