"use client"
import React, { useState } from 'react';
import {motion} from 'framer-motion';

const NavbarAnkit = () => {
 const [path,setPath]=useState("/");
 console.log(path);

    const navItems=
    [
        {
            name:"About",
            path:"about"
        },
        {
            name:"Skill",
            path:"skill"
        },
        {
          name:"Project",
          path:"project"
      }
    ]
    const handleClick=(id:string,path:string)=>{
      const navigation= document.getElementById(id);
      setPath(path);
      if(navigation){
        navigation.scrollIntoView({behavior:"smooth"});
      }
    }
  return (
    <div className='flex flex-row fixed justify-evenly items-center top-0 w-screen h-fit py-5 bg-yellow-200
    shadow-md shadow-black z-10 '>
      <motion.h1
      initial={{opacity:0, y:20}}
      animate={{opacity:1,y:0}}
      transition={{
        duration:0.5,
         ease: "easeOut"

      }} 
       onClick={()=>handleClick('home','/')}
      className='text-2xl lg:text-3xl font-semibold shrink-0 cursor-pointer'>Ankit <span className='text-3xl lg:text-4xl font-bold shrink-0'>C</span></motion.h1>
      <ul className=' flex-row justify-center items-center md:space-x-6 lg:space-x-16 hidden md:flex'>
        {
            navItems?.map((items,index)=>{
                return(
                  <motion.div 
                  initial={{opacity:0, y:20}}
                  animate={{opacity:1,y:0}}
                  transition={{
                    duration:0.5*(1+index),
                     ease: "easeOut"
                  }}
                  
                  key={index}>
                    <li onClick={()=>handleClick(items?.path,items?.path)} className=' font-semibold cursor-pointer hover:text-amber-500 transition-all duration-150' key={index}>{items?.name}</li>
                    {path === items?.path && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 0.5,
                          ease: "easeIn"
                        }}
                        className="h-1 bg-black"
                      />
                    )}
                  </motion.div>
                )
            })
        }
      </ul>
      <motion.button
      initial={{opacity:0, y:20}}
      animate={{opacity:1,y:0}}
      transition={{
        duration:0.5,
         ease: "easeOut"
      }}
      onClick={()=>handleClick('contact','/')}
       className='bg-black dark:text-black text-white py-2 px-5
       rounded-3xl cursor-pointer hover:scale-105 transition-all duration-150 hidden md:grid'>Contact</motion.button>
       
    </div>
  )
}

export default NavbarAnkit;
