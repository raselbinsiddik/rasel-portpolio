import { Link} from 'react-scroll'




const Navber = () => {

    const nacPage = <>
        
        <li><Link to="home"  smooth={true} duration={500}>
            Home
        </Link></li>
        <li><Link to="aboutme" smooth={true} duration={500}>
            About Me
        </Link></li>
        <li><Link to="skills" smooth={true} duration={500}>
            Skills
        </Link></li>
        <li><Link to="projects" smooth={true} duration={500}>
            Projects
        </Link></li>
        <li><Link to="contact" smooth={true} duration={500}>
            Contact
        </Link></li>
    </>
    return (
        <div className="navbar z-10 fixed bg-base-300 font-bold max-w-screen-xl mx-auto bg-opacity-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 dropdown-end">
                       {nacPage}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl"><span className="font-bold text-3xl">Muhammad</span> <span className="text-red-600 text-4xl">Rasel</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {nacPage}
                </ul>
            </div>
            <div className="navbar-end">
                <a className='btn' href="https://drive.google.com/uc?export=download&id=1LjI2CcbTFJus1F7V-p0-9TuWx1EvicZW">Download Resume</a>
            </div>
        </div>
    );
};

export default Navber;