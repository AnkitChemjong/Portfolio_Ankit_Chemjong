import React from 'react';
import Image from 'next/image';

const Footer = () => {
    const handleClick=(id:string)=>{
        const navigation= document.getElementById(id);
        if(navigation){
          navigation.scrollIntoView({behavior:"smooth"});
        }
      }
  return (
    <footer className="w-full bg-white p-8 font-sans border-t-2 border-amber-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
         <Image src="./image/favicon.png" alt="icon" className='w-48 h-48'/>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li onClick={()=>handleClick("home")} className='cursor-pointer hover:text-amber-400 transition-colors duration-200'>Home</li>
              <li onClick={()=>handleClick("about")} className='cursor-pointer hover:text-amber-400 transition-colors duration-200'>About</li>
              <li onClick={()=>handleClick("project")} className='cursor-pointer hover:text-amber-400 transition-colors duration-200'>Project</li>
              <li onClick={()=>handleClick("skill")} className='cursor-pointer hover:text-amber-400 transition-colors duration-200'>Skill</li>
              <li onClick={()=>handleClick("contact")} className='cursor-pointer hover:text-amber-400 transition-colors duration-200'>Contact</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Branding</li>
              <li>UNIX Design</li>
              <li>Development</li>
              <li>Backend Development</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li>Github</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col items-end">
            <div className="mb-6 text-right">
              <h1 className="text-xl font-bold shrink-0">BE <span className='text-2xl md:text-3xl text-amber-500'>CREATIVE</span></h1>
              <h1 className="text-xl font-bold shrink-0">BE <span className='text-4xl md:text-5xl text-blue-700'>CURIOUS</span></h1>
            </div>
            <button className="bg-black text-white px-6 py-2 cursor-pointer hover:scale-105 transition-all
            ease-in-out duration-200 rounded-full">
              Hire me
            </button>
          </div>
        </div>


        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-bold mb-2">Information</h3>
          <div className="space-y-1">
            <p>ankit@gmail.com</p>
            <p>Dharan-16, Sunsari, Nepal</p>
            <p>+977 9800000000</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;