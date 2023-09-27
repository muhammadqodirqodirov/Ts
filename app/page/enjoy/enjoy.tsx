import { enjoyBigimg } from '@/public'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { enjoySmallimg } from '@/public'
import "./main-enjoy.css"
import { Grafic } from '@/public/assets/grafic'
import { GraficM } from '@/app/assets/icon/grafic'
export const Enjoy = () => {
  return (
    <section className="mb-36 max-w-7xl " style={{margin:"0 auto"}} >
        <div className="container conwrap mx-auto flex justify-between pb-36 ">
            <div className='res-comp'>
                <div>
                <div className="flex mb-4 items-center res-top" >
                    <span className="w-14 h-0.5 mr-5 res-top-sapn bg-bg-span-top"></span>
                    <p className="text-sm font-semibold res-top text-second" style={{fontFamily: "Poppins",}}>OVER 1000 USERS</p>
                </div>
                <h1 className="lg:w-96 font-semibold mb-4 enjoy-title  text-fourty text-text-enjoy leading-height-enjoy" style={{fontFamily: "Poppins", letterSpacing: "-3px", maxWidth:"567px"}}>
                Enjoy Foods All Over The <span style={{color:"#5C4EAE"}}>World</span>
                </h1>
                </div>
                <div>
                <p className="text-lg mb-14 font-normal opacity-70" style={{color: "#676767", fontFamily: "Inter", maxWidth:"499px"}}>
                EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span className='text-fourth font-medium'>$20 bonus.</span>
                </p>
                <Link href="/dishes" className="font-medium py-5 capitalize rounded-xl px-8 bg-bg-color text-base text-white" style={{ fontFamily: "Poppins", letterSpacing: "0.163px", }}>
                Get Started
                </Link>
                </div>
            </div>

            <div className="relative res-relative-img" >
                <div className='res-image'>
                <Image style={{border:"linear-gradient(137deg, #6C5FBC 4.83%, #5144A0 98.22%)"}} src={enjoyBigimg} alt="Logo" />
                </div>
                <div className="flex res-img-w items-center rounded-2xl absolute  bg-white top-top-r left-left-r" style={{ maxWidth:"330px", }}>
                    <div className='res-img-lit'>
                    <Image className="mr-5" src={enjoySmallimg} alt="img"/>
                    </div>
                    <div className="mr-10">
                        <p className="mb-1.5 font-semibold text-first-color text-base res-title-lit" style={{fontFamily: "Poppins", }}>
                        Chicken Hell
                        </p>
                        <p className="font-medium text-xs text-first-color res-text-lit" style={{fontFamily: "Poppins" }}>
                        On The Way
                        </p>
                    </div>

                    <p className="text-xs res-text-clock font-medium mt-11 text-second" style={{ fontFamily: "Poppins", }}>
                    3:09 PM
                    </p>

                </div>
                <div className='absolute top-2/4 mt-4 -left-4 res-grafic'>
                    <Grafic/>
                </div>
                <div className='absolute res-grafic-m'>
                    <GraficM/>
                </div>
            </div>
        </div>
    </section>
  )
}
