import 'react-slideshow-image/dist/styles.css';
import HeaderSecondaryContainer from "../containers/Marketplace/components/HeaderSecondaryContainer";
import Amounts from "../containers/Marketplace/components/Amounts";
import CampaignPreview from "../containers/Marketplace/components/CampaignPreview"
import Footer from "../containers/Marketplace/components/Footer";
import Check from '@mui/icons-material/Check';
import { useState } from 'react';
import PolygonMap from '../containers/Marketplace/components/PolygonMap';
import CampaignOptionsContract from '../containers/Marketplace/components/CampaignOptionsContract';
import React from 'react';
import DocumentProof from '../containers/Marketplace/components/DocumentProof';
import { CreatorItemFunding } from '../containers/Marketplace/utils/types';

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
    const [drawnMapData, setDrawnMapData] = useState<Object | null>(null);
    const [creatorItemFunding, setCreatorItemFunding] = useState<CreatorItemFunding | null>(null);
    const [campaignImageURL, setCampaignImageURL] = useState<any>({});
    const [photoIdImageURL, setPhotoIdImageURL] = useState<any>({});
    const [mortgageImageURL, setMortgageImageURL] = useState<any>({});

    

    React.useEffect(() => {
        setTimeout(() => {
            const section = document.querySelector('#section-title-builder');
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
    }, [currentStep]);

    const selectCampaignType = (id: number | string) => {
        setCampaginType(id);
        setCurrentStep(2);
    }

    const handleSetDrawnMapData = (data: Object) => {
        setDrawnMapData(data);
        setCurrentStep(4);
    }

    const handleSetPricingData = (data: CreatorItemFunding) => {
        setCreatorItemFunding(data);
    }

    const getSelectedCampaignTitle = () => {
        let campaignTypeUsed : any = campaignType | 1;
        let arr = campaignTypes.data.campaigns;
        return arr.find(o => o.id == campaignTypeUsed).title;
    }

    const setCampaignImage = (image: any) => {
        setCampaignImageURL(image[0]);
    }

    const setPhotoIdImage = (image: any) => {
        setPhotoIdImageURL(image[0]);
    }

    const setMortgageImage = (image: any) => {
        setMortgageImageURL(image[0]);
    }
    //console.log('drawnMapData');
    //console.log(JSON.stringify(drawnMapData));
    //console.log('creatorItemFunding');
    //console.log(JSON.stringify(creatorItemFunding));
    console.log('campaignImageURL');
    console.log(JSON.stringify(campaignImageURL));
    console.log('contractName');
    //console.log(JSON.stringify(getSelectedCampaignTitle()));


    return (
        <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug" id="section-title-builder">
            <HeaderSecondaryContainer termsUrl="./builder.png" />
            <div className="bg-brt-green p-5 flex justify-center text-white" style={{ marginTop: '-13px', zIndex: 0 }}>
                {currentStep == 1 && 'Step 1: Choose your contract length'}
                {currentStep == 2 && 'Step 2: How much do you need?'}
                {currentStep == 3 && 'Step 3: Draw the trees'}
                {currentStep == 4 && 'Step 4: Review look & feel'}
                {currentStep == 5 && 'Step 5: Upload Documents'}
            </div>
            <div className="flex">
                <div style={{ width: '20%', margin: '0 auto', display: "flex", justifyContent: "center" }}>
                    <div className="cat-menu-holder" style={{ textAlign: 'left' }}>
                        <span className={currentStep == 1 ? 'selected' : undefined} onClick={() => { setCurrentStep(1) }}>
                            {campaignType == null && '1) Choose Contract'}
                            {campaignType != null && <div className="text-white text-sm">
                                <Check fontSize="medium" className="pb-1 text-white" /> {getSelectedCampaignTitle()}
                            </div>}
                        </span>
                        <span className={currentStep == 2 ? 'selected' : undefined} onClick={() => { creatorItemFunding != null && setCurrentStep(2) }}>
                            {creatorItemFunding == null && '2) Funding Amounts'}
                            {creatorItemFunding != null && <div className="text-white">
                                <Check fontSize="medium" className="pb-1 text-white" /> Funding Amounts
                            </div>}
                        </span>
                        <span className={currentStep == 3 ? 'selected' : undefined} onClick={() => { drawnMapData != null && setCurrentStep(3) }}>
                            {drawnMapData == null && '3) Draw Boundries'}
                            {drawnMapData != null && <div className="text-white">
                                <Check fontSize="medium" className="pb-1 text-white" /> Draw Boundries
                            </div>}
                        </span>
                        <span className={currentStep == 4 ? 'selected' : undefined} onClick={() => {  }}>
                            {currentStep < 5 && '4) Review Content'}
                            {currentStep == 5 &&  <div className="text-white">
                                <Check fontSize="medium" className="pb-1 text-white" /> Review Content
                            </div>}
                        </span>
                        <span className={currentStep == 5 ? 'selected' : undefined} onClick={() => { setCurrentStep(5) }}>
                            {currentStep < 6 && '5) Upload Documents'}
                            {currentStep == 6 &&  <div className="text-white">
                                <Check fontSize="medium" className="pb-1 text-white" /> Upload Documents
                            </div>}
                        </span>
                    </div>
                </div>
                <div className="" style={{ width: '80%' }}>
                    {currentStep == 1 && <CampaignOptionsContract selectOption={selectCampaignType} replacementText={""} selectedId={campaignType} sampleData={campaignTypes} />}
                    {currentStep == 2 && <Amounts setCurrentStep={setCurrentStep} handleSetPricingData={handleSetPricingData} setCampaignImage={setCampaignImage} campaignImage={campaignImageURL} creatorItemFunding={creatorItemFunding}  />}
                    {currentStep == 3 && <PolygonMap setDrawnMapData={handleSetDrawnMapData} setCurrentStep={setCurrentStep} />}
                    {currentStep == 4 &&
                        <CampaignPreview
                            setCurrentStep={setCurrentStep}
                            drawnMapData={drawnMapData}
                            creatorItemFunding={creatorItemFunding}
                            campaignImageURL={campaignImageURL? campaignImageURL.dataURL : ''}
                            contractName={getSelectedCampaignTitle()}
                            mode="BUILDER"
                        />}
                    {currentStep == 5 && 
                        <DocumentProof setCurrentStep={setCurrentStep} setPhotoIdImage={setPhotoIdImage} photoIdImage={photoIdImageURL} setMortgageImage={setMortgageImage} mortgageImage={mortgageImageURL}  />
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Builder;
