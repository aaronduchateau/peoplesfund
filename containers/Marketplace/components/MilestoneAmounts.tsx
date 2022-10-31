import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { MilestoneFunding, MilestoneDetail, CreatorItemFunding, ProgressiveFunding } from '../utils/types';
import { Validate, ValidationGroup, useValidation, AutoDisabler } from 'mui-validate';


const MilestoneAmounts = ({indexId, item, save, handleRemove, handleUpdate, handleMilestoneDetailChange, handleDateChange, milestoneDetailValues} : {indexId: number, item: MilestoneDetail, save: () => void, handleRemove: (id: number) => void, handleMilestoneDetailChange: (event: React.ChangeEvent<HTMLInputElement>) => void, handleDateChange: (e: Dayjs | null) => void, handleUpdate: ()=> void, milestoneDetailValues: MilestoneDetail}) => {
      const dayJsObject = dayjs();
      const [dateValue, setDateValue] = React.useState<Dayjs | null>(
        dayJsObject,
      );

      const [remountKey, setRemountKey] = React.useState(1);
    
      const onDateChange = (newValue: Dayjs | null) => {
        setDateValue(newValue);
        handleDateChange(newValue)
      };

  return (
        <ValidationGroup key={remountKey + 'x'}>
            <Stack spacing={3}>
                <Validate name="creator-1" required>
                    <TextField 
                        id="outlined-basic" 
                        label="Title of Milestone" 
                        variant="outlined" 
                        color="success"
                        onChange={handleMilestoneDetailChange}
                        name="title"
                        value={milestoneDetailValues.title}
                        defaultValue={milestoneDetailValues.title}
                        />
                </Validate>     
                <Validate name="creator-2" required>   
                    <TextField 
                        id="outlined-basic" 
                        multiline 
                        label="Description of Milestone" 
                        variant="outlined" 
                        color="success"
                        onChange={handleMilestoneDetailChange}
                        name="description"
                        value={milestoneDetailValues.description}
                        defaultValue={milestoneDetailValues.description}/>
                </Validate>
                <Validate name="creator-3" regex={/^\d{0,5}$/} required>
                    <TextField 
                        id="outlined-basic" 
                        label="$ amount to raise" 
                        variant="outlined" 
                        color="success" 
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                        type="number"
                        onChange={handleMilestoneDetailChange}
                        name="amount"
                        value={milestoneDetailValues.amount}
                        defaultValue={milestoneDetailValues.amount}/>  
                </Validate>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Date of Goal"
                        value={milestoneDetailValues.dateTrig}
                        onChange={onDateChange}
                        renderInput={(params: any) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <div className="grid justify-items-center ">
                    <div className="flex space-x-2">
                        {indexId == null && 
                            <AutoDisabler>
                                <div className="text-center btn-green pt-2 pb-2 pl-8 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={(e)=>{save();setRemountKey(remountKey + 1);}}>
                                    <div className="justify-between">
                                        <Add fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                        &nbsp;Add</span>
                                    </div>
                                </div>
                            </AutoDisabler>
                        }
                        {indexId != null && 
                            <AutoDisabler>
                                <div className="text-center btn-green pt-2 pb-2 pl-8 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{handleUpdate()}}>
                                    <div className="justify-between" >
                                        <Add fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                        &nbsp;Edit</span>
                                    </div>
                                </div>
                            </AutoDisabler>
                        }
                        {indexId != null && <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{handleRemove(indexId)}}>
                            <div className="justify-between">
                                <Remove fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                &nbsp;Remove</span>
                            </div>
                        </div>}
                    </div>
                </div>
            </Stack>
        </ValidationGroup>
  )
}

export default MilestoneAmounts;
