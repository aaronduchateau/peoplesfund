import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Check from '@mui/icons-material/Check';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ImageUpload from "./ImageUpload";
import OppositeContentTimeline from "./OppositeContentTimeline";
import MilestoneAmounts from "./MilestoneAmounts";
import { MilestoneFunding, MilestoneDetail, CreatorItemFunding, ProgressiveFunding } from '../utils/types';
import { Validate, ValidationGroup, useValidation, AutoDisabler } from 'mui-validate';
import area from '@turf/area';
import moment from 'moment';
import { Divider } from '@mui/material';


const CampaignPreview = ({typeId, setCurrentStep, fundingType, drawnMapData, creatorItemFunding, campaignImageURL} : {typeId: number, setCurrentStep: (id: number) => void, fundingType: any, drawnMapData: any, creatorItemFunding: any, campaignImageURL: any}) => {
   
      console.log('drawnMapData');  
      console.log(drawnMapData.location);
      const dayJsObject = dayjs();
      const [dateValue, setDateValue] = React.useState<Dayjs | null>(
        dayJsObject,
      );
      const [editModeIndex, setEditModeIndex] = React.useState(null);

      

      const [creatorValues, setCreatorValues] = React.useState<CreatorItemFunding>({
        title: '',
        description: '',
        category: null,
        fundingType: null,
        totalAmount: null,
        startDate: dayJsObject.toISOString(),
        numberOfItems: null,
        imageUrl: '',
        walletAddress: ''
      });

      const [progressiveValues, setProgressiveValues] = React.useState<ProgressiveFunding>({
        title: '',
        description: '',
        category: null,
        fundingType: null,
        totalAmount: null,
        startDate: dayJsObject.toISOString(),
        imageUrl: '',
        walletAddress: ''
      });

      const [milestoneValues, setMilestoneValues] = React.useState<MilestoneFunding>({
        title: '',
        description: '',
        category: null,
        fundingType: null,
        startDate: dayJsObject.toISOString(),
        totalAmount: null,
        milestoneDetails: [],
        imageUrl: '',
        walletAddress: ''
      });
    
      const handleDateChange = (newValue: Dayjs | null) => {
        setDateValue(newValue);
        if(typeId == 1){
            setCreatorValues({
                ...creatorValues,
                startDate: newValue.toISOString(),
            });
        }
        if(typeId == 2){
            setProgressiveValues({
                ...progressiveValues,
                startDate: newValue.toISOString(),
            });
        }
        if(typeId == 3){
            setMilestoneDetailValues({
                ...milestoneDetailValues,
                dateTrig: newValue.toISOString(),
            });
        }
      };
      
      //** start: creator funding methods */
      
      const handleCreatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreatorValues({
          ...creatorValues,
          [event.target.name]: event.target.value,
        });
      };

      const handleCreatorImageUrl = (url: string) => {
        setCreatorValues({
          ...creatorValues,
          imageUrl: url
        });
      };


      console.log(creatorValues);

      //** end: creator funding methods */

      //** start: progressive funding methods */
      
      const handleProgressiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProgressiveValues({
            ...progressiveValues,
            [event.target.name]: event.target.value,
        });
      };

      //** end: progressive funding methods */


      const [milestoneDetailValues, setMilestoneDetailValues] = React.useState<MilestoneDetail>({
        title: '',
        description: '',
        amount: '',
        dateTrig: dayJsObject.toISOString(),
      });

      const resetMilestoneDetailValues = () => {
        setMilestoneDetailValues({title: '', description: '', amount: '', dateTrig: dayJsObject.toISOString()});
      }

      const handleSaveMilestone = () => {
        let clonedArray = milestoneValues.milestoneDetails.map(a => {return {...a}});
        clonedArray.push(milestoneDetailValues);
        let clonedArraySorted = sortArrayByDate(clonedArray);

        setMilestoneValues({
            ...milestoneValues,
            milestoneDetails: clonedArraySorted,
        });
        resetMilestoneDetailValues();

      }

      const sortArrayByDate = (dateArr: MilestoneDetail[] )=>{
        dateArr.sort(function(a, b) {
            return (a.dateTrig < b.dateTrig) ? -1 : ((a.dateTrig > b.dateTrig) ? 1 : 0);
        });
        return dateArr;
      }

      const handleMilestoneUpdate = () => {
        let clonedArray = milestoneValues.milestoneDetails.map(a => {return {...a}});
        clonedArray[editModeIndex] = milestoneDetailValues;
        let clonedArraySorted = sortArrayByDate(clonedArray);

        setMilestoneValues({
            ...milestoneValues,
            milestoneDetails: clonedArraySorted,
        });
        setEditModeIndex(null);
        resetMilestoneDetailValues();
      }
      

      const handleRemoveMilestone = (index: number)=> {
        let clonedArray = milestoneValues.milestoneDetails.map(a => {return {...a}});
        clonedArray.splice(index, 1);

        setMilestoneValues({
            ...milestoneValues,
            milestoneDetails: clonedArray,
        });
        setEditModeIndex(null);
        resetMilestoneDetailValues();

      }

      const handleEnterEditMode = (index: number)=> {
        setEditModeIndex(index);
        setMilestoneDetailValues(milestoneValues.milestoneDetails[index]);
      };

      const handleMilestoneDetailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMilestoneDetailValues({
            ...milestoneDetailValues,
            [event.target.name]: event.target.value,
        });
      };

      const calculateAreaOfProperty = (features: any) => {
        let polygons = Object.values(features);
        let polygonArea = area(polygons[0]);
       
        return Math.round(Math.round(polygonArea * 100) / 100);
      }

      const calculateAreaOfTrees = (features: any) => {
        let polygons = Object.values(features);
        polygons.shift();
        let polygonArea = 0;
        for (const polygon of polygons) {
            polygonArea += area(polygon);
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
  return (
    <div className="form-container">
        {typeId == 1 && 
            <ValidationGroup>
                <Stack spacing={3}>
                <h1 style={{textAlign: 'left', display: 'inline', borderRadius: "16px", backgroundColor: "#040d13", padding: "16px"}}><span style={{borderRadius: "16px", backgroundColor: "#2ba95c", padding: "8px"}}>${creatorItemFunding.totalAmount}</span>&nbsp;&nbsp;&nbsp;<span>{creatorItemFunding.title}</span></h1>    
                    <div className="grid justify-items-center ">
                        <div className="grid grid-cols-2 gap-4">
                            <div style={{borderRadius: "16px", backgroundColor: "#040d13", padding: "16px"}}>
                            <h1 style={{color: '#f8f7f7 ', textAlign:'center'}}>Campaign Saves <span style={{color: '#2ba95c'}}>{calculateTonsOfCarbon(drawnMapData.features)}</span> <span style={{fontSize: '14px'}}>(Tons Carbon/yr)</span></h1>
<Divider />
<span style={{fontSize: '14px'}}>{drawnMapData.location?.result?.place_name}</span>
<div style={{padding: '16px'}}>
                            <div className="grid justify-items-left">
                               
                        <div className="grid grid-cols-2 gap-8">
                                <div>
                                <h2 style={{textAlign: 'left', fontSize: '14px',  color: '#7c8187'}}>Start Date:</h2>
                                <h1 style={{color: '#f8f7f7 ', textAlign:'left'}}>{moment(creatorItemFunding.startDate).format('MM.DD.YYYY')}</h1>
                                </div>
                                <div>
                                <h2 style={{textAlign: 'left', fontSize: '14px',  color: '#7c8187'}}>Property:</h2>
                                <h1 style={{color: '#f8f7f7 ', textAlign:'left'}}>{calculateAreaOfProperty(drawnMapData.features)} <span style={{fontSize: '14px'}}>(Sq M)</span></h1>
                                </div>
                                </div>
                                </div>


                                <div className="grid justify-items-left ">
                        <div className="grid grid-cols-2 gap-8">
                        <div>
                                <h2 style={{textAlign: 'left', fontSize: '14px',  color: '#7c8187'}}>Trees:</h2>
                                <h1 style={{color: '#f8f7f7 ', textAlign:'left'}}>{calculateAreaOfTrees(drawnMapData.features)} <span style={{fontSize: '14px'}}>(Sq M)</span></h1>
                                </div>
                                <div>
                                <h2 style={{textAlign: 'left', fontSize: '14px',  color: '#7c8187'}}>Tree Density:</h2>
                                <h1 style={{color: '#f8f7f7 ', textAlign:'left'}}>{calculateTreeDensity(drawnMapData.features)}<span style={{fontSize: '14px'}}>%</span></h1>
                                </div>
                                </div>
                                </div>                                
                            </div>
                            </div>


                            <img src={campaignImageURL} style={{objectFit: 'cover', width: '100%', height: '100%'}} />

                        </div>
                        
                    </div>
                    <div className="grid justify-items-center ">
                        <div className="grid grid-cols-2 gap-4">
                            <img src={drawnMapData.imageUrlEncoded} style={{objectFit: 'cover', width: '100%', height: '100%'}} />

                            <div><h2 style={{textAlign: 'left', fontSize: '14px', color: '#f8f7f7'}}>{creatorItemFunding.description}</h2></div>
                        </div>
                    </div>
                    <h2>Creator Item Funding:</h2> 
                    <h2>How much will each item cost?</h2>    
                        <Validate name="creator-1" regex={/^\d{0,5}$/} required>
                            <TextField 
                                id="outlined-basic" 
                                label="$ amount to raise" 
                                variant="outlined" color="success" 
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                                type="number"
                                onChange={handleCreatorChange}
                                name="totalAmount"
                                />
                        </Validate>
                    <h2>How many items will you make?</h2>  
                        <Validate name="creator-2" regex={/^\d{0,2}$/} required>
                            <TextField 
                                id="outlined-basic" 
                                label="# of items" 
                                variant="outlined" 
                                color="success" 
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                                type="number"
                                onChange={handleCreatorChange}
                                name="numberOfItems"
                                />
                        </Validate>
                    <h2>When will the campaign go live?</h2>   
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Date&Time picker"
                            value={dateValue}
                            onChange={handleDateChange}
                            renderInput={(params: any) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                   
                
                    <div className="grid justify-items-center ">
                        <div className="flex space-x-2">
                            <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(2)}}>
                                <div className="justify-between">
                                    <ArrowBack fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                    &nbsp;Go Back</span>
                                </div>
                            </div>
                            <AutoDisabler>
                                <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(4)}}>
                                    <div className="justify-between">
                                        <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                        &nbsp;Continue</span>
                                    </div>
                                </div>
                            </AutoDisabler>
                        </div>
                    </div>
                </Stack>
            </ValidationGroup>
        }
        {typeId == 2 && 
             <ValidationGroup>
                <Stack spacing={3}>
                    <h2>Progressive Funding:</h2> 
                    <h2>How much do you need to raise?</h2>    
                        <Validate name="prog-1" regex={/^\d{0,5}$/} required>
                            <TextField 
                                id="outlined-basic" 
                                label="$ amount to raise" 
                                variant="outlined" color="success" 
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                                type="number"
                                onChange={handleProgressiveChange}
                                name="totalAmount"
                                />
                        </Validate>
                    <h2>When will the campaign go live?</h2>   
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Date&Time picker"
                            value={dateValue}
                            onChange={handleDateChange}
                            renderInput={(params: any) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <h2>Want to add a picture?</h2>    
                    <ImageUpload />
                    <div className="grid justify-items-center ">
                        <div className="flex space-x-2">
                            <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(2)}}>
                                <div className="justify-between">
                                    <ArrowBack fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                    &nbsp;Go Back</span>
                                </div>
                            </div>
                            <AutoDisabler>
                                <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(4)}}>
                                    <div className="justify-between">
                                        <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                        &nbsp;Continue</span>
                                    </div>
                                </div>
                            </AutoDisabler>
                        </div>
                    </div>
                </Stack>
            </ValidationGroup>
        }
        {typeId == 3 && 
            <div className="">
                <Stack spacing={3}>
                    <div className="grid justify-items-center">
                        <h2>Milestone Funding:</h2> 
                    </div>
                    <div className="flex">
                        <div style={{width: '35%'}}>
                            <OppositeContentTimeline 
                                timelineData={milestoneValues.milestoneDetails}
                                onEnterEditMode={handleEnterEditMode}
                                indexId={editModeIndex}/>
                        </div>
                        <div className="" style={{width: '65%'}}>    
                            <MilestoneAmounts 
                                indexId={editModeIndex} 
                                item={milestoneValues} 
                                save={handleSaveMilestone}
                                handleRemove={handleRemoveMilestone}
                                handleMilestoneDetailChange={handleMilestoneDetailChange}
                                handleDateChange={handleDateChange}
                                handleUpdate={handleMilestoneUpdate}
                                milestoneDetailValues={milestoneDetailValues}
                            />
                        </div>
                    </div>
                    <hr />
                    <h2>Want to add a picture?</h2>    
                    <ImageUpload />
                    <div className="grid justify-items-center ">
                        <div className="flex space-x-2">
                            <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(2)}}>
                                <div className="justify-between">
                                    <ArrowBack fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                    &nbsp;Go Back</span>
                                </div>
                            </div>
                                <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(4)}}>
                                    <div className="justify-between">
                                        <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                        &nbsp;Continue</span>
                                    </div>
                                </div>
                        </div>
                    </div>
                </Stack>
            </div>
        }
  </div>
  )
}

export default CampaignPreview;
