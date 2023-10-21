import * as React from 'react';
import Stack from '@mui/material/Stack';
import Check from '@mui/icons-material/Check';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ImageUpload from "./ImageUpload";
import { Validate, ValidationGroup, useValidation, AutoDisabler } from 'mui-validate';


const DocumentProof = ({setCurrentStep, setPhotoIdImage, photoIdImage, mortgageImage, setMortgageImage} : { setCurrentStep: (id: number) => void,  setPhotoIdImage: (campaignImage: any) => void, photoIdImage: any, mortgageImage: any, setMortgageImage: (campaignImage: any) => void, } ) => {

      React.useEffect(() => {
        const section = document.querySelector('#section-title-builder');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, []);

  return (
    <div className="form-container">
            <ValidationGroup initialValidation={'silent'}>
                <Stack spacing={3}>
                    <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Upload Photo ID</h2>  
                    <ImageUpload setImage={setPhotoIdImage} image={photoIdImage}/>
                    <br />
                    <h2 style={{textAlign: 'left', lineHeight: '0px'}}>Upload Mortgage or Proof of Ownership</h2>  
                    <ImageUpload setImage={setMortgageImage} image={mortgageImage}/>
                    <br />
                    <div className="grid justify-items-center ">
                        <div className="flex space-x-2">
                            <div className="text-center btn-green pt-2 pb-2 pl-5 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{setCurrentStep(4)}}>
                                <div className="justify-between">
                                    <ArrowBack fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                    &nbsp;Go Back</span>
                                </div>
                            </div>
                            <AutoDisabler>
                                <div className="text-center btn-green pt-2 pb-2 pl-4 pr-1 cursor-pointer bg-slate-100 z-40 rounded-2xl flex btn-shadow" onClick={()=>{alert('Pretend Campagin was submitted for review, there is no backend to this site yet')}} style={{width: '200px'}}>
                                    <div className="justify-between">
                                        <Check fontSize="medium" className="pb-1 text-white" /><span className="text-white text-lg">
                                        &nbsp;Submit Campaign</span>
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

export default DocumentProof;
