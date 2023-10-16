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

const sampleData = {
    "data": {
        "campaigns": [
            {
                "id": "1",
                "title": "1) Consider funding options",
                "descText": "Let's be honest, Crowd funding campaigns aren't always successful. We hope to partner with non-profits and government organizations to create funding pools.",
                "rewardText": "Our goal is to create seamless integration, where campaigns submitted to the platform will be automatic candidates for said funding pools.",
                "fee": "5%",
                "chain": "NEAR",
                "photo": "./droneOverTrees.jpeg"
            },
            {
                "id": "2",
                "title": "2) Build Campaign",
                "descText": "Our Campaign Builder lets you identify your funding goals, your property, and even define the boundries of your trees on a map. Using the feature you select, we can calculate the offset of your carbon footprint.",
                "rewardText": "Simply finish building your campaign, upload supporting documents and you'll be up for review.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./campaign3map.png"
            },
            {
                "id": "3",
                "title": "3) Await Review",
                "descText": "It is immportant to us that funds allocated go to the right spot. After you submit your campaign we will use a variety of tools to verify that the campaign is legitimate.",
                "rewardText": "If all goes to plan you will recieve a confirmation email that your campaign is active.",
                "fee": "2.5%",
                "chain": "NEAR & EVM",
                "photo": "./starburst.jpeg"
            }
        ]
    }
};

const CampaignStrategies = () => {
    const [selectedTab, setSelectedTab] = useState('all');
    const [menuOpen, setMenuOpen] = useState(false);


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
                    <img src="./works.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
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
                        </div>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default CampaignStrategies;
