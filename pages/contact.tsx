import Check from '@mui/icons-material/Check';



import HeaderSecondaryContainer from "../containers/Marketplace/components/HeaderSecondaryContainer";
import Footer from "../containers/Marketplace/components/Footer";
import { AutoDisabler, Validate, ValidationGroup } from 'mui-validate';
import { Stack, TextField } from '@mui/material';
import { CreatorItemFunding } from '../containers/Marketplace/utils/types';
import React from 'react';



const contact = () => {
    const handleCreatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreatorValues({
          ...creatorValues,
          [event.target.name]: event.target.value,
        });
      };

    const [creatorValues, setCreatorValues] = React.useState<CreatorItemFunding>( {
        title: '',
        description: '',
        category: null,
        fundingType: null,
        totalAmount: 1234567,
        numberOfItems: null,
        imageUrl: '',
      });


    return (
        <div className="flex flex-1 flex-col min-h-screen text-gray-500  bg-fmug">
        <HeaderSecondaryContainer termsUrl='pitch.png' />
        <div className="form-container">
                <h1>Contact Us: (not functional)</h1>
                <ValidationGroup initialValidation={'silent'}>
                    <Stack spacing={3}>
                     
                        <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Return Email</h2>    
                            <Validate name="creator-111" required>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Return Email" 
                                    value={creatorValues.title}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                                    type="text"
                                    onChange={handleCreatorChange}
                                    name="title"
                                    sx={{mt: -.3, mb: 2}}
                                    />
                            </Validate>
                        <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Subject</h2>    
                            <Validate name="creator-222" regex={/^\d{0,9}$/} required initialValidation='silent'>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Subject" 
                                    variant="outlined"
                                    value={creatorValues.totalAmount}
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  
                                    type="number"
                                    onChange={handleCreatorChange}
                                    name="totalAmount"
                                    sx={{mt: -.3, mb: 2}}
                                    />
                            </Validate>
                        <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Message</h2>  
                            <Validate name="creator-333" required>
                                <TextField 
                                    id="outlined-basic" 
                                    label="Message" 
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
                        <div className="grid justify-items-center ">
                            <div className="flex space-x-2">
                                    <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" style={{width: '200px'}} onClick={()=>{alert('this does not work yet')}}>
                                        <div className="justify-between">
                                            <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                            &nbsp;Submit Message</span>
                                        </div>
                                    </div>
                               
                            </div>
                        </div>
                    </Stack>
                </ValidationGroup>
      </div>
      <Footer />
      </div>
      )
};

export default contact;
