import type { NextPage } from "next";
import { SetStateAction, useState, useEffect } from "react";
import { useRouter } from "next/router";

import HeaderContainer from "../containers/Marketplace/components/HeaderContainer";
import Footer from "../containers/Marketplace/components/Footer";
import HeroSection from "../containers/Marketplace/components/HeroSection";
import FrontItems from "../containers/Marketplace/components/FrontItems";
import BuyModal from "../containers/Marketplace/components/BuyModal";
import MembershipTiers from "../containers/Marketplace/components/MembershipTiers";
import { StoreThing } from "../containers/Marketplace/controllers/useMarketplaceController";
import ConfirmationModal from "../containers/Marketplace/components/ConfirmationModal";
import ConversationModal from "../containers/Marketplace/components/ConversationModal";
import DashboardModal from "../containers/Marketplace/components/DashboardModal";
import TermsOfService from "../containers/Marketplace/components/TermsOfService";
import LoginFollowUP from "../containers/Marketplace/components/LoginFollowUp";
import { NearWalletProvider } from "../services/providers/NearWalletProvider"

const Store: NextPage = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showConversationModal, setShowConversationModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({} as StoreThing);

  const handleOpenTermsModal = (item: StoreThing) => {
    setSelectedItem(item);
    setShowTermsModal(true);
  }

  const handleOpenBuyModal = () => {
    setShowTermsModal(false);
    setShowBuyModal(true);
  }

  const handleCloseBuyModal = () => {
    setSelectedItem({} as StoreThing);
    setShowBuyModal(false);
  }

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

  const handleCloseTermsModal = () => {
    setSelectedItem({} as StoreThing);
    setShowTermsModal(false);
  }
  const { query } = useRouter();
  const transactionHashes: any = query.transactionHashes;
  const transactionInfo: any = query.signMeta;
  let showConfirmationModal = false;
  if (transactionInfo){
    showConfirmationModal = (JSON.parse(transactionInfo).type === 'make-offer');
  } 
 

  return (
    <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug">
      <HeaderContainer />
      <div className="flex w-full">
        <FrontItems showModal={handleOpenTermsModal} showConversationModal={handleShowConversationModal} showDashboardModal={handleShowDashboardModal}/>
      </div>
      <div className="mx-4 md:mx-24 md:mt-4">
        {showTermsModal && <TermsOfService closeModal={handleCloseTermsModal} continuePurchase={handleOpenBuyModal} />}
        {showBuyModal && <BuyModal closeModal={handleCloseBuyModal} item={selectedItem} />}
        {showConversationModal && <ConversationModal closeModal={handleHideConversationModal} />}
        {showDashboardModal && < DashboardModal closeModal={handleHideDashboardModal} />}
        {showConfirmationModal && 
          <NearWalletProvider contractAddress="testtesrrr.sputnikv2.testnet">
            <ConfirmationModal transactionHashes={transactionHashes} transactionInfo={transactionInfo}/>
          </NearWalletProvider>
        }
      </div>
      <LoginFollowUP />
      <Footer />
    </div>
  );
};

export default Store;
