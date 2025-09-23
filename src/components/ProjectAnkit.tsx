import Link from 'next/link';
import React from 'react';

const ProjectAnkit = () => {
  return (
    <div id='project' className='relative w-full flex flex-col items-center py-40 px-4 bg-white'>
      <div className='w-full max-w-6xl'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-20'>
          {/* Left Text Content */}
          <div className='md:w-1/2 mb-10 md:mb-0'>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              All Creative Works,<br />
              <span className="text-gray-500">Selected projects.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-md">
              List of application web areas for new users to<br />
              adaptive resources.
            </p>
          </div>

          {/* Right Rotated Box */}
          <div className=' md:w-1/2 flex justify-center md:justify-end '>
            <div className='w-80 h-80  md:w-96 md:h-96 bg-gray-100 flex-col
            border-2 border-amber-950 hover:rotate-6 transition-all duration-150
             rounded-2xl -rotate-12 flex items-center group justify-center cursor-pointer
             shadow-lg relative'>
             <div className="absolute w-full h-full rounded-xl bg-[url('/image/epathsala.PNG')] 
               bg-no-repeat bg-center bg-cover"></div>
              <h3 className="text-xl font-semibold mb-1 relative opacity-0 group-hover:opacity-100 transition-all 
            group-hover:top-0 top-50 duration-300 ease-in-out">Efficient Pathsala</h3>
            <Link href="#">
              <p className="text-gray-950 mb-4 relative opacity-0 group-hover:opacity-100 transition-all 
            group-hover:top-0 top-50 duration-300 ease-in-out">E-Learning Platform.</p>
            </Link>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center'>
          <div className='bg-gray-100 relative rounded-xl p-6 w-80 h-80 md:h-80 md:w-80 lg:w-96 lg:h-96 
          rotate-12 md:-rotate-12 shadow-lg hover:rotate-6 transition-all duration-150 group flex flex-col justify-center items-center border-2 border-amber-950
           cursor-pointer'>
            <div className="absolute w-full h-full rounded-xl bg-[url('/image/jjnepali.PNG')] 
            bg-no-repeat bg-center bg-cover"></div>
            <h3 className="text-xl font-semibold mb-1 relative opacity-0 group-hover:opacity-100 transition-all 
            group-hover:top-0 top-50 duration-300 ease-in-out">JJ Nepali Removal</h3>
            <p className="text-gray-950 mb-4 relative opacity-0 group-hover:opacity-100 transition-all 
            group-hover:top-0 top-50 duration-300 ease-in-out">Shipment Company.</p>
          </div>

          <div className='bg-gray-100 relative rounded-xl  p-6 w-80 h-80 md:h-80 md:w-80 lg:w-96 lg:h-96 
          -rotate-12 md:rotate-12 flex flex-col justify-center items-center cursor-pointer
          shadow-lg hover:rotate-6 transition-all duration-150 mt-20 md:mt-0 group border-2 border-amber-950'>
            <div className="absolute w-full h-full rounded-xl bg-[url('/image/futuristic.PNG')] 
            bg-no-repeat bg-center bg-cover"></div>
            <h3 className="text-xl font-semibold mb-1 relative opacity-0 group-hover:opacity-100 transition-all 
            group-hover:top-0 top-50 duration-300 ease-in-out">Futuristic Website</h3>
            <Link href="https://futuristic-website-cyan.vercel.app/">
            <p className="text-gray-950 mb-4 relative opacity-0 group-hover:opacity-100 transition-all 
            group-hover:top-0 top-50 duration-300 ease-in-out">Smooth Animation.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnkit;