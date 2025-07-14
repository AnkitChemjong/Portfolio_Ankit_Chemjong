import React, { useState,useRef } from 'react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    inquiryType: '',
    email: '',
    acceptedTerms: false
  });
  const formDataRef=useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    try{
       await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICEID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID!,
        formDataRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY!
       ).then(()=>{
        toast.success("Email send successfully.");
        setFormData({
          name: '',
          inquiryType: '',
          email: '',
          acceptedTerms: false
        });
       }).catch((error:any)=>{
        console.log(error);
      toast.error(error.message||"Error on submitting the form try again.")
       })

    }
    catch(error:any){
    console.log(error);
      toast.error(error.message||"Error on submitting the form try again.")
    }
  };

  return (
    <div id="contact" className='w-full  p-8 font-sans'>
      <div className='max-w-2xl mx-auto'>
        <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
          <div className='p-8'>
            <h1 className='text-2xl font-bold mb-2 text-gray-800'>Schedule an <span className='text-3xl md:text-4xl text-amber-500'>Appointment</span></h1>
            <p className='text-gray-500 mb-6'>Let's discuss how we can work together</p>
            
            <form onSubmit={handleSubmit} ref={formDataRef} className='space-y-6'>
              <div className='space-y-1'>
                <p className='text-gray-700'>
                  Hey, my name is{' '}
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='border-b-2 border-gray-300 focus:border-amber-500 px-2 py-1 focus:outline-none bg-transparent transition-all duration-200 w-40'
                    required
                  />{' '}
                  and I'm looking for{' '}
                  <select
                    name='inquiryType'
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className='border-b-2 border-gray-300 focus:border-amber-500 px-2 py-1 focus:outline-none bg-transparent appearance-none transition-all duration-200'
                    required
                  >
                    <option value=''>Select</option>
                    <option value='design'>Design Services</option>
                    <option value='consultation'>Consultation</option>
                    <option value='other'>Other</option>
                  </select>.
                </p>
              </div>

              <div className='space-y-1'>
                <p className='text-gray-700'>
                  Get in touch with me at{' '}
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your@email.com'
                    className='border-b-2 border-gray-300 focus:border-amber-500 px-2 py-1 focus:outline-none bg-transparent transition-all duration-200 w-56'
                    required
                  />!
                </p>
              </div>

              <div className='flex items-start space-x-3 pt-2'>
                <input
                  type='checkbox'
                  name='acceptedTerms'
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                  className='mt-1 h-5 w-5 cursor-pointer text-amber-600 focus:ring-amber-500 border-gray-300 rounded'
                  required
                />
                <span className='text-sm text-gray-600'>I accept all terms and conditions</span>
              </div>

              <div className='pt-4'>
                <button
                  type='submit'
                  className='w-full bg-gradient-to-r cursor-pointer from-amber-500 to-amber-600 text-white py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-medium text-center shadow-md hover:shadow-lg'
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
          
          <div className='bg-gray-50 px-8 py-4 border-t border-gray-200'>
            <p className='text-xs text-gray-500 text-center'>
              We'll respond within 24 business hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;