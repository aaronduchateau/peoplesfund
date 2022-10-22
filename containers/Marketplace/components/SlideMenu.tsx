import { useMenu } from "../../../services/providers/MenuProvider";
import Link from 'next/link'


const SlideMenu = () => {
    const { isOpen, toggleOpen } = useMenu();
    const isOpenClass = isOpen ? 'sideNavOpen' : '';
    return (
        <div id="mySidenav" className={'sidenav ' + isOpenClass} onClick={()=>toggleOpen(!isOpen)}>
            <a className="closebtn" >&times;</a>
            <Link href="/"><a>Home</a></Link>
            <Link href="/pitch"><a>The Pitch Deck</a></Link>
            <Link href="/termsOfService"><a>Terms of Service</a></Link>
            <Link href="/builder"><a>Campaign Builder</a></Link>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    );
}

export default SlideMenu;
