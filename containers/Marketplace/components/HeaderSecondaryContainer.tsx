import { MbButton } from "mintbase-ui"
import { useWallet } from "../../../services/providers/WalletProvider"
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Header from "./Header";

const HeaderSecondaryContainer = ({termsUrl} : {termsUrl: string}) => {
  const { isConnected, details, signIn, signOut } = useWallet()

  return (
    <div className="hero-no-image pb-3">
        <Header />
        <img src={termsUrl} style={{ width: '400px', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px' }}/>
    </div>
  )
}

export default HeaderSecondaryContainer;
