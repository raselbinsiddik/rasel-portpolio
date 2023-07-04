import { FaGithub, FaLinkedin } from "react-icons/fa";
import rasel from '../assets/rasel.JPG'
import { Zoom } from "react-awesome-reveal";

const Home = () => {
    return (
        <div name="home">
            <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 mx-auto mb-10">
                <Zoom>
                    <div className="mt-32">
                        <h1 className="text-4xl  font-bold">Front-End Developer</h1>
                        <p className="mt-5">Hi, I am Muhammad Rasel, A passionet Full stack Developer.</p>
                        <div className="flex mt-4 text-lg">
                            <a className="mr-2" href="https://github.com/raselbinsiddik"><FaGithub></FaGithub></a>
                            <a href="https://www.linkedin.com/in/raselbinsiddik/"><FaLinkedin></FaLinkedin></a>
                        </div>
                        <a href="https://drive.google.com/uc?export=download&id=1LjI2CcbTFJus1F7V-p0-9TuWx1EvicZW"><button className="btn btn-warning mt-4">Download Resume</button></a>
                    </div>
                </Zoom>


                <Zoom>
                    <div className="avatar mt-32">
                        <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={rasel} />

                        </div>
                    </div>
                </Zoom>

            </div>
        </div>
    );
};

export default Home;