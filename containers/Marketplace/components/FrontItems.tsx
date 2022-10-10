import { useState } from "react";
import { MbTab, MbMenuWrapper, MbDropdownMenu, MbIcon, EIconName } from "mintbase-ui";
import { Item, LoadingItem } from "./Item";
import HeroSection from "./HeroSection";
import useStoreThingsController, { StoreThing } from "../controllers/useMarketplaceController";
import useStoreController, { Store } from "../controllers/useStoresController";
import { MbButton } from "mintbase-ui";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorSecondary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#02a95c' : '#02a95c',
  },
}));

const sampleData = {
  "data": {
    "campaigns": [
      {
        "id": "1",
        "title": "Becky needs new cash register",
        "descText": "Becky's store was flooded during hurricane Ian, and she is hoping to acquire a new cash register for her small business.",
        "rewardText": "Every donation over 100 dollars recieves a redeemable NFT that is good for one free coffee at her restaurant!",
        "targetAmount": "1450",
        "raisedAmount": "1050",
        "photo": "./store-owner.jpeg"
      },
      {
        "id": "2",
        "title": "Fly Jared to Australia",
        "descText": "Jared is a filipino man who wants to compete in an international body building competition in Australia.",
        "rewardText": "Help Jared achieve his dream of placing in this international competition.",
        "targetAmount": "3250",
        "raisedAmount": "500",
        "photo": "./buff-guy.jpeg"
      },
      {
        "id": "3",
        "title": "Help Bohdana's Marketing Firm",
        "descText": "Bohdana's marketing firm 'XYZ' has been impacted by the Ukrainian crisis, forcing her to relocate from her office to a remote work environment, and focus on international customers.",
        "rewardText": "Every donation over 10,000 dollars recieves a free marketing consultation and website rebrand.",
        "targetAmount": "55000",
        "raisedAmount": "47900",
        "photo": "./professionals.jpeg"
      },
      {
        "id": "4",
        "title": "Buster broke a leg",
        "descText": "Our beloved corgi Buster got a little too ambitious on the porch last week, and fractured his leg chasing a bird. We hate to ask but need a little help with the bill.",
        "rewardText": "",
        "targetAmount": "600",
        "raisedAmount": "83",
        "photo": "./corgi.webp"
      },
      {
        "id": "5",
        "title": "Plant grass to prevent dune erosion",
        "descText": "Praia do Cabedelo needs your help! Over the last 3 years we have measured a 30% erosion rate in some areas of our beloved beach.",
        "rewardText": "Every donation over 50 dollars will recieve a complimentary t-shirt featuring our logo and the dune you helped to save",
        "targetAmount": "21750",
        "raisedAmount": "11050",
        "photo": "./grass.jpeg"
      },
      {
        "id": "6",
        "title": "Help James launch his Podcast",
        "descText": "Fans of James Scott are no stranger to his quick wit and fresh insight into the underground music scene. Help James extend his influence from KLCX campus radio into the podcast scene.",
        "rewardText": "Every donation over 50 dollars recieves a featured download of up and coming artists in the area ",
        "targetAmount": "3450",
        "raisedAmount": "3300",
        "photo": "./headphones.jpeg"
      },
    ]
  }
};

const FrontItems = ({ showModal, showConversationModal, showDashboardModal }: { showModal: (item: StoreThing) => void, showConversationModal: () => void, showDashboardModal: () => void }) => {
  const [selectedTab, setSelectedTab] = useState('all');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState('');

  const { things, loading } = useStoreThingsController();
  const { stores, loading: loadingStores } = useStoreController();

  // show store names in the dropdown menu
  const storeTabs = stores.map((store: Store) => {
    return {
      content: <span>{store.name}</span>,
      onClick: () => setSelectedStore(store.id)
    }
  });

  // add 'all stores' to the beginning of the dropdown menu
  storeTabs.unshift({
    content: <span>All Stores</span>,
    onClick: () => setSelectedStore('')
  });

  const scrollToPurchase = () => {
    const section = document.querySelector('#purchase-items');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // filter things by store name selected in the dropdown menu
  const filteredThings = things.filter((thing: StoreThing) => {
    return selectedStore === '' || thing.storeId === selectedStore;
  });

  return (
    <div className='w-full ml-6 items-center mt-4 mr-6'>
      <div className='flex w-full ml-6 items-center mt-4 hidden'>
        <div onClick={() => setSelectedTab('all')}>
          <MbTab
            label={<span>All Items</span>}
            isActive={selectedTab === 'all'}
            isSmall
          />
        </div>
        <MbMenuWrapper setIsOpen={setMenuOpen}>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <MbTab
              label={
                <div className="flex space-x-8 items-center">
                  <span>{selectedStore === ''
                    ? 'All Stores'
                    : stores.find((store: Store) => store.id === selectedStore)?.name
                  }</span>
                  <div className="pointer-events-none">
                    <MbIcon
                      name={
                        menuOpen
                          ? EIconName.ARROW_DROP_UP
                          : EIconName.ARROW_DROP_DOWN
                      }
                      size="16px"
                      color="blue-300"
                      darkColor="blue-100"
                    />
                  </div>
                </div>
              }
              isSmall
            />
          </div>
          <MbDropdownMenu
            items={storeTabs}
            isOpen={menuOpen}
            className="mt-2"
          />
        </MbMenuWrapper>
      </div>
      <div>
        <div style={{ textAlign: 'center', width: '100%' }} className="my-6">
          <img src="./featured.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 my-12">
          {sampleData.data.campaigns.map(function (object, i) {
            const styleFormatted = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("' + object.photo + '")';
            return <div className="bg-slate-100 rounded-xl shadow-lg relative overflow-hidden btn-shadow" key={i + 'frontItems'}>
              <div className="hero-image-item rnd-shadow" style={{ 'backgroundImage': styleFormatted }}>
                <div className="p-4">
                  <div className="text-xl text-white mt-1 font-bold">{object.title}</div>
                  <div className="text-sm text-white mt-2">{object.descText}<br /><br />{object.rewardText}</div>
                </div>
                <div className="prog-text-holder">
                  <span className="text-green text-4xl text-bold">${object.raisedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                  <span className="text-sm text-light-green">&nbsp;of ${object.targetAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                </div>
                <div className="line-holder">
                  <BorderLinearProgress variant="determinate" value={parseInt(object.raisedAmount) / parseInt(object.targetAmount) * 100} color="success" />
                </div>
              </div>
              <div className="flex items-center mt-3 justify-between p-4">
                <div className="text-center btn-green-border pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow">
                  <div className="justify-between">
                    <SignalCellularAltIcon fontSize="medium" className="pb-1 text-green" />
                    <span className="text-green text-lg">
                      &nbsp;Details</span>
                  </div>
                </div>
                <div className="text-center btn-green pt-2 pb-2 pl-8 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow">
                  <div className="justify-between">
                    <ArrowUpwardIcon fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                      &nbsp;Fund</span>
                  </div>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default FrontItems;
