import React from 'react'

const Bio = () => {
  return (
    <div className='w-full h-fit py-10 grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className=''>
        <h1 className='text-3xl font-bold'>Hello, I Am <span className='text-green-900'>Ankit,</span></h1>
            <p className='text-sm font-semibold leading-relaxed'>I'm a passionate and dedicated web developer with a strong foundation <br/>
                 in the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy<br/>
                  building clean, user-friendly interfaces and writing efficient, <br/>
                  scalable backend systems. My focus is on creating real-world applications <br/>
                  that solve problems and provide value to users. Whether working independently <br/>
                  or collaborating in a team, I’m always eager to learn new technologies and grow <br/>
                  as a developer.</p> 
        </div>
        <div className='flex flex-col '>
            <h1 className='text-3xl font-bold'>Hello, I Am <span className='text-green-900'>Ankit,</span></h1>
            <p className='text-sm font-semibold leading-relaxed'>I'm a passionate and dedicated web developer with a strong foundation <br/>
                 in the MERN stack (MongoDB, Express.js, React.js, Node.js). I enjoy<br/>
                  building clean, user-friendly interfaces and writing efficient, <br/>
                  scalable backend systems. My focus is on creating real-world applications <br/>
                  that solve problems and provide value to users. Whether working independently <br/>
                  or collaborating in a team, I’m always eager to learn new technologies and grow <br/>
                  as a developer.</p> 
            <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Name: Ankit Chemjong</p>
                <p className='font-semibold'>Age: 20 Yrs</p>
                <p className='font-semibold'>Address: Chaubise-7, Dhankuta</p>
                <p className='font-semibold'>Phone: 9825083815</p>
                <p className='font-semibold'>Email: npp.rasik@gmail.com </p>
            </div>
        </div>
    </div>
  )
}

export default Bio
