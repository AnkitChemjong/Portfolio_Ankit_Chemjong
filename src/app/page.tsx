"use client"
import NavbarAnkit from "@/components/NavbarAnkit";
import MarqueeScrollControlled from "@/components/MarqueTag";
import SkillAnkit from "@/components/SkillAnkit";
import BioAnkit from "@/components/BioAnkit";
import ProjectAnkit from "@/components/ProjectAnkit";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Image from 'next/image';
import { motion, useTransform, useScroll } from "framer-motion";


export default function Home() {
  const { scrollY } = useScroll(); // get vertical scroll value

  // Map scrollY to movement of image div
  const y = useTransform(scrollY, [0, 600], [0, 900]); // moves down as you scroll
  const x = useTransform(scrollY, [0, 600], [0, 100]); // optional horizontal shift
  const scale = useTransform(scrollY, [0, 600], [1, 1.1]); // optional zoom
  return (
    <div id="home" className="overflow-x-hidden">
     <NavbarAnkit/>
    <div className="w-screen h-fit lg:h-screen relative bg-gradient-to-tr from-blue-50 to-amber-100 mt-19 md:mt-20 md:px-48 z-0 px-10 py-2 md:mb-2 overflow-y-auto">
     <div className="flex flex-row w-full justify-center items-center space-x-2 md:space-x-20 lg:space-x-35  md:mt-10 md:mb-10 mb-2">
      <h1 className="dancing-script md:text-8xl text-4xl">Hey,</h1>
      <h1 className="dancing-script md:text-8xl text-4xl">there</h1>
     </div>
      <motion.div
      style={{ y, x, scale }}
       className="absolute z-30 w-fit h-fit flex justify-center items-center  
   lg:bottom-80 lg:right-112 md:bottom-18 md:right-35">
     <Image  src="/image/me.png" sizes="280rem" width={0} height={0} className="w-1/2 h-1/2"   alt="" />
      </motion.div>
     <div className="relative flex flex-row sm:justify-between lg:justify-between 
     md:right-27 lg:right-14 md:space-x-28 lg:space-x-16 md:mt-0 mt-72">
      <div className="z-3">
      <h1 className="title md:text-6xl text-3xl">I AM</h1>
      <h1 className="title md:text-6xl text-3xl">ANKIT CHEMJONG</h1>
      </div>
      <div className="z-3 md:space-y-10">
        <p className="paragraph md:text-base text-sm">Full-stack development using the MERN stack has <br/>
           been specialized in, with expertise applied across<br/>
            both frontend and backend solutions.</p>
      <div className="flex md:flex-row flex-col space-x-4 md:items-center md:justify-center">
        <div>
        <h1 className="title md:text-4xl text-2xl">PASSIONATE</h1>
        <h1 className="title md:text-4xl text-2xl">WEB</h1>
        <h1 className="title md:text-4xl text-2xl">DEVELOPER</h1>
        </div>
        <button className='bg-black dark:text-black text-white py-2 px-5
        md:shrink-0
       rounded-3xl cursor-pointer hover:scale-105 transition-all duration-150 w-fit'>Hire Me</button>
            </div>
      </div>
     </div>
    </div>
   <MarqueeScrollControlled/>
  <BioAnkit/>
<SkillAnkit/>
<ProjectAnkit/>
<Contact/>
<Footer/>
    </div>
  );
}
