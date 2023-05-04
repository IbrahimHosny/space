import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css'

const Navbar = () => {
    return ( 
        <Fragment>
        <nav className="md:w-[100%] absolute flex justify-between items-center xl:p-5 xl:pe-0">
        <img src="./assets/shared/logo.svg" alt="logo" className="max-w-[50px]  max-h-[50px] max-lg:w-[40px] max-lg:h-[40px] mx-5"></img>
        <ul className="xl:w-1/2 lg:w-1/2 md:w-2/3 backdrop-blur-xl text-white nav-text flex items-center justify-around md:max-lg:h-[70px] lg:h-[100px] relative">
        <div className="absolute w-full h-full top-0 bg-white opacity-10 z-[-1]"></div>
        <li className="flex items-center h-full"><Link to="/"><span>00</span> HOME</Link></li>
        <li className="flex items-center h-full"><Link to="/destination"><span>00</span> DESTINATION</Link></li>
        <li className="flex items-center h-full"><Link to="/crew"><span>00</span> CREW</Link> </li>
        <li className="flex items-center h-full"><Link to="/technology"><span>00</span> TECHNOLOGY</Link></li>
        </ul>
        </nav>
        </Fragment>
    );
}

export default Navbar;