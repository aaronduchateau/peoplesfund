import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CampaignPreview from './CampaignPreview';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({

  '& MuiDialogContainer-root': {
    backgroundColor: '#081620',
    padding: theme.spacing(2),
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    backgroundColor: '#081620',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    backgroundColor: '#081620',
  },
  '& .MuiDialogTitle-root': {
    backgroundColor: '#081620',
  },
}));

const contractName = "20 year contract";
const creatorItemFunding = {"title":"Historic Grove Needs to be Saved ","description":"description asdfasdfasdfasd asdf asf asd fasd fasfd as asd saf asf dafda sdfas fasfasdf sadfasdfasdfa","category":null,"fundingType":null,"totalAmount":"55555555","startDate":"2023-10-28T22:40:25.000Z","numberOfItems":null,"imageUrl":""};
const drawnMapData = {"imageUrlEncoded":"./campaign1map.png","features":{"f281e8617e3ccbcec78e65315b8626cd":{"id":"f281e8617e3ccbcec78e65315b8626cd","type":"Feature","properties":{},"geometry":{"coordinates":[[[-118.80585893121342,34.23304304520096],[-118.80606277909843,34.232164897498194],[-118.80508645501698,34.231490757694885],[-118.80455001321423,34.23188104981722],[-118.80376680818175,34.23210280590017],[-118.80464657273856,34.23325592811388],[-118.80524738755784,34.23303417506767],[-118.80563362565607,34.23304304520096],[-118.80585893121342,34.23304304520096]]],"type":"Polygon"}},"315e7e23ac8f210b57564a372c78de2a":{"id":"315e7e23ac8f210b57564a372c78de2a","type":"Feature","properties":{},"geometry":{"coordinates":[[[-118.80504618061741,34.23307941273694],[-118.8052761078271,34.23296060410185],[-118.80439745741882,34.23201352355976],[-118.80416342436601,34.23207462585171],[-118.80447546843614,34.23246839511326],[-118.80490658195444,34.23294023688996],[-118.80504618061741,34.23307941273694]]],"type":"Polygon"}}},"location":{"result":{"id":"address.1042980073230180","type":"Feature","place_type":["address"],"relevance":1,"properties":{"accuracy":"interpolated","mapbox_id":"dXJuOm1ieGFkcjpjMmVlNjYyOC1iMmZlLTQ1ZDQtYTdmZC1kMzFiMGUwMmNjNTc"},"text_en-US":"Tree Hollow Court","place_name_en-US":"456 Tree Hollow Court, Simi Valley, California 93065, United States","text":"Tree Hollow Court","place_name":"456 Tree Hollow Court, Simi Valley, California 93065, United States","center":[-118.806331,34.231269],"geometry":{"type":"Point","coordinates":[-118.806331,34.231269],"interpolated":true},"address":"456","context":[{"id":"neighborhood.735948012","mapbox_id":"dXJuOm1ieHBsYzpLOTJzN0E","text_en-US":"Woodridge","text":"Woodridge"},{"id":"postcode.308948716","mapbox_id":"dXJuOm1ieHBsYzpFbW91N0E","text_en-US":"93065","text":"93065"},{"id":"place.303597804","mapbox_id":"dXJuOm1ieHBsYzpFaGlJN0E","wikidata":"Q323414","text_en-US":"Simi Valley","language_en-US":"en","text":"Simi Valley","language":"en"},{"id":"district.23676652","mapbox_id":"dXJuOm1ieHBsYzpBV2xHN0E","wikidata":"Q108127","text_en-US":"Ventura County","language_en-US":"en","text":"Ventura County","language":"en"},{"id":"region.419052","mapbox_id":"dXJuOm1ieHBsYzpCbVRz","wikidata":"Q99","short_code":"US-CA","text_en-US":"California","language_en-US":"en","text":"California","language":"en"},{"id":"country.8940","mapbox_id":"dXJuOm1ieHBsYzpJdXc","wikidata":"Q30","short_code":"us","text_en-US":"United States","language_en-US":"en","text":"United States","language":"en"}]}}};
const campaignImageURL = "./campaign1profile.jpeg";


export default function CampaignViewerModal(props: {isOpen: number | null, handleToggle: (isOpen: number | null) => void, activeCampaign: any}) {
  const [currentStep, setStep] = React.useState<number>(1);
  return (
    <div>
      <BootstrapDialog
        onClose={()=>{props.handleToggle(null)}}
        aria-labelledby="customized-dialog-title"
        open={props.isOpen !== null}
        maxWidth='lg'
      >
        <DialogTitle sx={{ m: 0, p: 2, }} id="customized-dialog-title">
          Campaign Preview
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>{props.handleToggle(null)}}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{borderBottom: '1px solid #081620', borderTop: '1px solid #081620'}} >
        <CampaignPreview 
            setCurrentStep={()=>{}} 
            drawnMapData={props.activeCampaign.drawnMapData} 
            creatorItemFunding={props.activeCampaign.creatorItemFunding} 
            campaignImageURL={props.activeCampaign.campaignImageURL} 
            contractName={props.activeCampaign.contractName} 
            mode={'LIGHTBOX'}/> 
         
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>{props.handleToggle(null)}}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}


