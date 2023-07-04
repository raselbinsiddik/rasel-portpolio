import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import AbuoutMe from "./AbuoutMe";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
import Projects from "../../Projects";
import Footer from "./Footer";
import Home from "./Home";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Home></Home>
            <AbuoutMe></AbuoutMe>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;