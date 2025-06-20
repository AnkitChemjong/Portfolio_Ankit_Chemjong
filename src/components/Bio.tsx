import { FaArrowAltCircleDown } from "react-icons/fa";
import { toast } from "sonner";
const Bio = () => {

  const handleCV=(type:string)=>{
    try{
      const a=document.createElement('a');
      a.href="./document/Ankit Chemjong CV.pdf";
      if(type=="review"){
        a.setAttribute('target',"_blank");
      }
      if(type=="download"){
        a.setAttribute('download',"AnkitCV.pdf");
      }
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      toast.success("Successfully CV downloaded...")
    }
    catch(error){
      if (error instanceof Error) {
        console.log(error.message);
        toast.error(error.message);
      } else {
        console.log("Unexpected error", error);
        toast.error("An unknown error occurred");
      }
    }
  }
  return (
    <div id='bio' className='w-full h-fit py-5 grid grid-cols-1 md:grid-cols-2 place-items-center px-10'>
        <div className='flex flex-col space-y-2 items-center relative'>
          <div className="flex flex-row justify-center items-center space-x-2 bg-amber-300 py-4 px-10 rounded-3xl z-1 shadow-2xs shadow-amber-950">
            <h1>Ankit Chemjong CV</h1>
            <div className="relative group">
            <FaArrowAltCircleDown onClick={()=>handleCV("download")} className="group w-4 h-4 cursor-pointer  hover:scale-110 transition-all duration-200"/>
          <div className="absolute bg-black p-2 rounded-2xl 
                before:content-[''] before:absolute -right-10
                before:-bottom-1 before:rotate-39 before:right-2
                group-hover:-top-16
                group-hover:opacity-100 transition-all duration-300
                before:w-4 before:h-4 before:bg-black before:-z-3 opacity-0 -top-6">
             <h1 className="text-white text-sm ">download</h1>
           </div>
            </div>
          
          </div>
        <button onClick={()=>handleCV("review")}className="w-fit py-2 px-4 bg-green-700 rounded-full border-2 border-b-blue-300 cursor-pointer hover:bg-amber-500 hover:scale-110 transition-all duration-200">Review</button>
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
