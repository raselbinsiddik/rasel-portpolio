import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="text-center bg-slate-800 text-white font-bold mx-auto text-2xl mt-5">
            <h1>Muhammad Rasel Portpolio</h1>
            <p>Copyright © 2023- All Right Reserved</p>
            <p className="flex justify-center text-4xl mt-3">
                <FaFacebook ></FaFacebook>
                <FaWhatsapp className="ms-3 mr-3"></FaWhatsapp>
                <FaLinkedin></FaLinkedin>
            </p>
        </div>
    );
};

export default Footer;