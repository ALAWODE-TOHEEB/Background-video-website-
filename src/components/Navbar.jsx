import React from 'react';
import GradientBtn from './GradientBtn';
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link } from "react-scroll";

const Navbar = ({isMenuShown,  setIsMenuShown, }) => {
    
  return (
    <>
    <div className='absolute w-full h-24 bg-black text-white z-20'>
        <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full'>
            <div>
                <h1 className='text-thBlue tracking-widest text-3xl'>PHANTECH</h1>
            </div>

            <div className='hidden lg:flex items-center'>
                <ul className='flex'>
                    <li className='p-4 uppercase hover:text-thBlue duration-200 cursor-pointer'><Link>home</Link></li>

                    <li className='p-4 uppercase hover:text-thBlue duration-200 cursor-pointer'><Link  activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>products</Link></li>

                    <li className='p-4 uppercase hover:text-thBlue duration-200 cursor-pointer'><Link  activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>developer API</Link></li>

                    <li className='p-4 uppercase hover:text-thBlue duration-200 cursor-pointer'>
                        <Link  activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}> customers</Link>
              </li>

                    <li className='p-4 uppercase hover:text-thBlue duration-200 cursor-pointer'>
                        <Link   activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>contact</Link></li>
                     
                </ul>
                <GradientBtn className="ml-4 capitalize" title="get in touch"/>
            </div>

            <div onClick={() => setIsMenuShown(!isMenuShown)} className='block lg:hidden'>
               {isMenuShown ?  <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>
        </div>

        </div>
        <div className={`w-full bg-black text-white absolute  z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${ isMenuShown ? "top-24 rounded-b-2xl opacity-95" : "top-[-100%]"}`}>
            <ul>
                    <li className='p-2 uppercase cursor-pointer'><Link>home</Link></li>

                    <li className='p-2 uppercase cursor-pointer'><Link  to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>products</Link></li>

                    <li className='p-2 uppercase cursor-pointer'><Link  to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>developer API</Link></li>

                    <li className='p-2 uppercase cursor-pointer'><Link  to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>customers</Link></li>

                    <li className='p-2 uppercase cursor-pointer'><Link  activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>contact</Link></li>
               
           <GradientBtn className="mt-5 capitalize" title="get in touch"/>
            </ul>
        </div>

   
    </>
  )
}

export default Navbar