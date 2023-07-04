import { Zoom } from "react-awesome-reveal";
import { FaFacebook, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdEmail} from "react-icons/md";

const ContactMe = () => {
    return (
        <div name="contact">
            <h1 className='text-3xl text-center font-bold text-lime-500 mt-40 mb-5'>Contact Me</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="mx-auto">
                    <Zoom>
                        <form action="" className="">
                            <p className="text-gray-400 py-4">Submit the form below or shoot me an email</p>

                            <input className="my-2 p-2 bg-slate-100 w-full" type="text" placeholder="name" name="name" />
                            <br />
                            <input className="my-2 p-2 bg-slate-100 w-full" type="email" placeholder="Email" name="email" />

                            <textarea className="my-2 p-2 bg-slate-100 w-full" name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                           
                        </form>
                        <button className="btn btn-warning text-center">Lets Submit</button>
                   </Zoom>
                </div>
                
                    <div className="mt-8">
                    <Zoom>
                        <div><span className="text-2xl font-bold text-indigo-700">Email</span><p className="flex text-2xl font-bold"><span className="mt-2"><MdEmail></MdEmail></span>
                            muhammadraselbinsiddik</p><p className="text-2xl font-bold">@gmail.com</p>
                        </div>
                        <div><span className="text-2xl font-bold text-indigo-700">Mobile</span>
                            <p className="flex text-2xl font-bold"><span className="mt-2"><FaPhone></FaPhone></span> +01879839555</p>
                        </div>
                        <div><span className="text-2xl font-bold text-indigo-700">Whats app</span>
                            <p className="flex text-2xl font-bold"><span className="mt-2"><FaWhatsapp></FaWhatsapp></span> +01879839555-(available)</p>
                        </div>
                        <div className="mt-2"><span className="text-2xl font-bold text-indigo-700 mt-2">Social</span>
                            <p className="flex text-3xl font-bold mt-2">
                                <a className="mr-2" href=""><FaFacebook></FaFacebook></a>
                                <a href=""><FaLinkedin></FaLinkedin></a>
                            </p>
                        </div>
                        <div className="mt-2"><span className="text-2xl font-bold text-indigo-700 mt-2">Address</span>
                            <p className="text-2xl font-bold mt-2">Dhaka, Bangladesh</p>
                        </div>
                        </Zoom>
                    </div>
            
           </div>
        </div>
    );
};

export default ContactMe;


