import Image from 'next/image'
import React from 'react'
import  { MessageCircleMore } from 'lucide-react'


export default function Component(){
  return (
    <div>
        <h2 className='text-center mt-20 font-bold'>
        We Master in 200+ subjects, well-experienced and highly qualified experts
        </h2>
    <div className='mt-16 px-22 ml-16 flex flex-row h-96 w-96 bg-[#FF8C19]'>
        <Image 
        src="/student_girl.png"
        alt=''
        width={350}
        height={250}
 />
    <h2 className='ml-36 mt-4 h-24 w-22'>
    <MessageCircleMore />
    Make Inquiry
    </h2>
 </div>
    </div>
  )
}
