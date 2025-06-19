import React from 'react';


const Navbar = () => {
    const navLinks=["Home","About","Skills","Resume","Project","Contact"]
  return (
    <div className='flex flex-col w-screen h-screen p-4'>
    <div className=' flex w-full h-fit px-10 md:px-20 py-4 justify-between items-center'>
        <div>
            <h1 className='text-3xl font-bold text-green-900'>Ankit Chemjong</h1>
        </div>
        <div className='gap-2 flex'>
         {
            navLinks.map((item:string,index)=>{
                return(
                    <button className="  hover:text-blue-500 font-bold py-2 px-4 cursor-pointer hover:text-" key={index} >
                        {item}
                    </button>
                )
            })
         }
        </div>
      
    </div>
    <div className='flex flex-row w-full h-3/4 items-center justify-evenly '>
     <div className='w-fit h-fit p-4 space-y-4 '>
       <h1 className='text-3xl font-bold text-green-900'>HI THERE,</h1>
       <h1 className='text-3xl font-bold '>I Am Web Developer |</h1>
       <p className='text-sm font-semibold leading-relaxed'>I'm a passionate web developer who enjoys creating responsive, <br/>
        user-friendly websites. I focus on writing clean code, <br/>
        solving real problems, and continuously learning to improve my skills.</p>
        <button className='py-2 px-4 bg-green-700 rounded-full border-2 border-b-blue-300 cursor-pointer
        hover:bg-amber-500 hover:scale-110 transition-all duration-200'>Hire Me</button>
     </div>
     <div>
      <img src="./image/hi.png" alt="profile image" className='md:w-96 md:h-96' />
     </div>
    </div>
    </div>
  )
}

export default Navbar
