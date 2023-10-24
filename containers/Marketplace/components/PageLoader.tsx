import { CircularProgress } from '@mui/material';
const PageLoader = () => {

  return (
    <div className="loaderHolder">
      <div style={{ width: '350px', marginLeft: 'auto', marginRight: 'auto', color: 'white' }}>
      <img src="./fundmeup3.png" className="flex items-center mt-1" style={{width: '350px', height: '75px', marginLeft: 'auto', marginRight: 'auto'}} />
        <h1>&nbsp;&nbsp;Get Paid to Keep Trees Standing</h1>
        <div style={{margin: '0 auto !important', width: '100%', display: 'flex', alignItems: 'center', paddingTop: '75px'}}>
          <br/>
          <br/>
          <br/>
        <CircularProgress color="success" sx={{margin: '0 auto !important'}} size={115}/>
        </div>
      </div>
     
    </div>
  )
}

export default PageLoader;
