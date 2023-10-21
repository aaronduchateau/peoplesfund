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
import { MilestoneFunding, MilestoneDetail, CreatorItemFunding, ProgressiveFunding } from '../utils/types';
import { Validate, ValidationGroup, useValidation, AutoDisabler } from 'mui-validate';


const Amounts = ({setCurrentStep, handleSetPricingData, setCampaignImage, campaignImage, creatorItemFunding} : { setCurrentStep: (id: number) => void, handleSetPricingData: (data: CreatorItemFunding) => void, setCampaignImage: (campaignImage: any) => void, campaignImage: any, creatorItemFunding: any} ) => {
      const dayJsObject = dayjs();
      const [dateValue, setDateValue] = React.useState<Dayjs | null>(
        dayJsObject,
      );
      const [editModeIndex, setEditModeIndex] = React.useState(null);

      React.useEffect(() => {
        const section = document.querySelector('#section-title-builder');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, []);

      const [creatorValues, setCreatorValues] = React.useState<CreatorItemFunding>(creatorItemFunding ? creatorItemFunding : {
        title: '',
        description: '',
        category: null,
        fundingType: null,
        totalAmount: '1234567',
        startDate: dayJsObject.toISOString(),
        numberOfItems: null,
        imageUrl: '',
      });

      const [progressiveValues, setProgressiveValues] = React.useState<ProgressiveFunding>({
        title: '',
        description: '',
        category: null,
        fundingType: null,
        totalAmount: null,
        startDate: dayJsObject.toISOString(),
        imageUrl: '',
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
      });
    
      const handleDateChange = (newValue: Dayjs | null) => {
        setDateValue(newValue);
     
            setCreatorValues({
                ...creatorValues,
                startDate: newValue.toISOString(),
            });
      };
      
      //** start: creator funding methods */
      
      const handleCreatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreatorValues({
          ...creatorValues,
          [event.target.name]: event.target.value,
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
  return (
    <div className="form-container">
       
            <ValidationGroup initialValidation={'silent'}>
                <Stack spacing={3}>
                    <ImageUpload setImage={setCampaignImage} image={campaignImage}/>
                    <br />
                    <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Give your campaign a title</h2>    
                        <Validate name="creator-111" required>
                            <TextField 
                                id="outlined-basic" 
                                label="Ex: Historic trees in local nieghborhood in jeapordy " 
                                value={creatorValues.title}
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                                type="text"
                                onChange={handleCreatorChange}
                                name="title"
                                sx={{mt: -.3, mb: 2}}
                                />
                        </Validate>
                    <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Give your Campaign a funding Goal</h2>    
                        <Validate name="creator-222" regex={/^\d{0,9}$/} required initialValidation='silent'>
                            <TextField 
                                id="outlined-basic" 
                                label="Ex: $888,888" 
                                variant="outlined"
                                value={creatorValues.totalAmount}
                                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                                type="number"
                                onChange={handleCreatorChange}
                                name="totalAmount"
                                sx={{mt: -.3, mb: 2}}
                                />
                        </Validate>
                    <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Describe why your trees matter</h2>  
                        <Validate name="creator-333" required>
                            <TextField 
                                id="outlined-basic" 
                                label="Campaign Description" 
                                variant="outlined" 
                                value={creatorValues.description}
                                type="text"
                                onChange={handleCreatorChange}
                                name="description"
                                rows={4}
                                multiline
                                sx={{mt: -.8, mb: 2}}
                                />
                        </Validate>
                    <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Pick a campaign start date</h2>   
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Date&Time picker"
                            value={creatorValues.startDate || dateValue}
                            onChange={handleDateChange}
                            renderInput={(params: any) => <TextField {...params}
                            sx={{mt: -.8, mb: 2}} />}
                        />
                    </LocalizationProvider>
                    <div className="grid justify-items-center ">
                        <div className="flex space-x-2">
                            <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(1)}}>
                                <div className="justify-between">
                                    <ArrowBack fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                    &nbsp;Go Back</span>
                                </div>
                            </div>
                            <AutoDisabler>
                                <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{handleSetPricingData(creatorValues);setCurrentStep(3)}}>
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
  </div>
  )
}

export default Amounts;
