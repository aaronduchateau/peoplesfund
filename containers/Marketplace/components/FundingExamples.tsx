import { useState } from "react";
import { MbButton } from "mintbase-ui";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


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
                "rewardText": "Take some time to explain how specific people(s) or person(s) will individually be impacted by your campaign. Whether your deliverable is a physical good or a simple ‘thank you’, be committed to an ongoing relationship with those who are generous enough to fund your goals.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            }
        ]
    }
};

const FundingExamples = () => {
   
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
                    <img src="./create.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <div className="text-white">3) explain the problem and solution</div>
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
                           
                     
                        </div>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default FundingExamples;
