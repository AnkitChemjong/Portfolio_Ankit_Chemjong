import React from 'react'

const Service = () => {
    const services=
    [
        {
            name:"Responsive Web Design",
            content:"Creating mobile-friendly, visually appealing websites that adapt to all screen sizes."
        },
        {
            name:"Frontend Development",
            content:"Building interactive and user-friendly interfaces using modern library and frameworks (like React and next )."
        },
        {
            name:"Backend Development",
            content:"Developing secure and scalable server-side logic, APIs Integration."
        },
        {
            name:"Database Design & Management"
        },
        {
            name:"Testing and Bug Fixing",
            content:"Test frontend and backend errors and fix them."
        },
        {
            name:"Time Management ",
            content:"Prioritizing tasks, meeting deadlines, and balancing multiple responsibilities efficiently."
        },

    ]
  return (
    <div className='flex flex-col text-center w-screen h-fit py-10 p'>
        <h1 className='text-3xl font-bold'>MY <span className='text-green-900'>SERVICES</span> </h1>
        <div>

        </div>
      
    </div>
  )
}

export default Service
