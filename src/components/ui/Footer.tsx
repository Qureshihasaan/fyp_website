import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import  { MessageCircleMore , CalendarCheck , LightbulbIcon , Clock4 } from 'lucide-react'


export default function Component(){
  return (
   <> <div>
        <h2 className='text-center mt-20 font-bold'>
        We Master in 200+ subjects, well-experienced and highly qualified experts
        </h2>
    </div>
    <div className='flex mx-20  mt-24 px-22 ml-16 h-96 w-96'>
          <div className="grid grid-cols-2 gap-6 sm:gap-10 justify-center items-center absolute z-[2]">
          <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
            <h3 className="text-xl font-bold mt-2">
              <MessageCircleMore className='' />
            Make Inquiry
            </h3>
            <p className="text-md mt-2">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
            <h3 className="text-lg font-bold">
              <CalendarCheck />
            Order Received
            </h3>
            <p className="text-md mt-2">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
            <h3 className="text-lg font-bold">
            <LightbulbIcon />
            Execution of Work
            </h3>
            <p className="text-md mt-2">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <div className="w-[100%] sm:w-[80%] tracking-normal xs:tracking-widest">
            <h3 className="text-lg font-bold">
              <Clock4 />
              Timely Delivered
            </h3>
            <p className="text-md mt-2">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
             </p>
             <div>
             </div>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-md mt-10">
                Get a Free Quote
          </button>
          </div>
          </div>       
          <footer className="text-[#666666] mt-20 px-20">
      {/* main footer */}
        <div className="flex flex-col w-full lg:flex-row justify-between lg:items-start mb-10">
          {/* image and its content */}
          <div className="w-2/6 flex flex-col gap-12 lg:mt-2 ">
           <span className='font-bold text-black'>  FYP Website </span>
            <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
            </p>
            <div className="flex items-start gap-x-5">
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                {" "}
                <FaTwitter fill="black" color="black" />
              </div>
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                <FaFacebook fill="black" color="black" />
              </div>
              <div className="w-10 flex justify-center items-center h-10 rounded-xl bg-gray-200">
                <FaLinkedinIn fill="black" color="black" />
              </div>
            </div>
          </div>

          {/* company and its content */}
          <div className="w-[20%] flex flex-col gap-3">
            <h3 className='font-bold text-black'>Company</h3>
            <Link href={""}>About</Link>
            <Link href={""}>Terms of Use</Link>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>How it Works</Link>
            <Link href={""}>Contact Us</Link>
          </div>

          {/* Support and its content */}
          <div className="w-[20%] flex flex-col gap-3">
            <h3 className='font-bold text-black'>Support</h3>
            <Link href={""}>Support Carrer</Link>
            <Link href={""}>24h Services</Link>
            <Link href={""}>Quick Chat</Link>
          </div>

          {/* Contact and its content */}
          <div className="w-[20%] flex flex-col gap-3">
            <h3 className='font-bold text-black'>Contact</h3>
            <Link href={""}>Whatsapp</Link>
            <Link href={""}>Support 24h</Link>
          </div>
        </div>
      {/* copyright and its content */}
      <div className="border-t border-black w-full">
        <div className=" max-w-[1240px] w-full mx-auto lg:px-20 py-5 px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5">
            <div className="">Copyright &copy; 2023 Dine Market </div>
            <div className="">
              Design by:{" "}
            <span className="text-black font-bold">Hasaan Qureshi</span>
            </div>
            <div className="">
              Code by:{" "}
             <span className=" font-bold text-black">
                Qureshihasaan on Github
              </span>
            </div>
          </div>
        </div>
      </div>
      </footer>

    </>
  )
}




        //  {/* <div className="flex items-center flex-col sm:flex-row gap-10">
        //  {/* <Image 
        // src="/student_girl.webp"
        // alt=''
        // width={350}
        // height={250}
        //  /> */

        // // <div>s

        // // </div>
      