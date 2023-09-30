import 'react-slideshow-image/dist/styles.css';
import CampaignOptions from "../containers/Marketplace/components/CampaignOptions";
import HeaderSecondaryContainer from "../containers/Marketplace/components/HeaderSecondaryContainer";
import Amounts from "../containers/Marketplace/components/Amounts";
import CampaignPreview from "../containers/Marketplace/components/CampaignPreview"
import Footer from "../containers/Marketplace/components/Footer";
import Check from '@mui/icons-material/Check';
import { useState } from 'react';
import { MilestoneFunding, MilestoneDetail, CreatorItemFunding, ProgressiveFunding } from '../utils/types';
import PolygonMap from '../containers/Marketplace/components/PolygonMap';
//import { CreatorItemFunding } from '../containers/Marketplace/utils/types';

const campaignTypes = {
    "data": {
        "campaigns": [
            {
                "id": "1",
                "title": "5 Year Contract",
                "descText": "Choose this option if you own land and are willing to commit to the above stated tenure of tree preservation. By choosing this option you are seeking sponsorship and you agree to maintain forest & timber on your property for the above stated length of time. In the next steps we will help you identify your property on a map, which people can view and select for sponsorship!",
                "rewardText": "Interested in the fine print of what a contract like this looks like? Click Ex: below.",
                "fee": "5%",
                "chain": "NEAR",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "2",
                "title": "10 Year Contract",
                "descText": "Choose this option if you own land and are willing to commit to the above stated tenure of tree preservation. By choosing this option you are seeking sponsorship and you agree to maintain forest & timber on your property for the above stated length of time. In the next steps we will help you identify your property on a map, which people can view and select for sponsorship!",
                "rewardText": "Interested in the fine print of what a contract like this looks like? Click Ex: below.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "3",
                "title": "20 Year Contract",
                "descText": "Choose this option if you own land and are willing to commit to the above stated tenure of tree preservation. By choosing this option you are seeking sponsorship and you agree to maintain forest & timber on your property for the above stated length of time. In the next steps we will help you identify your property on a map, which people can view and select for sponsorship!",
                "rewardText": "Interested in the fine print of what a contract like this looks like? Click Ex: below.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "4",
                "title": "30 Year Contract",
                "descText": "Choose this option if you own land and are willing to commit to the above stated tenure of tree preservation. By choosing this option you are seeking sponsorship and you agree to maintain forest & timber on your property for the above stated length of time. In the next steps we will help you identify your property on a map, which people can view and select for sponsorship!",
                "rewardText": "Interested in the fine print of what a contract like this looks like? Click Ex: below.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "5",
                "title": "40 Year Contract",
                "descText": "Choose this option if you own land and are willing to commit to the above stated tenure of tree preservation. By choosing this option you are seeking sponsorship and you agree to maintain forest & timber on your property for the above stated length of time. In the next steps we will help you identify your property on a map, which people can view and select for sponsorship!",
                "rewardText": "Interested in the fine print of what a contract like this looks like? Click Ex: below.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "6",
                "title": "50 Year Contract",
                "descText": "Choose this option if you own land and are willing to commit to the above stated tenure of tree preservation. By choosing this option you are seeking sponsorship and you agree to maintain forest & timber on your property for the above stated length of time. In the next steps we will help you identify your property on a map, which people can view and select for sponsorship!",
                "rewardText": "Interested in the fine print of what a contract like this looks like? Click Ex: below.",
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
                "title": "Progressive Funding",
                "descText": "Select this option if you would like multiple contributors to donate towards your funding objective over the x123c.",
                "rewardText": "This campaign mode is simliar to Go Fund Me. (**Recommended**)",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "2",
                "title": "Static Funding",
                "descText": "Select this option if you would like to receive one lump sum from a single contributor to honor the x123c",
                "rewardText": "",
                "fee": "5%",
                "chain": "NEAR",
                "photo": "./starburst.jpeg"
            },
            {
                "id": "3",
                "title": "Milestone Funding",
                "descText": "Add specific amounts to raise at specific dates to honor the x123c",
                "rewardText": "Each milestone will be treated as a unique contract, and can be satisfied by one contributor",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            }
        ]
    }
};



const Builder = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [campaignType, setCampaginType] = useState(null);
    const [fundingType, setFundingType] = useState(null);
    const [drawnMapData, setDrawnMapData] = useState<Object | null>(null);
    const [creatorItemFunding, setCreatorItemFunding] = useState<CreatorItemFunding | null>(null);
    const [campaignImageURL, setCampaignImageURL] = useState<string>('');

    const selectCampaignType = (id: number)=>{
        setCampaginType(id);
        setCurrentStep(2);
    }

    const selectFundingType = (id: number)=>{
        setFundingType(id);
        setCurrentStep(3);
    }

    const handleSetDrawnMapData = (data: Object) => {
        setDrawnMapData(data);
        setCurrentStep(4);
    }

    const handleSetPricingData= (data: CreatorItemFunding) => {
        setCreatorItemFunding(data);
        setCurrentStep(5);
    }

    const getSelectedCampaignTitle = () =>{
        let arr = campaignTypes.data.campaigns;
        return arr.find(o => o.id === campaignType).title;
    }
    const getSelectedFundingTitle = () =>{
        let arr = fundingModes.data.campaigns;
        return arr.find(o => o.id === fundingType).title;
    }

    const campaignImage = (image: any)=>{
        setCampaignImageURL(image[0].dataURL);
    }

    return (
        <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug">
            <HeaderSecondaryContainer termsUrl="./builder.png" />
            <div className="bg-brt-green p-5 flex justify-center text-white">
               {currentStep == 1 && 'Step 1: Choose your contract length'}
               {currentStep == 2 && 'Step 2: Choose your Funding Type'}
               {currentStep == 3 && 'Step 3: Draw the trees'}
               {currentStep == 4 && 'Step 4: How much do you need?'}
               {currentStep == 5 && 'Step 5: Review and finalize'}
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
                        <span className={currentStep == 3 ? 'selected' : undefined} onClick={()=>{setCurrentStep(3)}}>
                            {drawnMapData == null && '3) Draw Boundries'}
                            {drawnMapData != null && <div className="text-white">
                                <Check fontSize="medium" className="pb-1 text-white" /> Draw Boundries
                            </div>}
                        </span>
                        <span className={currentStep == 4 ? 'selected' : undefined} onClick={()=>{setCurrentStep(4)}}>
                            {creatorItemFunding == null && '4) Funding Amounts'}
                            {creatorItemFunding != null && <div className="text-white">
                                <Check fontSize="medium" className="pb-1 text-white" /> Funding Amounts
                            </div>}
                        </span>
                        <span className={currentStep == 5 ? 'selected' : undefined} onClick={()=>{setCurrentStep(5)}}>
                            {null == null && '5) Review and Finalize'}
                            {'d' == null && <div className="text-white">
                                <Check fontSize="medium" className="pb-1 text-white" /> Review and Finalize
                            </div>}
                        </span>
                    </div>
                </div>
                <div className="" style={{width: '80%'}}>    
                    {currentStep == 1 && <CampaignOptions selectOption={selectCampaignType} replacementText={""} selectedId={null} sampleData={campaignTypes} />}
                    {currentStep == 2 && <CampaignOptions selectOption={selectFundingType} replacementText={getSelectedCampaignTitle()} selectedId={null} sampleData={fundingModes} />}
                    {currentStep == 3 && <PolygonMap setDrawnMapData={handleSetDrawnMapData}/>}
                    {currentStep == 4 && <Amounts typeId={fundingType} setCurrentStep={setCurrentStep} handleSetPricingData={handleSetPricingData} campaignImage={campaignImage}/>}
                    {currentStep == 5 && 
                        <CampaignPreview 
                            typeId={fundingType} 
                            setCurrentStep={setCurrentStep}
                            campaignType={campaignType} 
                            fundingType={fundingType}
                            drawnMapData={drawnMapData}
                            creatorItemFunding={creatorItemFunding}
                            campaignImageURL={campaignImageURL}
                        />}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Builder;
