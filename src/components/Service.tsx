
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { motion } from "motion/react"
  const MotionCard = motion(Card);

const Service = () => {
    const services=
    [
        {
            name:"Responsive Web Design",
            content:"Creating mobile-friendly, visually appealing websites that adapt to all screen sizes.",
            image:"./image/respon.png"
        },
        {
            name:"Frontend Development",
            content:"Building interactive and user-friendly interfaces using modern library and frameworks (like React and next ).",
            image:"./image/frontend.png"
        },
        {
            name:"Backend Development",
            content:"Developing secure and scalable server-side logic, APIs Integration.",
            image:"./image/backend.png"
        },
        {
            name:"Database Design & Management",
            content:"Design database and manage it properly to get and store data.",
            image:"./image/database.png"
        },
        {
            name:"Testing and Bug Fixing",
            content:"Test frontend and backend errors and fix them.",
            image:"./image/testng.png"
        },
        {
            name:"Time Management ",
            content:"Prioritizing tasks, meeting deadlines, and balancing multiple responsibilities efficiently.",
            image:"./image/team.png"
        },

    ]
  return (
    <div id='service' className='flex flex-col text-center w-screen h-fit py-10 p'>
        <h1 className='text-3xl font-bold'>MY <span className='text-green-900'>SERVICES</span> </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 py-4 md:px-20 md:py-10'>
            {
                services.map((item,index)=>{
                    return(
                        <MotionCard 
                        whileTap={{ scale: 0.80 }}
                        key={index} className='flex flex-col hover:scale-110 cursor-pointer transition-all duration-150 space-y-5 justify-center items-center text-center'>
                        <CardHeader className='w-full'>
                          <img className=' w-1/3 mx-auto' src={item?.image} alt="icon" />
                          <CardTitle>{item?.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{item?.content || "Description coming soon."}</p>
                        </CardContent>
                      </MotionCard>
                    )
                })
            }

        </div>
      
    </div>
  )
}

export default Service
