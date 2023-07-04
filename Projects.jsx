import learn from './src/assets/learnSchool.png';
import toy from './src/assets/toyCar.png';
import chef from './src/assets/chef.png';
import { FaGithub } from 'react-icons/fa';
import { Zoom } from 'react-awesome-reveal';

const Projects = () => {
    return (
        <Zoom><div name="projects">
            <Zoom><h1 className='text-3xl text-center font-bold text-lime-500 mt-40 mb-8'>Projects</h1></Zoom>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto'>
                <Zoom><img className='rounded-xl' src={learn} alt="" /></Zoom>
                <Zoom>
                    <div className='mx-auto w-3/4 '>
                        <h1 className='text-2xl font-bold mb-2'>TransLang School</h1>
                        <p className='text-2xl text-lime-500 font-bold mb-2'>React.Js | Node.Js | MongoDb | Strip | TanStack Query | JWT</p>
                        <ul>
                            <li>•foreign language education school</li>
                            <li>•admin maintain all users, admin email: rasel@rasel.com and password: 12345a</li>
                            <li>•instructor maintain classes</li>
                            <li>•user will be a student after successful payments</li>
                        </ul>
                        <div className='flex text-2xl font-bold mt-4'>
                            <a className='mr-2' href="https://trans-language-client.web.app">Live Link</a> |
                            <a className='mt-2' href="https://github.com/raselbinsiddik/learning-school-client"><FaGithub></FaGithub></a>
                        </div>
                    </div> </Zoom>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mt-5'>
                <Zoom><img className='rounded-xl' src={toy} alt="" /></Zoom>
                <Zoom>
                    <div className='mx-auto w-3/4 mt-5'>
                        <h1 className='text-2xl font-bold mb-2'>Toys Market</h1>
                        <p className='text-2xl text-lime-500 font-bold mb-2'>React.Js | Node.Js | MongoDb | Tailwind | Firebase</p>
                        <ul>
                            <li>•childrens toy market place</li>
                            <li>•user can add added toys after login</li>
                            <li>•user can update and delete their add toys</li>
                            <li>•all user can see theirs added toys</li>
                        </ul>
                        <div className='flex text-2xl font-bold mt-4'>
                            <a className='mr-2' href=" https://the-toy-client.web.app">Live Link</a> |
                            <a className='mt-2' href="https://github.com/raselbinsiddik/toy-client"><FaGithub></FaGithub></a>
                        </div>
                    </div>
                </Zoom>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mt-5'>
                <Zoom><img className='rounded-xl' src={chef} alt="" /></Zoom>
                <Zoom> <div className='mx-auto w-3/4 mt-5'>
                    <h1 className='text-2xl font-bold mb-2'>TransLang School</h1>
                    <p className='text-2xl text-lime-500 font-bold mb-2'>React.Js | Node.Js | tailwind | Bootstrap | Firebase</p>
                    <ul>
                        <li>•there are some Bangladeshi recipe</li>
                        <li>•createuser account, authenticate user for login</li>
                        <li>•user can see all chefs recipies after login</li>
                    </ul>
                    <div className='flex text-2xl font-bold mt-4'>
                        <a className='mr-2' href="https://the-chef-server.web.app">Live Link</a> |
                        <a className='mt-2' href="https://github.com/raselbinsiddik/chef-client"><FaGithub></FaGithub></a>
                    </div>
                </div> </Zoom>
            </div>
        </div></Zoom>
    );
};

export default Projects;