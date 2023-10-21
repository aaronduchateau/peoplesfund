import { useState } from "react";
import Check from '@mui/icons-material/Check';
import { AnyKindOfDictionary } from "lodash";
import { Box, Slider, Stack } from "@mui/material";

const marks = [
    {
      value: 1,
      label: '5',
    },
    {
      value: 2,
      label: '10',
    },
    {
      value: 3,
      label: '20',
    },
    {
      value: 4,
      label: '30',
    },
    {
        value: 5,
        label: '40',
      },
      {
        value: 6,
        label: '50',
      },
  ];




const CampaignOptionsContract = ({ selectOption, selectedId, sampleData, replacementText }: { selectOption: (id: string) => void, selectedId: number, sampleData: AnyKindOfDictionary, replacementText: string}, ) => {
    const [value, setValue] = useState<number>(selectedId? selectedId -1 : 0);

      const valuetext = (value: number)=> {
        return `${value} Yrs`;
      }
      const handleChange = (event: Event, newValue: number | number[]) => {
        if(typeof value === 'number'){
            setValue(newValue as number -1);
        }
      };

    return (
        <div className="form-container">
           
                    <Stack spacing={3} sx={{textAlign: 'center'}} >
                        <div className="grid justify-items-center ">
                            <Box sx={{minHeight: '85px', width: '370px', pt: 1.5, borderRadius: '16px', margin: '0 auto', mt: 2}} className="bg-fmug">
                                <h1 style={{fontSize: '38px'}}>{marks[value].label} Year Contract</h1>
                            </Box>
                        </div>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={selectedId ? selectedId : 0}
                            getAriaValueText={valuetext}
                            step={1}
                            marks={marks}
                            onChange={handleChange}
                            min={1}
                            max={6}
                            />   
                           
                        <p>Choose one option if you own land and are willing to commit to the above stated tenure of tree preservation. By choosing one option you are seeking sponsorship and you agree to maintain forest & timber on your property for the above stated length of time. In the next steps we will help identify your property on a map, which people can view and select for sponsorship!</p>    
 
                      
                        <div className="grid justify-items-center ">
                            <div className="flex space-x-2">
                                    <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{selectOption((value + 1).toString())}}>
                                        <div className="justify-between">
                                            <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                            &nbsp;Continue</span>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>
                    </Stack>
      </div>
      );
}

export default CampaignOptionsContract;
