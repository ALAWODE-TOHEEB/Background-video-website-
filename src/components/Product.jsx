import React from 'react'
import PageSection from './PageSection';
import { FaRocket, FaRobot, FaMicrochip } from 'react-icons/fa';
import {GiArtificialIntelligence} from 'react-icons/gi';

const Product = (props) => {

    const markets = [
    {
        id: 1,
        icon: <FaRocket size={30} className="text-white"/>,
        title: "propelling jet engine",
        subtitle: "Rocket propulsion is the force used by the rocket to take off from the ground. It is based on Newton's third law of motion principle. Liquid fuel, solid fuel, cold gas and ion are the types of rocket propulsion. Acceleration depends on the exhaust velocity, burning of the fuel, and mass of the rocket."
    },
    {
        id: 2,
        icon: <GiArtificialIntelligence size={30} className="text-white"/>,
        title: "Artificial intelligence",
        subtitle: "Rocket propulsion is the force used by the rocket to take off from the ground. It is based on Newton's third law of motion principle. Liquid fuel, solid fuel, cold gas and ion are the types of rocket propulsion. Acceleration depends on the exhaust velocity, burning of the fuel, and mass of the rocket."
    },
    {
        id: 3,
        icon: <FaRobot size={30} className="text-white"/>,
        title: "robotics",
        subtitle: "A robot is a programmable machine that can complete a task, while the term robotics describes the field of study focused on developing robots and automation.."
    },
    {
        id: 4,
        icon: <FaMicrochip size={30} className="text-white"/>,
        title: "advanced electronics",
        subtitle: "Advance Electronics is the brainchild of a few young and enthusiastic technocrats. Since its inception, the company has conquered new horizon and set new ..."
    },
    ]

  return (
   <div id={props.id}>
        <PageSection name="products" title="products" subtitle="Effective product descriptions can possibly lure potential customers. Good product descriptions can potentially influence a purchase decision. Great product descriptions can ultimately help improve conversion rates and increase sales, as well as boost your visibility and SEO on paid channels."/>
        <div className='grid lg:grid-cols-2 gap-12 text-black px-6'>
                {
                    markets.map((market) => 
                    (
             <div key={market.id} className="group bg-gradient-to-r from-thOrange to-thBlue rounded-lg flex flex-col items-center justify-center p-8 text-center">
               <div className='flex items-center justify-center duration-300 group-hover:scale-110'>
                   <div className='bg-black rounded-full p-5 m-4'>{market.icon}</div>
               </div>
               <h1 className='text-3xl lg:text-5xl my-8 capitalize'>{market.title}</h1>
               <p className='text-lg'>{market.subtitle}</p>
             </div>
             )
               )
                }
            </div>
            </div>
    )
  
}

export default Product