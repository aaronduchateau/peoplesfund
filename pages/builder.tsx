import 'react-slideshow-image/dist/styles.css';
import CampaignOptions from "../containers/Marketplace/components/CampaignOptions";
import HeaderSecondaryContainer from "../containers/Marketplace/components/HeaderSecondaryContainer";
import Amounts from "../containers/Marketplace/components/Amounts";
import Footer from "../containers/Marketplace/components/Footer";
import Check from '@mui/icons-material/Check';
import { useState } from 'react';
import { MilestoneFunding, MilestoneDetail, CreatorItemFunding, ProgressiveFunding } from '../utils/types';

const campaignTypes = {
    "data": {
        "campaigns": [
            {
                "id": "1",
                "title": "Creators or Startups",
                "descText": "43% of small businesses surveyed believe that they have less than six months until a permanent shutdown is unavoidable. While mom and pop might not always be in focus, collectively small businesses are a powerful and influential piece of the economy. 99.9% of all businesses in the U.S. qualify as small businesses, collectively employing almost half of the nation’s workforce.",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "5%",
                "chain": "NEAR",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "2",
                "title": "Wellness Aid Humans",
                "descText": "Recent polling indicates that traditional wellness campaigns in 2020 raised substantially less money in areas with more medical debt, higher uninsurance rates, and lower incomes. Whether your fundraising concerns extend to a loved one, a pet, or yourself, our goal is to use the power of Web3 to help you achieve your fundraising goals.",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "3",
                "title": "Wellness Aid Pets",
                "descText": "Recent polling indicates that traditional wellness campaigns in 2020 raised substantially less money in areas with more medical debt, higher uninsurance rates, and lower incomes. Whether your fundraising concerns extend to a loved one, a pet, or yourself, our goal is to use the power of Web3 to help you achieve your fundraising goals.",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "4",
                "title": "Disaster Relief",
                "descText": "In the two months following Hurricane Harvey, crowd funding funneled over $65 million to victims and charities. Millions more have been raised through hundreds of campaigns for people affected by Hurricane Maria. Campaigns of this type can focus on personal situations or broader goals, it's up to you!",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "5",
                "title": "Environmental Impact",
                "descText": "Want to raise money to switch your house to Solar? Own a non-profit that cleans beaches or reduces trash going into our oceans? Want to fix that pesky pothole in 7th street that never seems to get fixed?",
                "rewardText": "If you have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "6",
                "title": "Justice & Equality",
                "descText": "We live in a world that is out of balance. For example: between February and April of 2020, Black business ownership declined more than 40%, the largest drop across any ethnic group. The report details the impact Covid-19 has had on Black-owned businesses. Black-owned businesses were less likely to handle mandated closures due to lack of access to financial relief.",
                "rewardText": "Have a cause that correlates to this category? choose this option to begin.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            }
        ]
    }
};

const fundingModes = {
    "data": {
        "campaigns": [
            {
                "id": "1",
                "title": "Creator Item Funding",
                "descText": "Ex: Tom makes the most amazing cowboy boots. He knows exactly what it costs to make a pair and what his margin needs to be to make a profit. Tom chooses this option, and creates a tokenized NFT (50 units) at $200 each. His campaign is approved and is listed on our platform.",
                "rewardText": "Details: Tom will use our campaign builder to create his campaign, which (behind the scenes) will leverage the Mintbase API to list his redeemable NFT's on Near.",
                "fee": "5%",
                "chain": "NEAR",
                "photo": "./starburst.jpeg"
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
                "title": "Milestone Funding",
                "descText": "Ex: Sarah wants to raise money to finish her nursing degree, but her funders and herself want accountablity for the funds. Each time Sarah completes a term with passing grades she checks in with her funder(s), and funding for the subsequent term is released. Her campaign is approved and is listed on our platform.",
                "rewardText": "Details: If Sarah fails to meet her minimum G.P.A. requirements, the contract refunds the subsequent funding to her sponsers.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            }
        ]
    }
};



const builder = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [campaignType, setCampaginType] = useState(null);
    const [fundingType, setFundingType] = useState(null);
    const [creatorItemFunding, setCreatorItemFunding] = useState({});

    const selectCampaignType = (id: number)=>{
        setCampaginType(id);
        setCurrentStep(2);
    }

    const selectFundingType = (id: number)=>{
        setFundingType(id);
        setCurrentStep(3);
    }

    const getSelectedCampaignTitle = () =>{
        let arr = campaignTypes.data.campaigns;
        return arr.find(o => o.id === campaignType).title;
    }
    const getSelectedFundingTitle = () =>{
        let arr = fundingModes.data.campaigns;
        return arr.find(o => o.id === fundingType).title;
    }

    return (
        <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug">
            <HeaderSecondaryContainer termsUrl="./builder.png" />
            <div className="bg-brt-green p-5 flex justify-center text-white">
               {currentStep == 1 && 'Step 1: Choose your Category'}
               {currentStep == 2 && 'Step 2: Choose your Funding Mode'}
               {currentStep == 3 && 'Step 3: What are you trying to Raise?'}
            </div>
            <div className="flex">
                <div style={{width: '15%'}}>
                    <div className="cat-menu-holder">
                        <span className={currentStep == 1 ? 'selected' : undefined} onClick={()=>{setCurrentStep(1)}}>
                            {campaignType == null && '1) Choose Category'}
                            {campaignType != null && <div className="text-white text-sm">
                                <Check fontSize="medium" className="pb-1 text-white" /> {getSelectedCampaignTitle()}
                            </div>}
                        </span>
                        <span className={currentStep == 2 ? 'selected' : undefined} onClick={()=>{setCurrentStep(2)}}>
                            {fundingType == null && '2) Choose Funding'}
                            {fundingType != null && <div className="text-white text-sm">
                                <Check fontSize="medium" className="pb-1 text-white" /> {getSelectedFundingTitle()}
                            </div>}
                        </span>
                        <span className={currentStep == 3 ? 'selected' : undefined} onClick={()=>{setCurrentStep(fundingType ? 3: 2)}}>
                            {null == null && '3) Choose Amounts'}
                            {'d' == null && <div className="text-white">
                                <Check fontSize="medium" className="pb-1 text-white" /> $ Selected
                            </div>}
                        </span>
                    </div>
                </div>
                <div className="" style={{width: '80%'}}>    
                    {currentStep == 1 && <CampaignOptions selectOption={selectCampaignType} selectedId={null} sampleData={campaignTypes} />}
                    {currentStep == 2 && <CampaignOptions selectOption={selectFundingType} selectedId={null} sampleData={fundingModes} />}
                    {currentStep == 3 && <Amounts typeId={fundingType} goBack={setCurrentStep} />}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default builder;
