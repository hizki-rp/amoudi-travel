"use client"
import { useEffect } from 'react'



const WhatsappLive = () => {

  const whatsappNumber = "+251911043323";
  const baseUrl = "https://api.whatsapp.com/send/";
  const encodeMessage = "Can i get more info on your services?"
  
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodeMessage}&type=phone_number&app_absent=0`;


useEffect(() => {
  const handleScroll = () => {
    const whatsappLinkElement = document.querySelector(".whatsapp-link")
    if (window.scrollY > 100) {
      whatsappLinkElement?.classList.add("visible");
    } else {
      whatsappLinkElement?.classList.remove("visible");
    }
  };

  const checkScrollVisibility = () => {
    const whatsappLinkElement = document.querySelector(".whatsapp-link")
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollHeight > clientHeight) {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    } else {
      whatsappLinkElement?.classList.add("visible");
    }
  };

     window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  };

}, [])

  return (
    <div>
      <a className="whatsapp-link relative" href={whatsappLink} target='_blank'>

        
        <span className='absolute left-[7px] top-[7px] -z-50 size-10'>
          <span className='flex size-full justify-center items-center animate-ping rounded-full bg-green-600 opacity-75'>

          </span>
        </span>
        <img src="/whatsapp-addin.png" alt="" width={60} height={60} className=' whatsapp-icon z-50'/>
      </a>
    </div>
  )
}

export default WhatsappLive