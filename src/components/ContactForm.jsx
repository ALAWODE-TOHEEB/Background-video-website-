import React from 'react';
import GradientBtn from './GradientBtn';


const ContactForm = () => {


  return (
    <div className='p-4 text-left'>
        <form action="https://getform.io/f/cb0c949f-e61d-4698-9767-2f930f16b851" method='post'>
            <div className='grid lg:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col col-span-2 lg:col-span-1'>
                <label htmlFor="name" className='capitalize text-sm py-2 font-light'>name</label>
                <input id='name' type="text" name='name' className='border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none '/>
                </div>
           
                <div className='flex flex-col col-span-2 lg:col-span-1'>
                <label htmlFor="phone" className='capitalize text-sm py-2 font-light'>phone</label>
                <input id='phone' type="text" name='phone' className='border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none '/>
                </div>

                <div className='flex flex-col col-span-2'>
                <label htmlFor="email" className='capitalize text-sm py-2 font-light'>email</label>
                <input id='email' type="email" name='email' className='border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none '/>
                </div>

                <div className='flex flex-col col-span-2'>
                <label htmlFor="message" className='capitalize text-sm py-2 font-light'>message</label>
                <textarea id='message' name='message' rows="10" className='border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none '/>
                </div>

            </div>

                <div className='flex item-center justify-center'>
                  <GradientBtn className="" title="send message"/>
                </div>
        </form>
    </div>
  )
}

export default ContactForm