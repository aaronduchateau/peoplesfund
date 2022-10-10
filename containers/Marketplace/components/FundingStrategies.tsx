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
                "title": "NFT funding",
                "descText": "Ex: Tom makes the most amazing cowboy boots. He knows exactly what it costs to make a pair and what his margin needs to be to make a profit. Tom chooses this option, and creates a tokenized NFT (50 units) at $200 each. His campaign is approved and is listed on our platform.",
                "rewardText": "Details: Tom will use our campaign builder to create his campaign, which (behind the scenes) will leverage the Mintbase API to list his redeemable NFT's on Near.",
                "fee": "5%",
                "chain": "NEAR",
                "photo": "./mintbase.webp"
            },
            {
                "id": "2",
                "title": "Progressive Funding",
                "descText": "Ex: Jane has outstanding medical bills due to an unexpected surgery, and is worried she will not be able to cover her mortgage (if she defaults on the $2,000 payment she will lose her home). Her campaign is approved and is listed on our platform.",
                "rewardText": "Details: Jane is $2,000 short of her goal. Folks can contribute in whatever incriment they desire, and our smart contract will handle refunds if the goal is not met.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "3",
                "title": "Goal Distribution",
                "descText": "Ex: Sarah wants to raise money to finish her nursing degree, but her funders and herself want accountablity for the funds. Each time Sarah completes a term with passing grades she checks in with her funder(s), and funding for the subsequent term is released. Her campaign is approved and is listed on our platform.",
                "rewardText": "Details: If Sarah fails to meet her minimum G.P.A. requirements, the contract refunds the subsequent funding to her sponsers.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            }
        ]
    }
};

const FundingStrategies = ({ showModal, showConversationModal, showDashboardModal }: { showModal: (item: StoreThing) => void, showConversationModal: () => void, showDashboardModal: () => void }) => {
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
                    <img src="./fit.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <div className="text-white">2) choose a funding strategy</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 my-12">
                    {sampleData.data.campaigns.map(function (object, i) {
                        const styleFormatted = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("' + object.photo + '")';
                        return <div className="bg-slate-100 rounded-xl shadow-lg relative overflow-hidden btn-shadow" key={i + 'fundingStrats'}>
                            <div className="hero-image-item rnd-shadow" style={{ 'backgroundImage': styleFormatted }}>
                                <div className="p-4">
                                    <div className="text-xl text-white mt-1 font-bold">{object.title}</div>
                                    <div className="text-sm text-white mt-2">{object.descText}<br /><br />{object.rewardText}</div>
                                </div>
                            </div>
                            <div className="flex items-center mt-3 justify-between p-4">
                                <div className="text-left pt-2 pb-2 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><SignalCellularAltIcon fontSize="medium" className="pb-1 text-green" /> {object.fee}</td>
                                        </tr>
                                        <tr>
                                            <td><SignalCellularAltIcon fontSize="medium" className="pb-1 text-green" /> {object.chain}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-center btn-green pt-2 pb-2 pl-8 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow">
                                <div className="justify-between">
                                    <ArrowUpwardIcon fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                    &nbsp;Start</span>
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

export default FundingStrategies;
