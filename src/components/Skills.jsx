import {  FaHtml5, FaCss3, FaBootstrap, FaReact, FaStripe, FaNodeJs } from "react-icons/fa";
import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";
import { SiExpress, SiFirebase, SiMongodb } from "react-icons/si";
import { Zoom } from "react-awesome-reveal";


const Skills = () => {
    return (
        <Zoom>
            <div name="skills" className="mx-auto w-3/4">
                <h1 className='text-3xl text-center font-bold text-lime-500 mt-40 mb-8'>Skills</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-8">
                    <div>
                        <h1 className="text-center font-bold text-red-400 text-2xl mt-4 mb-4">Front End Debvelopment</h1>
                        <div className=" grid grid-cols-3 text-yellow-600 ">
                            <Zoom>
                                <p><FaHtml5 className="text-8xl"></FaHtml5> HTML</p>
                                <span><FaCss3 className="text-8xl"></FaCss3> CSS</span>
                                <p><TbBrandJavascript className="text-8xl"></TbBrandJavascript> JavaScript</p>
                                <p><FaBootstrap className="text-8xl"></FaBootstrap> Bootstrap</p>
                                <p><TbBrandTailwind className="text-8xl"></TbBrandTailwind> Tailwind</p>
                                <p><FaReact className="text-8xl"></FaReact> React</p>
                                <p><SiFirebase className="text-8xl"></SiFirebase> Firebase</p>
                                <p><FaStripe className="text-8xl"></FaStripe> Stripe</p>
                                
                            </Zoom>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <h1 className="text-center font-bold text-red-400 text-2xl mt-4 mb-4">Beckend Development</h1>
                        <div className="grid grid-cols-2 text-amber-500">
                            <Zoom>
                                <p><SiMongodb className="text-8xl"></SiMongodb> MongoDb</p>
                                <p><FaNodeJs className="text-8xl"></FaNodeJs> NodeJs</p>
                                <p><FaReact className="text-8xl"></FaReact> React</p>
                                <p><SiExpress className="text-8xl"></SiExpress> Express</p>
                                
                           </Zoom>
                        </div>
                    </div>

                </div>
            </div>
        </Zoom>
       
    );
};

export default Skills;