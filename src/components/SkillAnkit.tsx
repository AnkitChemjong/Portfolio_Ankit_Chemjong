import React from 'react'
import Image from 'next/image';

const SkillAnkit = () => {
  return (
    <div id='skill' className="w-screen h-fit text-center md:px-48 px-10 md:py-10 ">
<h1 className="title md:text-2xl text-xl font-bold mb-6">SKILL</h1>
<div className="relative w-full h-full flex flex-col justify-center items-center md:mt-10 md:right-0 right-20 ">
  <div className="relative left-40 md:left-80 w-40 h-9 md:w-80 md:h-14 
  bg-amber-100 rounded-b-sm border-2 border-b-fuchsia-950 flex items-center justify-center space-x-10
  shadow-2xl">
      <h1 className="md:text-base font-semibold text-xm">
      MongoDB
    </h1>
    <Image src="/image/mongo.png" alt=""  className="md:w-10 md:h-10 w-6 h-6"/>
  </div>
  <div className="relative left-30 md:left-60 w-40 h-9 md:w-80 md:h-14 bg-amber-100 
  rounded-b-sm border-2 border-b-fuchsia-950 flex items-center justify-center space-x-10
  shadow-2xl">
     <h1 className="md:text-base font-semibold text-xm">
      Express.js
    </h1>
    <Image src="/image/express.png" alt=""  className="md:w-10 md:h-10 w-6 h-6"/>
  </div>
  <div className="relative left-20 md:left-40 w-40 h-9 md:w-80 md:h-14 
  bg-amber-100 rounded-b-sm border-2 flex border-b-fuchsia-950 items-center justify-center space-x-10
  shadow-2xl">
 <h1 className="md:text-base font-semibold text-xm">
      React.js
    </h1>
    <Image src="/image/react.png" alt=""  className="md:w-10 md:h-12 w-6 h-6"/>
  </div>
  <div className="relative left-10 md:left-20 w-40 h-9 md:w-80 md:h-14 
  bg-amber-100 rounded-b-sm border-2 flex border-b-fuchsia-950 items-center justify-center space-x-10
  shadow-2xl">
     <h1 className="md:text-base font-semibold text-xm">
      Node.js
    </h1>
    <Image src="/image/node.png" alt=""  className="md:w-10 md:h-10 w-6 h-6"/>
  </div>
  <div className="relative md:w-80  w-40 h-9 md:h-14 bg-amber-100 rounded-b-sm border-2 
  border-b-fuchsia-950 items-center flex justify-center space-x-10
  shadow-2xl">
     <h1 className="md:text-base font-semibold text-xm">
      MySQL
    </h1>
    <Image src="/image/mysql.png" alt=""  className="md:w-10 md:h-10 w-6 h-6"/>
  </div>
</div>
</div>
  )
}

export default SkillAnkit
