"use client"
import React, { useState,useEffect, useRef } from 'react';
import {motion} from 'framer-motion';
import { BsMenuApp } from "react-icons/bs";
import { BsMenuAppFill } from "react-icons/bs";
import { useClickAway } from "react-use";


const NavbarAnkit = () => {
 const [path,setPath]=useState("/");
 //console.log(path);
 const [scrolled, setScrolled] = useState(false);
 const [showNav, setShowNav] = useState(false);
 const navRef=useRef<HTMLDivElement>(null);

 const MotionBsMenuAppFill=motion(BsMenuAppFill);
  const MotionBsMenuApp=motion(BsMenuApp);

 useClickAway(navRef, () => {
  if(!showNav) return;
  setShowNav(false);
});
  const toggleNav = () => {
    if(!showNav) {
      setShowNav(true);
    }else{
      setShowNav(false);
    }
  };
  console.log(showNav);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className={`flex flex-row fixed justify-evenly items-center z-40 top-0 w-screen 
      h-fit py-5 ${scrolled? 'bg-amber-200':'bg-transparent' }
    shadow-md`}>
      <motion.h1
      initial={{opacity:0, y:20}}
      animate={{opacity:1,y:0}}
      transition={{
        duration:0.5,
         ease: "easeOut"

      }} 
       onClick={()=>handleClick('home','/')}
      className='text-2xl lg:text-3xl font-semibold shrink-0 cursor-pointer'>Ankit <span className='text-3xl lg:text-4xl font-bold shrink-0'>C</span></motion.h1>
      <ul className='flex-row justify-center items-center md:space-x-6 lg:space-x-16 hidden md:flex'>
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
      <div>

      </div>
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
       <div
       ref={navRef}
       className='md:hidden'>
        {
          showNav? <MotionBsMenuAppFill
          initial={{opacity:0, y:20}}
          animate={{opacity:1,y:0}}
          transition={{
            duration:0.5,
             ease: "easeOut"
    
          }} 
           onClick={toggleNav} className='md:hidden block text-3xl cursor-pointer'/>
          :<MotionBsMenuApp
          initial={{opacity:0, y:20}}
      animate={{opacity:1,y:0}}
      transition={{
        duration:0.5,
         ease: "easeOut"

      }} 
           onClick={toggleNav} className='md:hidden block text-3xl cursor-pointer'/>
        }
       {
         showNav &&
        <motion.nav
        initial={{opacity:0, x:20}}
        animate={{opacity:1,x:0}} 
        exit={{opacity:0,x:20}}
        transition={{
          duration:0.5,
           ease: "easeOut"
        }}
        className='w-1/2 h-fit flex flex-col justify-center items-center
        gap-4 md:hidden absolute top-20 rounded-2xl py-5 
         right-5 bg-amber-200'>
        {/* Mobile nav */}
        <ul
        className='flex-row justify-center items-center space-y-4 md:space-x-6 lg:space-x-16'>
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
                    <li onClick={()=>{handleClick(items?.path,items?.path)
                    toggleNav();
                    }} className=' font-semibold cursor-pointer hover:text-amber-500 transition-all duration-150' key={index}>{items?.name}</li>
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
       className='bg-black w-fit dark:text-black text-white py-2 px-5
       rounded-3xl cursor-pointer hover:scale-105 transition-all duration-150'>Contact</motion.button>
       </motion.nav>
       }
       </div>
    </div>
  )
}



export default NavbarAnkit;
