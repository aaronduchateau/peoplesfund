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
            raisedAmount={props.activeCampaign.raisedAmount}
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


