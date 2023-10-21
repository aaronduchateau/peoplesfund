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

export default function InstructionsMapPre(props: {isOpen: boolean, handleToggle: (isOpen: boolean) => void;}) {
  const [currentStep, setStep] = React.useState<number>(1);
  return (
    <div>
      <BootstrapDialog
        onClose={()=>{props.handleToggle(false)}}
        aria-labelledby="customized-dialog-title"
        open={props.isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2, }} id="customized-dialog-title">
          Locate Your Property
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
        <DialogContent dividers sx={{borderBottom: '1px solid #081620', borderTop: '1px solid #081620'}} >
          <Typography gutterBottom>
            Good Job! Now use the polygon tool (below the search dialogue) to draw a rough outline of the property.
          </Typography>
          <img src="./instructions/searchbar.png" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        </DialogContent>
        <DialogActions>
        <Button autoFocus onClick={()=>{props.handleToggle(false)}}>
            Continue
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}


