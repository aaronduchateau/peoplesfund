import { useState } from "react";

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

//{
//    "id": "1",
//    "title": "NFT funding",
//    "descText": "Ex: Tom makes the most amazing cowboy boots. He knows exactly what it costs to make a pair and what his margin needs to be to make a profit. Tom chooses this option, and creates a tokenized NFT (50 units) at $200 each. His campaign is approved and is listed on our platform.",
//    "rewardText": "Details: Tom will use our campaign builder to create his campaign, which (behind the scenes) will leverage the Mintbase API to list his redeemable NFT's on Near.",
//    "fee": "5%",
//    "chain": "NEAR",
//    "photo": "./mintbase.webp"
//},

const sampleData = {
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

const FundingStrategies = () => {
   

    const scrollToPurchase = () => {
        const section = document.querySelector('#purchase-items');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

 

    return (
        <div className='w-full ml-6 items-center mt-4 mr-6'>
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
