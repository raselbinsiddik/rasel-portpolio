import { Zoom } from 'react-awesome-reveal';
import web from '../assets/web.jpg'

const AbuoutMe = () => {
    return (
        
        <div name="aboutme">
            <h1 className='text-3xl text-center font-bold text-lime-500 mt-40 mb-5'>About Me</h1>
            <div className='w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2  bg-orange-50 gap-8'>
            <div><Zoom><img className='w-full rounded-xl' src={web} alt="" /></Zoom></div>
            <div>
                <Zoom>  
                    <h1 className='text-2xl font-bold mb-2'>A dedicated Full stack Web Developer based in Programming-Hero</h1>
                    <p>Asa junior Full stack Developer i possess an impressive of skill in HTML, CSS, JavaScript, React, Tailwind, Bootstrap, Firebase and Node.js. I excel designing and maintaining responsive website that offer a smooth user experience. My exprtise lies in crfting dynamic, engaging interfaces trhough writing clean and optimized and utilizing cutting-edge development tools and techniques. I am also team player. i am work bekend side by using MERN stack.</p></Zoom>
            </div>
        </div>     
       </div>
    );
};

export default AbuoutMe;