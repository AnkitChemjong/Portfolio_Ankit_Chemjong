
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { motion } from "motion/react"
  const MotionCard = motion(Card);


  const MotionProgress = ({ value }: { value: number }) => {
    return (
      <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-green-600"
        />
      </div>
    );
  };
const Skill = () => {
    const skills = [
        {
          name: "Javascript",
          level: 90,
          image: "https://img.icons8.com/color/96/javascript.png"
        },
        {
          name: "React.js (Vite)",
          level: 90,
          image: "https://img.icons8.com/plasticine/100/react.png"
        },
        {
          name: "Next.js",
          level: 80,
          image: "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png"
        },
        {
          name: "Node.js (Express.js)",
          level: 90,
          image: "https://img.icons8.com/fluency/96/node-js.png"
        },
        {
          name: "MongoDB",
          level: 90,
          image: "https://img.icons8.com/color/96/mongodb.png"
        },
        {
          name: "MySQL",
          level: 90,
          image: "https://img.icons8.com/color/96/mysql-logo.png"
        },
        {
          name: "PostgreSQL",
          level: 80,
          image: "https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg"
        },
        {
          name: "C# (.NET)",
          level: 50,
          image: "https://img.icons8.com/color/96/c-sharp-logo.png"
        },
        {
          name: "Docker",
          level: 70,
          image: "https://img.icons8.com/fluency/96/docker.png"
        },
        {
          name: "Figma",
          level: 70,
          image: "https://img.icons8.com/color/96/figma--v1.png"
        },
        {
          name: "Redis",
          level: 70,
          image: "https://img.icons8.com/fluency/96/redis.png"
        },
        {
          name: "GraphQL",
          level: 70,
          image: "https://img.icons8.com/color/96/graphql.png"
        }
      ];
      
  return (
    <div id='skill' className='flex flex-col text-center w-screen h-fit py-10 p'>
        <h1 className='text-3xl font-bold'>MY <span className='text-green-900'>SKILLS</span> </h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2 py-4 md:px-20 md:py-10'>
            {
                skills.map((item,index)=>{
                    return(
                        <MotionCard
                         whileTap={{ scale: 0.80 }}
                         key={index} className='flex flex-col  hover:scale-110 cursor-pointer transition-all duration-150 space-y-5 justify-center items-center text-center'>
                        <CardHeader className='w-full'>
                          <img className=' w-1/3 mx-auto' src={item?.image} alt="icon" />
                          <CardTitle>{item?.name}</CardTitle>
                        </CardHeader>
                          <CardContent className="w-full px-4">
<MotionProgress value={item?.level ?? 0} />

  <p className="text-sm mt-2">{item.level}%</p>
</CardContent>

        
                      </MotionCard>
                    )
                })
            }

        </div>
      
    </div>
  )
}

export default Skill
