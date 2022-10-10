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
                "title": "Small Business & Startups",
                "descText": "43% of small businesses surveyed believe that they have less than six months until a permanent shutdown is unavoidable. While mom and pop might not always be in focus, collectively small businesses are a powerful and influential piece of the economy. 99.9% of all businesses in the U.S. qualify as small businesses, collectively employing almost half of the nation’s workforce.",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "5%",
                "chain": "NEAR",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "2",
                "title": "Wellness Aid (Humans or Pets)",
                "descText": "Recent polling indicates that traditional wellness campaigns in 2020 raised substantially less money in areas with more medical debt, higher uninsurance rates, and lower incomes. Whether your fundraising concerns extend to a loved one, a pet, or yourself, our goal is to use the power of Web3 to help you achieve your fundraising goals.",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "3",
                "title": "Disaster Relief",
                "descText": "In the two months following Hurricane Harvey, crowd funding funneled over $65 million to victims and charities. Millions more have been raised through hundreds of campaigns for people affected by Hurricane Maria. Campaigns of this type can focus on personal situations or broader goals, it's up to you!",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "4",
                "title": "Environmental Impact",
                "descText": "Want to raise money to switch your house to Solar? Own a non-profit that cleans beaches or reduces trash going into our oceans? Want to fix that pesky pothole in 7th street that never seems to get fixed?",
                "rewardText": "If you have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "5",
                "title": "Justice and Equality",
                "descText": "We live in a world that is out of balance. For example: between February and April of 2020, Black business ownership declined more than 40%, the largest drop across any ethnic group. The report details the impact Covid-19 has had on Black-owned businesses. Black-owned businesses were less likely to handle mandated closures due to lack of access to financial relief.",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            }
        ]
    }
};

const CampaignStrategies = ({ showModal, showConversationModal, showDashboardModal }: { showModal: (item: StoreThing) => void, showConversationModal: () => void, showDashboardModal: () => void }) => {
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
                    <img src="./works.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <div className="text-white">1) choose a campaign type</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 my-12">
                    {sampleData.data.campaigns.map(function (object, i) {
                        const styleFormatted = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("' + object.photo + '")';
                        return <div className="bg-slate-100 rounded-xl shadow-lg relative overflow-hidden btn-shadow" key={i + 'campaignStrats'}>
                            <div className="hero-image-item rnd-shadow" style={{ 'backgroundImage': styleFormatted }}>
                                <div className="p-4">
                                    <div className="text-xl text-white mt-1 font-bold">{object.title}</div>
                                    <div className="text-sm text-white mt-2">{object.descText}<br /><br />{object.rewardText}</div>
                                </div>
                            </div>
                            <div className="flex items-center mt-3 justify-between p-4">
                                <div className="text-center btn-green-border pt-2 pb-2 pl-2 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow">
                                <div className="justify-between">
                                    <SignalCellularAltIcon fontSize="medium" className="pb-1 text-green" />
                                    <span className="text-green text-lg">
                                    &nbsp;Examples</span>
                                </div>
                                </div>
                                <div className="text-center btn-green pt-2 pb-2 pl-8 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow">
                                <div className="justify-between">
                                    <ArrowUpwardIcon fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                    &nbsp;Begin</span>
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

export default CampaignStrategies;
