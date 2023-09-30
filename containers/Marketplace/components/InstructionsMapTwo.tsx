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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function InstructionsMapTwo(props: {isOpen: boolean, handleToggle: (isOpen: boolean) => void;}) {
  const [currentStep, setStep] = React.useState<number>(1);
  return (
    <div>
      <BootstrapDialog
        onClose={()=>{props.handleToggle(false)}}
        aria-labelledby="customized-dialog-title"
        open={props.isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Outline Trees
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={()=>{props.handleToggle(false)}}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
       
          {currentStep === 1 && <><Typography gutterBottom>
            In this step you will: 
          </Typography>
          <Typography gutterBottom>
          1) Make adjustments to your property outline if needed. 
          </Typography>
          <Typography gutterBottom>
          2) Use the polygon tool to draw additional polygons around all the trees on our property.
          </Typography>
          </>
          }
          {currentStep === 2 &&  <>
          <Typography gutterBottom>
            When you are done, you should have something that looks like this!
          </Typography>
          <img src="./instructions/tree2.png" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
          </>}
        </DialogContent>
        <DialogActions>
        {currentStep === 1 && <Button autoFocus onClick={()=>{setStep(2)}}>
            Ok, I get it
          </Button>}
          {currentStep === 2 &&<Button autoFocus onClick={()=>{props.handleToggle(false)}}>
            Let's do it
          </Button>}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}



