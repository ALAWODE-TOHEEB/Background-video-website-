import React from 'react'

const Footer = () => {
  
       

  return (
    <div className='border-t border-green-50'>
        <div className='my-32 max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-12 text-center'>
                <div>
                    <h1 className='text-lg font-bold'>Company</h1>
                    <ul className='mt-1'>
                        <li>apple </li>
                        <li>sumsung </li>
                        <li>google </li>
                        <li>microsoft </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold'>Developer API</h1>
                    <ul className='mt-1'>
                        <li>Submenu 1</li>
                        <li>Submenu 2</li>
                        <li>Submenu 3</li>
                        <li>Submenu 4</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold'>Support</h1>
                    <ul className='mt-1'>
                        <li>Submenu 1</li>
                        <li>Submenu 2</li>
                        <li>Submenu 3</li>
                        <li>Submenu 4</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-lg font-bold'>Products</h1>
                    <ul className='mt-1'>
                        <li>Sub 1</li>
                        <li>Sub 2</li>
                        <li>Sub 3</li>
                        <li>Sub 4</li>
                    </ul>
                </div>

            </div>
                <p className='my-12 text-center text-sm text-thBlue '>© Copyright 2022 Phantech LTD </p>
        </div>
      
    </div>
  )
}

export default Footer