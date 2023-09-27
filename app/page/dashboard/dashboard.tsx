import Image from 'next/image'
import React from 'react'
import { line, line2, litplat } from '@/public'
import { Down } from '@/public/assets/down'
import { WIcon } from '@/public/assets/iconsw'
import "./main-dashboard.css"
import { Money } from './icon/money'
import { TabLetex } from './icon/tabletex'
export const Dashboard = () => {
  return (
    <section className='container mx-auto mb-28' style={{borderTop:"1px solid #CBCBCB", borderBottom:"1px solid #CBCBCB",}}>
        <div className="dahsboardWrapper flex pr-5 gap-5 pl-5 justify-center mt-24 mb-32 " >
            <div className="w-full dash-top max-w-line-w" >
                <div className='max-w-md'>
                  <div className='max-w-max-dash-res'>
                  <h2 className="dash-title font-bold capitalize mb-12 text-ten text-text-dash w-full" style={{ fontFamily: "Poppins", }}>
                    Control <span className="dash-title capitalize font-bold text-fourth" style={{fontFamily: "Poppins", }}>Purchases</span> Via Dashboard
                    </h2>
                  </div>
                    <div className="flex gap-5 items-center rounded-2xl mb-5 max-w-max-dashboard bg-white" style={{ boxShadow:"0px 4px 9px 1px #ACADB9",}}>
                    <Image src={litplat} alt="img"/>
                    <div>
                        <p className="mb-1.5 text-first-color" style={{ fontFamily: "Poppins", fontSize: "19px", fontWeight: "600", lineHeight: "17px"}}>
                        Chicken Hell
                        </p>
                        <p className="font-medium text-first-color" style={{fontFamily: "Poppins", fontSize: "9.844px", lineHeight: "140%" }}>
                        On The Way
                        </p>
                    </div>

                    <p className="font-medium mt-11 text-second" style={{ fontFamily: "Poppins", fontSize: "10.664px",  lineHeight: "140%"}}>
                    3:09 PM
                    </p>

                    </div>

                    <div className="flex gap-5 max-w-max-dashboard items-center mb-5 rounded-2xl bg-white hover:shadow-shadows">
                    <Image   src={litplat} alt="img"/>
                    <div className="items-center mr-8 justify-between">
                        <p className="mb-1.5 font-semibold" style={{ fontFamily: "Poppins", fontSize: "19px", lineHeight: "140%"}}>
                        Swe Dish
                        </p>
                      <p className="font-medium text-first-color" style={{ fontFamily: "Poppins", fontSize: "9.844px",lineHeight: "140%" }}>
                        Delivered
                        </p>
                    </div>

                    <p className="font-medium mt-11 text-second" style={{ fontFamily: "Poppins", fontSize: "10.664px", lineHeight: "140%",}}>
                    Yesterday
                    </p>

                    </div>

                    <div className="flex max-w-max-dashboard  items-center hover:shadow-shadows rounded-2xl mb-5 bg-white ">
                    <div className='gap-5 flex'>
                    <Image src={litplat} alt="img"/>
                    <div className="mr-5 mt-4">
                        <p className="font-semibold mb-1 text-first-color" style={{fontFamily: "Poppins", fontSize: "19px",  lineHeight: "140%"}}>
                        Fish Hell Veg
                        </p>
                        <p className="font-medium text-thirty" style={{fontFamily: "Poppins", fontSize: "12px", lineHeight: "140%" }}>
                        Cancelled
                        </p>
                    </div>
                    </div>

                    <p className="font-medium mt-11 text-second" style={{fontFamily: "Poppins", fontSize: "10.664px", lineHeight: "140%"}}>
                    Yesterday
                    </p>

                    </div>
                </div>
            </div>
            <div className="dash-down w-full pr-5 max-w-max-premium-text rounded-3xl bg-white" style={{ border: "1.571px solid  #EDF2F7",}}>
                <div className="mt-9 flex justify-between items-center pl-2 mb-9 w-full">
                    <p className=" text-top font-extrabold text-eleven text-title-dash" style={{ fontFamily: "Manrope",}}>
                    Purchases
                    </p>

                    <p className="font-semibold dash-this items-center text-lg flex text-eleven" style={{ fontFamily: "Manrope",}}>
                    This month <span><Down /></span>
                    </p>
                </div>

                <div className="h-36 p-6 items-center ml-10 mb-5 " style={{maxWidth:"458px", borderRadius: "18.847px",border: "1.571px solid #EDF2F7"}}>
                    <div className="flex mb-5 w-full " >
                    <p className="desktop mr-5" >
                    <WIcon/>
                    </p>
                    <p className="tabeltex mr-5" >
                    <TabLetex/>
                    </p>
                    <div className="flex justify-between w-64" >
                       <div>
                       <p className="dash-title-bottom font-extrabold text-eleven text-lg" style={{ fontFamily: "Manrope",}}>
                        Expense
                        </p>
                        <p className="dash-text-bottom font-medium text-twenty text-sm" style={{ fontFamily: "Manrope", }}>
                        Increased By 10%
                        </p>
                       </div>
                    <div>
                    <p className="dash-price-bottom font-extrabold text-eleven text-xl" style={{fontFamily: "Manrope", }}>
                    $409.00
                    </p>
                    </div>
                    </div>
                    </div>
                    <Image src={line} alt="Img"/>
                </div>

                <div className="ml-9 items-center mb-6" style={{maxWidth:"458px", height:"135px",padding: "25.129px", borderRadius: "18.847px",border: "1.571px solid #EDF2F7"}}>
                    <div className="flex mb-5 w-full" >
                    <p className="mr-5 font-semibold text-first-color">
                    <Money/>
                    </p>
                    <div className="flex justify-between w-64">
                       <div>
                       <p className="dash-title-bottom font-extrabold text-eleven text-lg" style={{fontFamily: "Manrope",}}>
                        Vocher Usage
                        </p>
                        <p className="dash-text-bottom font-medium text-tweny text-sm text-twenty" style={{fontFamily: "Manrope",}}>
                        Increased By 5%
                        </p>
                       </div>
                   <div>
                   <p className="dash-price-bottom font-extrabold text-eleven text-xl" style={{fontFamily: "Manrope",}}>
                    $45.78
                    </p>
                   </div>
                    </div>
                    </div>
                    <Image src={line2} alt="Img"/>
                </div>
            </div>
        </div>
    </section>
  )
}
