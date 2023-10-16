import { useState } from "react";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Link from "next/link";

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

const FinalStart = () => {

    return (
        <div className='w-full ml-6 items-center mt-4 mr-6'>
            <div>
                <div style={{ textAlign: 'center', width: '100%' }} className="my-6">
                    <img src="./ready.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
                    <div className="text-white mx-auto" style={{ width: '400px'}}>Do you have trees that are in jeapordy of being cut down if funding isn't secured?<br/><br/>Our campaing builder makes it easy to identify your tree's and calculate the Carbon offset of the trees you own.<br/><br/>
                    <Link href="./builder">
                        <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow mx-auto" style={{width: '300px'}}>
                            <div className="justify-between">
                                <ArrowUpwardIcon fontSize="medium" className="pb-1 text-white" />
                                <span className="text-white text-lg">
                                    &nbsp;Start My Funding Campaign
                                </span>
                            </div>
                        </div>
                    </Link>
                    <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FinalStart;
