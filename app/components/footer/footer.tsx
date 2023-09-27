import React from 'react'
import { Logo } from '@/app/assets/icon/logo'
import { Instagram } from './icons/instagram'
import { InIcon } from './icons/in'
import { Facebook } from './icons/facebook'
import { Twitter } from './icons/twitter'
import "./main-footer.css"
export const Footer = () => {
  return (
    <footer className='pt-24 pb-24' style={{borderBottom:"1px solid #818181",  }}>
        <div className="res-big-footer container max-w-max-footer mx-auto pl-24 pr-24 pt-24 pb-20">
          <div >
            <div className="mb-7 flex items-center ">
            <Logo/>
            <p className="ml-3.5 text-3xl font-semibold " style={{ color:"#6C5FBC", fontFamily: "Poppins"}}>
            eatly
            </p>
            </div>
          </div>

          <div className="flex mt-14 items-center justify-between ">
            <div className="text-base font-medium" style={{color:"#999", fontFamily: "Inter"}}>
            © 2023 EATLY All Rights Reserved.
            </div>

            <div className='flex gap-5'>
              <div className='hover:text-2xl hover:shadow-shadows'><Instagram/></div>
              <div><InIcon/></div>
              <div><Facebook/></div>
              <div><Twitter/></div>
            </div>
          </div>
        </div>
        
        
        
        <div className='res-footer container mx-auto'>
        <div className=" justify-between  flex px-7 max-w-max-footer-res">
          <div className='max-w-max-footer-res w-full' style={{borderBottom:"1px solid #818181", width:"100%" }}>
            <div className="mb-7 flex items-center ">
            <Logo/>
            <p className="ml-3.5 text-3xl font-semibold " style={{ color:"#6C5FBC", fontFamily: "Poppins"}}>
            eatly
            </p>
            </div>
          </div>
            <div className='flex gap-5'>
              <div className='hover:text-2xl hover:shadow-shadows'><Instagram/></div>
              <div><InIcon/></div>
              <div><Facebook/></div>
              <div><Twitter/></div>
            </div>
          </div>

          <div className="flex mt-14 items-center justify-center ">
            <div className="text-base font-medium" style={{color:"#999", fontFamily: "Inter"}}>
            © 2023 EATLY All Rights Reserved.
            </div>
        </div>
          


        </div>
    </footer>
  )
}
