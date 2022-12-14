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
                "title": "Explain the Problem",
                "descText": "A compelling pitch for community funding will require you to have a clear understanding of the issue / cause / or personal problem that you are trying to solve. Successful campaigns will provide a clear outline of the issue at hand, and will help others to empathize with the goal you are trying to achieve.",
                "rewardText": "Approved campaigns must meet our community standards, and be oriented towards a positive local or global outcome.",
                "fee": "5%",
                "chain": "NEAR",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "2",
                "title": "Explain the Solution",
                "descText": "If you meet your funding goal, help those who contribute to understand how the specific amount requested is going to impact the problem at hand.",
                "rewardText": "Compelling campaigns will (in a practical sense) create a correlation between the amount of funding requested, and a solution to the problem at hand, or goal that needs to be met.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "3",
                "title": "Humanize the Outcome ",
                "descText": "The ethos of this platform is to bring about positive change in the world.",
                "rewardText": "Take some time to explain how specific people(s) or person(s) will individually be impacted by your campaign. Whether your deliverable is a physical good or a simple ???thank you???, be committed to an ongoing relationship with those who are generous enough to fund your goals.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            }
        ]
    }
};

const FinalStart = ({ showModal, showConversationModal, showDashboardModal }: { showModal: (item: StoreThing) => void, showConversationModal: () => void, showDashboardModal: () => void }) => {
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
                    <img src="./ready.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <div className="text-white mx-auto" style={{ width: '400px'}}>Do you have a specific funding need that might be a good candidate for funding on NEAR? <br/><br/>Our campaing builder makes it easy for you to get started, and will walk you through each step of creating the perfect campaign today.<br/><br/>
                    <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow mx-auto" style={{width: '300px'}}>
                        <div className="justify-between">
                            <ArrowUpwardIcon fontSize="medium" className="pb-1 text-white" />
                            <span className="text-white text-lg">
                                &nbsp;Start My Funding Campaign
                            </span>
                        </div>
                    </div>
                    <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinalStart;
