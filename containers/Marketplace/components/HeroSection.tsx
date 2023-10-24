import { Divider } from "@mui/material";
import { MbText } from "mintbase-ui";

const HeroSection = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center hero-image-drone">
      <div className="items-center justify-center">
        <div className="pl-4 pr-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 my-12 text-white">
          <div className="text-xl text-white mt-1 font-bold">
            <img src="./survey.png" />
            <img src="./drone.png" />""
          </div>
          <div className="" style={{textShadow: '3px 1px 19px black', letterSpacing: '.05rem'}}>
            <h1 style={{color: '#2ba95c'}}>The Problem:</h1>  
          <span style={{fontSize: '14px'}}>&gt; The mission statement seems simple:</span> <Divider sx={{mt: 1, mb: 1}}/>
          <span style={{fontSize: '14px', color: '#2ba95c'}}>
            &nbsp;1) Get paid to keep trees standing <br /> &nbsp;2) Offset Carbon emissions 
          </span> 
          <Divider sx={{mt: 1, mb: 1}}/>
          <span style={{fontSize: '14px',}}>Current programs to offset carbon emissions have had issues ensuring that funds allocated produce the desired outcomes. Our take on tackling this problem uses a multi-tiered approach:</span>
          </div>
          <div className="" style={{textShadow: '3px 1px 19px black', letterSpacing: '.05rem'}}>
            <h1 style={{color: '#2ba95c'}}>Our Solution:</h1>  
            <span style={{fontSize: '14px'}}>&gt; Technology to the Rescue: <Divider sx={{mt: 1, mb: 1}}/>
            &nbsp;1) Photo Id Verification<br />
            &nbsp;2) Property Owner Verification<br />
            &nbsp;3) AML compliance (Paypal / Stripe)<br />
            &nbsp;4) Simplified Contract Narrative<br />
            &nbsp;5) Community Involvement <br />
            &nbsp;6) Satellite imagery<br />
            &nbsp;7) *Drone Surveys
            </span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
