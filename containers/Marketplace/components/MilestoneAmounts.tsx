import * as React from 'react';
import { useContext} from 'react';
import Box from '@mui/material/Box';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Check from '@mui/icons-material/Check';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ImageUpload from "./ImageUpload";
import OppositeContentTimeline from "./OppositeContentTimeline";
import { MilestoneFunding, MilestoneDetail, CreatorItemFunding, ProgressiveFunding } from '../utils/types';
import { Validate, ValidationGroup, useValidation, AutoDisabler } from 'mui-validate';


const MilestoneAmounts = ({indexId, item, save, remove, handleMilestoneDetailChange, milestoneDetailValues} : {indexId: number, item: MilestoneDetail, save: (id: number) => void, remove: (id: number) => void, handleMilestoneDetailChange: (event: React.ChangeEvent<HTMLInputElement>) => void, milestoneDetailValues: MilestoneDetail}) => {
      const dayJsObject = dayjs();
      const [dateValue, setDateValue] = React.useState<Dayjs | null>(
        dayJsObject,
      );
      const [values, setValues] = React.useState<MilestoneDetail>({
        title: '',
        description: '',
        amount: null,
        dateTrig: dayJsObject.toISOString(),
      });
    
      const handleDateChange = (newValue: Dayjs | null) => {
        setDateValue(newValue);
        setValues({
            ...values,
            dateTrig: newValue.toISOString(),
        });
      };
      console.log('f');
      console.log(milestoneDetailValues);
      
     

      //** start: funding methods */
      
      const handleMilestoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
      };

      //** end: funding methods */

  return (
        <ValidationGroup>
            <Stack spacing={3}>
                <TextField 
                    id="outlined-basic" 
                    label="Title of Milestone" 
                    variant="outlined" 
                    color="success"
                    onChange={handleMilestoneDetailChange}
                    name="title"
                    value={milestoneDetailValues.title}
                     />
                <TextField 
                    id="outlined-basic" 
                    multiline 
                    label="Description of Milestone" 
                    variant="outlined" 
                    color="success"
                    onChange={handleMilestoneDetailChange}
                    name="description"
                    value={milestoneDetailValues.description}/>
                <TextField 
                    id="outlined-basic" 
                    label="$ amount to raise" 
                    variant="outlined" 
                    color="success" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                    type="number"
                    onChange={handleMilestoneDetailChange}
                    name="amount"
                    value={milestoneDetailValues.amount}/>  
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="Date of Goal"
                        value={dateValue}
                        onChange={handleDateChange}
                        renderInput={(params: any) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <div className="grid justify-items-center ">
                    <div className="flex space-x-2">
                        <div className="text-center btn-green pt-2 pb-2 pl-8 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{ }}>
                            <AutoDisabler>
                            <div className="justify-between">
                                <Add fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                &nbsp;Add</span>
                            </div>
                            </AutoDisabler>
                        </div>
                        <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{remove(indexId)}}>
                            <div className="justify-between">
                                <Remove fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                &nbsp;Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Stack>
        </ValidationGroup>
  )
}

export default MilestoneAmounts;
