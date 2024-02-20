import React from 'react';
import  { Check ,  MessagesSquare } from 'lucide-react';
import Image from 'next/image';


export default function Component() {
    return(
      <>  <div className='mt-10 align-center'>
        {/* <Image 
        src='/student.jpeg' 
        alt=''
        width={100}
        height={100} 
        className=''
        /> */}
            <h1 className= ' text-black px-16 mt-6 text-2xl font-extrabold '>
                Premium Quality
            </h1>
            <h3 className='mt-6 px-16 font-bold text-4xl'>
            Professional Help<br />By Ph.D. Experts
            </h3>
        </div>
        {/* <div className=''>
        <input className='border-black border-2 rounded-md px-4 py-2 m-4' type="text" placeholder='Name' />
        <input className='border-2 border-black rounded-md px-4 py-2 m-4' type="Email" placeholder='Email' />
        <input className='border-2 border-black rounded-md px-4 py-2 m-4' type="Text" placeholder='Number' />
        <input className='border-2 border-black rounded-md px-4 py-2 m-4' type="text" placeholder='Message' />
        <button className='border-2 border-black rounded-md px-4 py-2 ml-4 m-4'>Submit</button>
    </div> */}
        
        <p className=' flex px-10 mt-8 font-bold'>
        <Check className='mx-4'/>
        Highly Qualified Experts Guarantee Quality Services
        </p>
        <p className=' flex px-10 mt-2 font-bold'>
        <Check className='mx-4'/>
        100% Secure, Premium Quality & Budget Friendly
        </p>
        <p className=' flex px-10 mt-2 font-bold'>
        <Check className='mx-4'/>
        24x7 Customer Support
        </p>
        <button className='flex mt-6 ml-14 px-2 py-2 text-center pr-8 bg-black text-white rounded '>
            <MessagesSquare className='mx-4' />
            Get A Free Quote
        </button>

    </>


    )

}

// className='flex items-center w-full -4 md:px-6 p-px4