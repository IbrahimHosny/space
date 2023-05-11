import { Fragment , useState} from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css'

const Navbar = () => {
    const [toggle , settoggle] = useState(false)

    const clickHandler = () => {
        console.log(toggle);
        return settoggle(toggle => !toggle )
    }
    return ( 
        <Fragment>
        <nav className="w-[100%] absolute flex justify-between items-center max-sm:items-start xl:p-5 xl:pe-0 max-sm:top-[2vh] max-sm:z-10">
        <img src={toggle ? './assets/shared/icon-close.svg' : './assets/shared/icon-hamburger.svg'} alt="burger icon" onClick={clickHandler} className="absolute sm:hidden top-[10px] right-[10px] z-20 cursor-pointer"></img>
        <img src='./assets/shared/logo.svg' alt="logo" className="max-w-[50px]  max-h-[50px] max-lg:w-[40px] max-lg:h-[40px] mx-5"></img>
        <ul style={{display:toggle ? 'block' : 'none'}} className="xl:w-1/2 lg:w-1/2 sm:w-2/3 max-sm:w-[80%] sm:!flex  backdrop-blur-xl text-white nav-text  max-sm:flex-col items-start sm:items-center justify-start sm:justify-around max-sm:h-[98vh] max-sm:top-[0vh] sm:max-lg:h-[70px] lg:h-[100px] relative">
        <div className="absolute w-full h-full top-0 bg-white opacity-10 z-[-1]"></div>
        <li onClick={clickHandler} className="flex items-center max-sm:mt-[100px] max-sm:mb-[30px] max-sm:ms-[15px] sm:h-full"><Link to="space-tourism"><span>00</span> HOME</Link></li>
        <li onClick={clickHandler} className="flex items-center max-sm:my-[30px] max-sm:ms-[15px] sm:h-full"><Link to="space-tourism/destination"><span>00</span> DESTINATION</Link></li>
        <li onClick={clickHandler} className="flex items-center max-sm:my-[30px] max-sm:ms-[15px] sm:h-full"><Link to="space-tourism/crew"><span>00</span> CREW</Link> </li>
        <li onClick={clickHandler} className="flex items-center max-sm:my-[30px] max-sm:ms-[15px] sm:h-full"><Link to="space-tourism/technology"><span>00</span> TECHNOLOGY</Link></li>
        </ul>
        </nav>
        </Fragment>
    );
}

export default Navbar;