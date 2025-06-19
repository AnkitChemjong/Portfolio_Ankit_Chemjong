import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { FiLoader } from "react-icons/fi";

const Contact = () => {
  const [load,setLoad]=useState(false);
  const [data,setData]=useState({
     websiteName:"Ankit Chemjong",
     email:"",
     companyName:"",
     number:"",
     description:""
  });
  const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )=>{
      const {name,files,value}=e.target;
      setData((prev)=>({...prev,[name]:files? files[0]:value}))

  }
  const checkDisable=()=>{
    return Object.values(data).some(value => !value.trim());
  }
  const formToSubmit=useRef(null);
  const handlFormSubmit= async()=>{
    setLoad(true);
    try{
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID, 
        import.meta.env.VITE_EMAILJS_TEMPLATEID, 
        formToSubmit.current,
        import.meta.env.VITE_EMAILJS_PUBLICKEY 
      )
      .then((result) => {
        //console.log(result);
        formToSubmit.current.reset();
        setData({
          websiteName:"Ankit Chemjong",
          email:"",
          companyName:"",
          number:"",
          description:""
        })
        
        toast.success("Message send successfully.");
      }).catch(error=>{
        toast.error(error.message)});
    }
    catch(error){
      toast.error("Something error try again...")
    }
    finally{
      setLoad(false);
    }
  }
  return (
    <div id="contact" className="w-screen h-fit text-center py-20 md:py-10 px-20">
      <h1 className="text-3xl font-bold">
        
        CONTACT <span className="text-green-900">ME</span>
      </h1>
      <div className=" w-full h-fit grid grid-cols-1 md:grid-cols-2 p-2 place-items-center">
        <div className="w-fit h-fit flex flex-col gap-4 p-4">
          <iframe
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5471510967777!2d87.27700497378726!3d26.822544276701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef410b738f5dbf%3A0x59620f1b50510078!2sSami%20Chowk!5e0!3m2!1sen!2snp!4v1750357279259!5m2!1sen!2snp"
          ></iframe>

          <div className="flex flex-col items-start gap-2">
            <p className="font-semibold">Name: Ankit Chemjong</p>
            <p className="font-semibold">Age: 20 Yrs</p>
            <p className="font-semibold">Address: Chaubise-7, Dhankuta</p>
            <p className="font-semibold">Phone: 9825083815</p>
            <p className="font-semibold">Email: npp.rasik@gmail.com </p>
          </div>
        </div>
        <div>
        <h1 className="text-3xl font-bold">
        FEEL FREE TO <span className="text-green-900">REACHOUT</span>
      </h1>
      <form ref={formToSubmit} className="flex flex-col gap-3 items-center mt-2 md:mt-10">
        <input name="websiteName" value={data?.websiteName} className="border-2 border-black rounded-3xl text-center py-1" type="text" readOnly placeholder="Ankit Chemjong" />
        <input name="email" value={data?.email} onChange={handleChange} placeholder="email" className="border-2 border-black rounded-3xl text-center py-1" type="email" />
        <input name="companyName" value={data?.companyName} onChange={handleChange} placeholder="Comapany Name" className="border-2 border-black rounded-3xl text-center py-1" type="text" />
        <input name="number"  value={data?.number} onChange={handleChange} placeholder="Number" className="border-2 border-black rounded-3xl text-center py-1" type="number" />
        <textarea name="description" value={data?.description} onChange={handleChange} placeholder="Description" className="border-2 border-black rounded-3xl text-center py-1 px-2" />
        <button
  type="button"
  disabled={checkDisable()||load}
  onClick={handlFormSubmit}
  className={`bg-amber-500 flex flex-row justify-center items-center space-x-1 rounded-4xl py-2 px-6 transition-all duration-150 ${
    checkDisable()
      ? "bg-gray-400 cursor-not-allowed"
      : "hover:bg-blue-800 hover:scale-110 hover:text-white cursor-pointer"
  }`}
>
  Submit {load && (
              <FiLoader className='w-4 h-4 animate-spin mr-2'/>
            )}
</button>
      </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
