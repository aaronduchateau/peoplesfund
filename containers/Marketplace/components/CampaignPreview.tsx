import * as React from 'react';
import Stack from '@mui/material/Stack';
import Check from '@mui/icons-material/Check';
import area from '@turf/area';
import moment from 'moment';
import { Divider, LinearProgress, linearProgressClasses } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';


const CampaignPreview = ({ setCurrentStep, drawnMapData, creatorItemFunding, campaignImageURL, contractName, mode, raisedAmount = '0' }: { setCurrentStep: (id: number) => void, drawnMapData: any, creatorItemFunding: any, campaignImageURL: any, contractName: string, mode: string, raisedAmount?: string }) => {
    const [imageHeight, setImageHeight] = React.useState<number>(200);

    const calculateAreaOfProperty = (features: any) => {
        let polygons : any = Object.values(features);
        let polygonArea = area(polygons[0]);

        return Math.round(Math.round(polygonArea * 100) / 100);
    }

    const calculateAreaOfTrees = (features: any) => {
        let polygons = Object.values(features);
        polygons.shift();
        let polygonArea = 0;
        for (const polygon of polygons) {
            polygonArea += area(polygon as any);
        }
        return Math.round(Math.round(polygonArea * 100) / 100);
    }

    const calculateTreeDensity = (features: any) => {
        const property = calculateAreaOfProperty(features);
        const trees = calculateAreaOfTrees(features);
        const treePercentage = Math.round((trees / property) * 100);
        return treePercentage;
    }
    const calculateTonsOfCarbon = (features: any) => {
        const trees = calculateAreaOfTrees(features);
        const carbonInTons = Math.round((trees / 4047) * 20);
        return carbonInTons;
    }

    const onImgLoad = (image: any) => {
        setImageHeight(image.target.offsetHeight);
    }

    const calculateCarbonOverYears = () => {
        let matches: any = contractName.match(/(\d+)/);
        return (calculateTonsOfCarbon(drawnMapData.features) * matches[0]);
    }
    const isLightbox: boolean = (mode === 'LIGHTBOX');
    const formStyle = isLightbox ? { marginTop: '-20px', padding: '0px', margin: '0px' } : {};

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 16,
        borderRadius: 0,
        [`&.${linearProgressClasses.colorSecondary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 6,
            backgroundColor: theme.palette.mode === 'light' ? '#02a95c' : '#02a95c',
        },
    }));
    return (
        <div className="form-container" style={formStyle}>
            <Stack spacing={0}>
                <h1 style={{ textAlign: 'left', display: 'inline', borderTopLeftRadius: "16px", borderTopRightRadius: "16px", backgroundColor: "#040d13", padding: "32px", marginTop: '16px' }}><span style={{ borderRadius: "16px", backgroundColor: "#2ba95c", padding: "8px" }}>${creatorItemFunding.totalAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>&nbsp;&nbsp;&nbsp;<span>{creatorItemFunding.title}</span></h1>
                <BorderLinearProgress variant="determinate" value={parseInt(raisedAmount) / parseInt(creatorItemFunding.totalAmount) * 100} color="success" />

                <div className="grid justify-items-center ">
                    <div className="grid grid-cols-2 gap-0">
                        <div style={{ backgroundColor: "#040d13", padding: "16px" }}>
                            <h1 style={{ color: '#f8f7f7 ', textAlign: 'center' }}>Campaign Saves <span style={{ color: '#2ba95c' }}>{calculateTonsOfCarbon(drawnMapData.features)}</span> <span style={{ fontSize: '14px' }}>(Tons Carbon/yr)</span></h1>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                            <span style={{ fontSize: '14px' }}>{drawnMapData.location?.result?.place_name}</span>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                            <div style={{ padding: '16px' }}>
                                <div className="grid justify-items-left">

                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <h2 style={{ textAlign: 'left', fontSize: '14px', color: '#7c8187' }}>Start Date:</h2>
                                            <h1 style={{ color: '#f8f7f7 ', textAlign: 'left' }}>{moment(creatorItemFunding.startDate).format('MM.DD.YYYY')}</h1>
                                        </div>
                                        <div >
                                            <h2 style={{ textAlign: 'left', fontSize: '14px', color: '#7c8187' }}>Property:</h2>
                                            <h1 style={{ color: '#f8f7f7 ', textAlign: 'left' }}>{calculateAreaOfProperty(drawnMapData.features)} <span style={{ fontSize: '14px' }}>(Sq M)</span></h1>
                                        </div>
                                    </div>
                                </div>


                                <div className="grid justify-items-left mt-2">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <h2 style={{ textAlign: 'left', fontSize: '14px', color: '#7c8187' }}>Trees:</h2>
                                            <h1 style={{ color: '#f8f7f7 ', textAlign: 'left' }}>{calculateAreaOfTrees(drawnMapData.features)} <span style={{ fontSize: '14px' }}>(Sq M)</span></h1>
                                        </div>
                                        <div >
                                            <h2 style={{ textAlign: 'left', fontSize: '14px', color: '#7c8187' }}>Tree Density:</h2>
                                            <h1 style={{ color: '#f8f7f7 ', textAlign: 'left' }}>{calculateTreeDensity(drawnMapData.features)}<span style={{ fontSize: '14px' }}>%</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <img src={campaignImageURL} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />

                    </div>

                </div>
                <div className="grid justify-items-center" style={{ marginTop: '0px' }}>
                    <div className="grid grid-cols-2 gap-0">
                        <img src={drawnMapData.imageUrlEncoded} style={{ objectFit: 'cover', width: '100%', height: '100%' }} onLoad={onImgLoad} />
                        <div style={{ height: '100%', minHeight: '100%' }}>
                            <div style={{ backgroundColor: "#040d13", padding: "16px", height: imageHeight, minHeight: imageHeight }}><br />
                                <div style={{ textAlign: 'center', minWidth: '100%', marginTop: '-20px' }}>
                                    <img src="https://picsum.photos/id/777/70/70" style={{ borderRadius: '50%', margin: '0 auto' }} />
                                    <Divider sx={{ mt: 2, mb: 0 }} />
                                </div><br />
                                <span style={{ fontSize: '14px' }}>"{creatorItemFunding.description}"</span><br /><br />
                                <span style={{ fontSize: '14px', color: '#2ba95c', cursor: 'pointer', textDecoration: 'underline', }}>View User Profile</span><br /><br />
                            </div>
                        </div>
                    </div>

                    <div className="grid justify-items-center" style={{ marginTop: '0px' }}>
                        <div className="grid grid-cols-2 gap-0">
                            <div style={{ borderBottomLeftRadius: "16px", backgroundColor: "#040d13", padding: "16px", paddingTop: '32px', paddingBottom: '32px' }}>
                                <h1 style={{ color: '#f8f7f7 ', textAlign: 'center' }}>Some Details to Consider</h1>
                                <Divider sx={{ mb: 1 }} />
                                <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#f8f7f7' }}>
                                    <Check fontSize="medium" className="pb-1 text-green" />ID Verified
                                </h1>
                                <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#f8f7f7' }}>
                                    <Check fontSize="medium" className="pb-1 text-green" />Property Owner Verified
                                </h1>
                                <h1 style={{ textAlign: 'center', fontSize: '20px', color: '#f8f7f7' }}>
                                    <Check fontSize="medium" className="pb-1 text-green" />Community / Non-profit Endorsement
                                </h1>
                                <Divider sx={{ mb: 1, mt: 1 }} />
                                <h2 style={{ textAlign: 'left', fontSize: '14px', color: '#f8f7f7' }}>
                                    Tree’s strengthen our feeling of community, combat ‘asphalt zones’, connect us to history, and reconnect us to nature in all areas which have been influenced by the industrialization of our shared spaces. Donate Today!
                                </h2>
                            </div>

                            <div style={{ borderBottomRightRadius: "16px", backgroundColor: "#040d13", padding: "16px", paddingTop: '32px', paddingBottom: '32px' }}>
                                <h1 style={{ color: '#f8f7f7 ', textAlign: 'center' }}>Why these trees Matter</h1>
                                <Divider sx={{ mb: 1 }} />

                                <h2 style={{ textAlign: 'left', fontSize: '14px', color: '#f8f7f7' }}>
                                    By sponsoring this campaign, the land owner makes a promise to you that they will to not cut down their trees during a <span style={{ color: '#2ba95c' }}>{contractName}</span>.
                                    <br /><br />With millions of dollars pouring into technologic inovation to fight climate change efforts worldwide,
                                    trees ARE STILL the most efficient mechanism we have to store carbon and fight climate change.
                                    <br /><br />With an estimated savings of  <span style={{ color: '#2ba95c' }}>{calculateTonsOfCarbon(drawnMapData.features)} (Tons Carbon/yr)</span>, it is estimated that preserving these trees for the tenure of this contract will result in <span style={{ color: '#2ba95c' }}>{calculateCarbonOverYears()} tons of Carbon stored.</span>
                                </h2></div>
                        </div>
                    </div>
                </div>
                <div className='w-full ml-6 items-center mt-4 mr-6'>
                    <div>
                        <div style={{ textAlign: 'center', width: '100%' }} className="my-6">
                            <img src="./ready.png" style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto' }} />
                            <div className="text-white mx-auto" style={{ width: '400px' }}>Are you ready to contribute to the future of clean air?
                                <h1 style={{ color: '#f8f7f7 ', textAlign: 'center', backgroundColor: "#040d13", borderRadius: '16px', marginTop: '16px', marginBottom: '16px', padding: '16px' }}>
                                    ${raisedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} of ${creatorItemFunding.totalAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                </h1>
                                Make a contribution to this campaign today and you can reduce your carbon footprint the way god intended, with trees.<br /><br />

                                {mode !== "BUILDER" && <div className="text-center btn-green pt-2 pb-2 pl-12 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow mx-auto" style={{ width: '300px' }}>
                                    <div className="justify-between pl-6">
                                        <ArrowUpwardIcon fontSize="medium" className="pb-1 text-white" />
                                        <span className="text-white text-lg">
                                            &nbsp;Donate Now
                                        </span>
                                    </div>
                                </div>}

                                {mode === "BUILDER" && <div className="grid justify-items-center ">
                                    <div className="flex space-x-2">
                                        <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={() => { setCurrentStep(3) }}>
                                            <div className="justify-between">
                                                <ArrowBack fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                                    &nbsp;Go Back</span>
                                            </div>
                                        </div>
                                        <button className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={() => { setCurrentStep(5) }} disabled={false}>
                                            <div className="justify-between">
                                                <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                                    &nbsp;Continue</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>}


                                <br /><br />
                            </div>
                        </div>
                    </div>
                </div>

            </Stack>
        </div>
    )
}

export default CampaignPreview;
