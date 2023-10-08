import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Header from "./Header";
import Link from "next/link";

const HeaderContainer = () => {

  return (
    <div className="hero-image">
        <Header />
        <div className="hero-text">
            <h1>Get Paid to Keep Trees</h1>
            <p>that you already own,</p>
            <p>& save our planet.</p>
            <Link href="/builder">
            <div style={{color: "#02a95c"}} className="mt-3 p-3 pl-4 cursor-pointer  bg-slate-100 z-40 rounded-2xl btn-shadow">
                <AutoGraphIcon />
                <span className="p-3 text-lg">Start Your First Campaign</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default HeaderContainer;
