import { MbButton } from "mintbase-ui"
import { useWallet } from "../../../services/providers/WalletProvider"
import { useMenu } from "../../../services/providers/MenuProvider";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';
import SlideMenu from "./SlideMenu";

const Header = () => {
  const { isConnected, details, signIn, signOut } = useWallet()
  const {toggleOpen, isOpen} = useMenu()

  return (
    <nav className="w-full sticky top-2 z-40 sticky pl-20 pr-20">
      <SlideMenu />
      <div className="flex justify-between bg-slate-100 z-40 rounded-2xl lg:border-b border-solid border-black/75">
        <div style={{color: "#02a95c"}} className="mt-3 ml-3 cursor-pointer" onClick={()=>toggleOpen(!isOpen)}>
          <MenuIcon fontSize="large" color="inherit" />
        </div>
        <img src="fundmeup3.png" className="flex items-center mt-1" style={{width: '240px', height: '55px'}} />
        <div style={{color: "#02a95c"}} className="mt-3 mr-3 cursor-pointer" onClick={()=>toggleOpen(!isOpen)}>
          <AccountBalanceWalletIcon fontSize="large" color="inherit" />
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
