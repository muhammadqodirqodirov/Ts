import React from 'react'
import { Healthy1 } from '@/public/assets/healthy1'
import { Healthy2 } from '@/public/assets/healthy2'
import { Healthy3 } from '@/public/assets/healthy3'
import { Healthy4 } from '@/public/assets/healthy4'
import "./main-healthy.css"
import { Line1 } from './icons/line1'
import { Line2 } from './icons/line2'
import { Line3 } from './icons/line3'
import { Line4 } from './icons/line4'
export const HealthyMeal = () => {
  return (
    <section className="mb-32 bg-bg-color py-5" >
        <div className="container mx-auto max-w-max-helathy-w flex relative py-9  ">
           <div className='flex wrap-healthy items-center justify-center w-full'>
           <div className="res-healty-line absolute stroke-4 left-0" style={{ top: "-14%", stroke: "#A596FF"}}>
                <Healthy1/>
            </div>
            <div className="res-healty-line stroke-4 absolute left-0" style={{  top: "-13%", stroke: "#A596FF"}}>
                <Healthy2/>
            </div>
            <div className='flex  items-center text-center max-w-max-healty justify-between'>
           <div className='res-healthy flex gap-24'>
           <div className="text-center max-w-max-healthy-c  w-full" >
                <h3 className="res-healthy-title title1 mb-3 font-bold text-white" style={{ fontFamily: "Public Sans", fontSize: "43.2px", lineHeight: "54px",}}>
                10K+
                </h3>
                <p className="res-healthy-text text-sm font-medium text-eight" style={{fontFamily: "Inter", maxWidth:"137px" }}>
                Satisfied Costumers All Great Over The World 
                </p>
            </div>
                <span className='res-healthy-span w-px h-24 bg-bg-span-top' style={{ opacity: "0.15"}}/>
            <div className='max-w-max-healthy-c w-full'>
                <h3 className="res-healthy-title mb-3 font-bold text-white" style={{fontFamily: "Public Sans", fontSize: "43.2px", lineHeight: "54px",}}>
                4M
                </h3>
                <p className="res-healthy-text text-sm font-medium w-48 text-eight" style={{fontFamily: "Inter",  }}>
                Healthy Dishes Sold Including Milk Shakes Smooth 
                </p>
            </div>
            <span  className='res-healthy-span w-px h-24 bg-bg-span-top' style={{  opacity: "0.15"}}/>

            <div className='max-w-max-healthy-c w-full'>
                <h3 className="res-healthy-title mb-3 font-bold text-white" style={{fontFamily: "Public Sans", fontSize: "43.2px", lineHeight: "54px"}}>
                99.99%
                </h3>
                <p className="res-healthy-text text-sm font-medium w-48 text-eight" style={{ fontFamily: "Inter"}}>
                Reliable Customer Support We Provide Great Experiences
                </p>
            </div>
           </div>
            </div>
            <div className="res-healty-line absolute" style={{strokeWidth: "4.017px", right:"0%", top: "-12%", stroke: "#A596FF"}}>
                <Healthy3/>
            </div>
            <div className="res-healty-line absolute" style={{strokeWidth: "4.017px", right:"0%", top: "-12%", stroke: "#A596FF"}}>
                <Healthy4/>
            </div>
           <div className='res-liness line1 absolute'>
                <Line1/>
           </div>
           <div className='res-liness line2 absolute'>
                <Line2/>
           </div>
           <div className='res-liness line3 absolute'>
                <Line3/>
           </div>
           <div className='res-liness line4 absolute'>
                <Line4/>
           </div>
           </div>
        </div>
    </section>
  )
}
