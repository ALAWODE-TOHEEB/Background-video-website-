import React from 'react';
import PageSection from './PageSection';
import contact from '../assests/contact.jpg'
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contacts = (props) => {
  return (
    <div id={props.id}>
        <PageSection name="contact" title="Contacts" subtitle="let us know if we can be of any help, please do not hesitate to contact us. Please let us know if you have further questions on this matter."/>
        <div className='flex flex-col lg:flex-row gap-8 mt-4'>
            <div className='w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center'>
               <img src={contact} alt="contact us" className='rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple'/> 
               <p className='py-12 max-w-md'> If you experience any further problems, please feel free to contact us. Let us know if you need any further assistance.</p>
               <div className='grid grid-cols-2 gap-10 mx-auto w-4/5'>
                <div className='flex items-center justify-center rounded-full shadow-md shadow-thPurple p-3 hover:scale-105 duration-200 cursor-pointer'><FaLinkedin size={25}/></div>
                <div className='flex items-center justify-center rounded-full shadow-md shadow-thPurple p-3 hover:scale-105 duration-200 cursor-pointer'><FaTwitter size={25}/></div>
               </div>
            </div>
            <div className='w-full lg:w-1/2 h-full rounded-xl p-4'>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contacts