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

export default function WelcomeModal(props: {isOpen: boolean, handleToggle: (isOpen: boolean) => void;}) {
  const [currentStep, setStep] = React.useState<number>(1);
  return (
    <div>
      <BootstrapDialog
        onClose={()=>{props.handleToggle(false)}}
        aria-labelledby="customized-dialog-title"
        open={props.isOpen}
      >  
        <DialogContent dividers sx={{borderBottom: '1px solid #081620', borderTop: '1px solid #081620', paddingLeft: "30px !important", paddingRight: "30px !important"}} >
        <img src="fundmeup3.png" className="flex items-center mt-1" style={{width: '240px', height: '55px', margin: '0 auto'}} />
        <br/>
          <Typography gutterBottom>
            Welcome!, This is an interactive demo of the 'KeepTree' concept. 
          </Typography>
          <br/>
          <Typography gutterBottom>
            Currently this site is not capable of billing or making transactions. Think of this as an 'interactive slideshow', the intention of which is to provide an interactive demonstration of how this may function at a later date.
          </Typography>
          <br/>
          <Typography gutterBottom>
            If billing is added, traditional payment platforms (Stripe / Paypal) wil be used. 
          </Typography>
          <br/>
          <Typography gutterBottom>
            Whether or not campaign generation will be public depends on a variety of factors that are TBD, including funding resources, team composition, and possible partnerships with non-profits in the space.  
          </Typography>
          <br/>
          <Typography gutterBottom>
            In today's world it is now more important than ever to move slowly and carefully to create products that serve the intention of the product, and KeepTree understands this. The right minds, funding, partners and mission statement will be crucial to gaurenteeing the success of this product. 
          </Typography>
          <br/>
          <Typography gutterBottom>
            By continuing you acknowledge that you are at least 18 years of age, a resident of the United States, and promise not to steal the idea.   
          </Typography>
          <br/>
          <Typography gutterBottom>
            Cheers! and enjoy the demo.   
          </Typography>
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


