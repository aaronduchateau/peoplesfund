import { useState } from "react";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Check from '@mui/icons-material/Check';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { AnyKindOfDictionary } from "lodash";

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



const CampaignOptions = ({ selectOption, selectedId, sampleData, replacementText }: { selectOption: (id: number) => void, selectedId: number, sampleData: AnyKindOfDictionary, replacementText: string}, ) => {
  
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 my-12">
                    
                    {// @ts-ignore
                    sampleData.data.campaigns.map(function (object, i) {
                        const styleFormatted = 'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("' + object.photo + '")';
                        return <div className="bg-slate-100 rounded-xl shadow-lg relative overflow-hidden btn-shadow" key={i + 'campaignStrats'}>
                            <div className="hero-image-item rnd-shadow" style={{ 'backgroundImage': styleFormatted }}>
                                <div className="p-4">
                                    <div className="text-xl text-white mt-1 font-bold">{object.title}</div>
                                    <div className="text-sm text-white mt-2">{object.descText.replace("x123c", replacementText)}<br /><br />{object.rewardText}</div>
                                </div>
                            </div>
                            <div className="flex items-center mt-3 justify-between p-4">
                                <div className="text-center btn-green-border-sm pt-2 pb-2 pl-2 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow">
                                <div className="justify-between">
                                    <SignalCellularAltIcon fontSize="medium" className="pb-1 text-green" />
                                    <span className="text-green text-lg">
                                    &nbsp;Ex:</span>
                                </div>
                                </div>
                                <div className="text-center btn-green pt-2 pb-2 pl-7 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{selectOption(object.id) }}>
                                    <div className="justify-between">
                                        <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                        &nbsp;Choose</span>
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

export default CampaignOptions;
