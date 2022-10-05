import { MbButton } from "mintbase-ui"
import { useWallet } from "../../../services/providers/WalletProvider"
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Header from "./Header";

const HeaderContainer = () => {
  const { isConnected, details, signIn, signOut } = useWallet()

  return (
    <div className="hero-image">
        <Header />
        <div className="hero-text">
            <h1>CrowdFunding for all People.</h1>
            <p>Including the Unbanked.</p>
            <div style={{color: "#02a95c"}} className="mt-3 p-3 pl-4 cursor-pointer  bg-slate-100 z-40 rounded-2xl btn-shadow">
                <AutoGraphIcon />
                <span className="p-3 text-lg">Start Your First Campaign</span>
            </div>
        </div>
    </div>
  )
}

export default HeaderContainer;
