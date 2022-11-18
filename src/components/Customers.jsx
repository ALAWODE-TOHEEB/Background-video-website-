import React from 'react';
import PageSection from './PageSection';
import { FaAmazon, FaFacebook, FaGoogle,  FaApple, FaSnapchatGhost } from 'react-icons/fa';

const Customers = (props) => {
    
    const facts = [
        {
            id: 1,
            title: "$50",
            subtitle: "what a fantastic technology",
        },

        {
            id: 2,
            title: "58%",
            subtitle: "convenient discount as far as more technology solution is demanded",
        },

        {
            id: 3,
            title: "2 to 3 months delivery",
            subtitle: "fast technology delivery with quality solutions",
        },

        {
            id: 4,
            title: "9 new countries",
            subtitle: "located globally with quality products",
        }
    ]

    const companies = [
        {
            id: 1,
            icon: <FaFacebook size={25}/>,
            title: "facebook",
        },

        {
            id: 2,
            icon: <FaAmazon size={25}/>,
            title: "amazon",
        },

        {
            id: 3,
            icon: <FaGoogle size={25}/>,
            title: "google",
        },

        {
            id: 4,
            icon: <FaApple size={25}/>,
            title: "apple",
        },

        {
            id: 5,
            icon: <FaSnapchatGhost size={25}/>,
            title: "snapchat",
        },
    ]


  return (
    <div id={props.id}>
        <PageSection name="customer" title="Customers" subtitle="When it comes to the topic of business development, as well as customer acquisition, there are always a number of questions/comments floating around."/>
    <>
    <div className='grid lg:grid-cols-4 text-left gap-8 mb-16 p-4'>
        { facts.map((fact) => (
            <div key={fact.id} className="odd:bg-thBlue even:bg-thOrange text-black p-4 rounded-lg">
                <h1 className='text-3xl font-bold mb-2'>{fact.title}</h1>
                <p>{fact.subtitle}</p>
            </div>
        ))}

    </div>

    <div className='flex flex-col  lg:flex-row items-center justify-around gap-6 '>
        
            {companies.map((company) => (
                <div key={company.id} className="flex items-center capitalize p-4 rounded-lg">
                      {company.icon}
                    <p className='ml-2'>{company.title}</p>
                </div>
            ))}
       
    </div>
    </>
    </div>
  )
}

export default Customers