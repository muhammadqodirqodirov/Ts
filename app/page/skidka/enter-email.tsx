import { cartFood } from '@/public'
import Image from 'next/image'
import React from 'react'
import "./main-email.css"
export const EnterEmail = () => {
  return <section>
      <div className='max-w-w-page bg-no-repeat  pl-7 pr-7 emailWrapper container mx-auto mb-24 bg-bg-image'  style={{ borderRadius:"30px"}}>
           <div className='flex justify-between email-res max-w-content-max'>
           <div className='pt-9 pl-16 emailIN pb-14 max-w-md w-full' >
                <h2 className='text-white emailTitle text-7xl font-extrabold mb-3' >
                GET 50%
                </h2>
                <div className='max-w-md'>
                <form className='max-w-md inputEmail w-full relative'>
                <input className='pl-5 w-full py-5 emailDT rounded-xl bg-white opacity-80 '  style={{   boxShadow: "0px 7.25333px 45.33334px 0px rgba(0, 0, 0, 0.10)"}} type="text" placeholder=' Enter Your Email Address' />
                <input className='pl-5 w-full py-5 emailMObi rounded-xl bg-white opacity-80 '  style={{   boxShadow: "0px 7.25333px 45.33334px 0px rgba(0, 0, 0, 0.10)"}} type="text" placeholder='Email Address' />
                <button className='emailButton rounded-lg absolute right-2 top-2/4 -mt-7  bg-bg-color w-32 py-4 text-seven text-sm font-medium uppercase'>
                subscribe
                </button>
                </form>
                </div>
            </div>
            <div className='emailImg mt-16' >
              <Image src={cartFood} alt='img'/>
            </div>
           </div>
        </div>
  </section>
}
