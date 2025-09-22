import React from 'react'

const BioAnkit = () => {
  return (
    <div id='about' className="relative w-screen min-h-fit md:h-fit 
    text-center mt-10 md:px-48 px-6 py-10">
    <h1 className="title md:text-2xl text-xl font-bold mb-6">KNOW ME</h1>
  
    <div className="text-left md:text-right mb-10">
      <h1 className="text-base font-semibold">
        ANKIT <span className="text-4xl lg:text-6xl text-amber-900">CHEMJONG</span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between md:gap-24 lg:space-x-0 items-center md:mt-0 mt-10">
      <div className="bg-amber-200 w-[300px] h-[250px] lg:w-[500px] md:h-[300px] md:w-[400px] lg:h-[400px] 
      rounded-bl-4xl rounded-tr-4xl -rotate-12 shadow-xl shadow-blue-400">
  
      </div>
      <div className="md:w-1/3 h-1/3 w-full  flex flex-wrap text-start md:mt-0 mt-2">
      <p className="tracking-normal mt-4 text-sm leading-relaxed md:text-base paragraph">
        I'm passionate about <span className="text-4xl lg:text-5xl text-amber-900 font-bold">technology</span> and always eager to learn more.
        I enjoy exploring how things work behind the scenes and love building real-world projects.
        My goal is to keep growing in the tech field and use my skills to create meaningful solutions.
      </p>
      </div>
      </div>
    </div>
  </div>
  )
}

export default BioAnkit
