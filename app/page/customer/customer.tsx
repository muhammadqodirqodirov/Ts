import { customerImg } from '@/app/assets'
import { CustomerIcon } from '@/app/assets/icon/customer-icon'
import { Line } from '@/app/assets/icon/line'
import { StarIcon } from '@/app/assets/icon/star-icon'
import Image from 'next/image'
import React from 'react'
import "./main-customer.css"
import { TabletLine } from './icon/tabletLine'
import { MobiIcon } from './icon/mobiIcon'
export const Customer = () => {
  return<section className=' mx-auto pr-5 pl-5 mb-44'>
  <h2 className='text-fourth text-5xl title-cust font-semibold text-center mb-20 mt-20' >Customer<span className='text-first-color ml-4'>Say</span></h2>
 <div className='max-w-max-com2 customer-wrap overflow-hidden mx-auto' style={{boxShadow:"0px 1px 100px 1px #D4D4D7"}}>
 <div className='container max-w-max-com customer-in flex gap-24 mx-auto' style={{marginRight:"",}}>
    <div className='  bg-white rounded-2xl ' style={{boxShadow:"0px 1px 100px 1px #D4D4D7"}}>
      <div className='px-11 py-9'>
      <div className='flex items-center  pb-8'>
      <div className='flex gap-5 items-center'>
      <Image src={customerImg} alt='img'/>
       <div style={{width:"130px"}}>
          <h3 className='customer-name'>Alexander R.</h3>
          <p className='customer-text'>01 Year With Us </p>
        </div> 
      </div>
        <div className='ml-14'>
          <CustomerIcon/>
        </div>
      </div>
        <p className='w-customer-text customer-text pb-10'>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
        <StarIcon/>
      </div>
    </div>
    <div className=' relative  h-full bg-white rounded-2xl' style={{boxShadow:"0px 1px 100px 1px #D4D4D7"}}>
      <div className='px-11 py-8'>
        <p className='w-customer-text customer-text pb-10'>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
        <StarIcon/>
      </div>
      <div className='max-w-line-w line w-full  absolute' style={{top:"50%",marginTop:"34%", left:"0"}}><Line/></div>
      <div className='max-w-line-w tabletline w-full  absolute' style={{top:"50%",marginTop:"34%", left:"0"}}><TabletLine/></div>
      </div>
    <div className=' h-full bg-white rounded-2xl' style={{boxShadow:"0px 1px 100px 1px #D4D4D7"}}>
      <div className='px-11 py-9'>
        <p  className='customer-text w-customer-text pb-10'>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
        <StarIcon/>
      </div>
  </div>
    </div>
    <div>
    </div>
 </div>
    <div className='container relative mx-auto bg-white rounded-2xl customermobi pr-6  pl-6 ' style={{boxShadow:"0px 1px 100px 1px #D4D4D7"}}>
      <div className='px-11 py-9'>
      <div className='flex items-center  pb-8'>
      <div className='flex gap-5 items-center'>
      <Image src={customerImg} alt='img'/>
       <div style={{width:"130px"}}>
          <h3 className='customer-name'>Alexander R.</h3>
          <p className='customer-text'>01 Year With Us </p>
        </div> 
      </div>
        <div className='ml-14'>
          <CustomerIcon/>
        </div>
      </div>
        <p className='w-customer-text customer-text pb-10'>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
        <StarIcon/>
      </div>
      <div className='absolute top-3/4 mt-28'>
        <MobiIcon/>
      </div>
    </div>
</section>
}
