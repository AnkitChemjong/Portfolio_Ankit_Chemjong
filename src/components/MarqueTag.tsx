"use client"
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const MarqueeScrollControlled: React.FC = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const arrowControl=useAnimation();
  const arrowControl2=useAnimation();
  const directionRef = useRef<number>(1);
  const MotionArrow=motion(FaArrowRight);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY;

      directionRef.current = delta > 0 ? 1 : -1;


      controls.start({
        x: [0, directionRef.current * 1000],
        transition: {
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        },
       
      });
      controls2.start({
        x: [0, -directionRef.current * 1000],
        transition: {
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        },
       
      });
      arrowControl.start({
        rotate: directionRef.current === 1 ? 0 : 180,
        transition: { duration: 1, ease: "easeInOut" },
      });
      arrowControl2.start({
        rotate: -directionRef.current === 1 ? 0 : 180,
        transition: { duration: 1, ease: "easeInOut" },
      });
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [controls]);

  const handleAnimationStop=()=>{
    arrowControl.stop();
    controls.stop();
    controls2.stop();
  }
  const handleAnimationStart=()=>{
      controls.start({
        x: [0, directionRef.current * 1000],
        transition: {
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        },
      });
      controls2.start({
        x: [0, -directionRef.current * 1000],
        transition: {
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        },
      });
  }

  const handleNavigation=(id:string)=>{
    const navigation = document.getElementById(id);
    if (navigation) {
      navigation.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    
    <div
    onMouseEnter={handleAnimationStop}
    onMouseLeave={handleAnimationStart}
    className="overflow-hidden w-full h-fit py-5 bg-black flex flex-col items-center gap-10
    -rotate-3">
      <motion.div
        animate={controls}
        // Tailwind handles base transform, Framer Motion overrides with dynamic `x`
        className="flex transform -translate-x-300 whitespace-nowrap text-white text-xl"
      >
         {/* {"🚀 Welcome to the Marquee Effect ".repeat(10)} */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="flex items-center gap-2 mx-4">
            🚀 I AM OPEN FOR WORK  <MotionArrow animate={arrowControl} />
          </span>
        ))}
      </motion.div>

      <motion.div
        animate={controls2}
        // Tailwind handles base transform, Framer Motion overrides with dynamic `x`
        className="flex transform -translate-x-300 whitespace-nowrap text-white text-xl "
      >
         {/* {"🚀 Welcome to the Marquee Effect ".repeat(10)} */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="flex items-center gap-2 mx-4">
            🚀 <button onClick={()=>handleNavigation("contact")} className="cursor-pointer hover:text-blue-700 z-10">CONTACT ME</button>   <MotionArrow animate={arrowControl2} />
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeScrollControlled;
