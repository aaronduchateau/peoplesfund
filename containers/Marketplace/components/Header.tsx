import { useMenu } from "../../../services/providers/MenuProvider";
import UserIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SlideMenu from "./SlideMenu";

const Header = () => {
 
  const {toggleOpen, isOpen} = useMenu();

  return (
    <nav className="w-full sticky top-2 z-40 sticky pl-10 pr-10 md:pl-20 md:pr-20">
      <SlideMenu />
      <div className="flex justify-between bg-slate-100 z-40 rounded-2xl lg:border-b border-solid border-black/75">
        <div style={{color: "#02a95c"}} className="mt-1 ml-3 md:mt-3 md:ml-3 cursor-pointer" onClick={()=>toggleOpen(!isOpen)}>
          <MenuIcon fontSize="large" color="inherit" />
        </div>
        <img src="fundmeup3.png" className="flex items-center mt-1 w-40 h-9 md:w-60 md:h-14 " />
        <div style={{color: "#02a95c"}} className="mt-1 mr-3 md:mt-3 md:mr-3 cursor-pointer" onClick={()=>toggleOpen(!isOpen)}>
          <UserIcon fontSize="large" color="inherit" />
        </div>
        {/** login/logout with wallet 
        <div className="flex items-center mr-2">
          {isConnected && (
            <MbButton onClick={signOut} label={`Sign Out ${details.accountId}`} />
          )}
          {!isConnected && (
            <MbButton onClick={signIn} label="Connect NEAR Wallet" />
          )}
        </div>*/}
      </div>
    </nav>
  )
}

export default Header;
