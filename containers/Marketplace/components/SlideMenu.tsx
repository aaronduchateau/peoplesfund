import { useMenu } from "../../../services/providers/MenuProvider";
import Link from 'next/link'


const SlideMenu = () => {
    const { isOpen, toggleOpen } = useMenu();
    const isOpenClass = isOpen ? 'sideNavOpen' : '';
    return (
        <div id="mySidenav" className={'sidenav ' + isOpenClass} onClick={()=>toggleOpen(!isOpen)}>
            <a className="closebtn" >&times;</a>
            <Link href="/"><a>Home</a></Link>
            <Link href="/termsOfService"><a>Terms of Service</a></Link>
            <Link href="/builder"><a>Campaign Builder</a></Link>
            <Link href="/pitch"><a>Pitch Deck</a></Link>
            <Link href="/timberIndustry"><a>Timber Industry Partners</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
        </div>
    );
}

export default SlideMenu;
