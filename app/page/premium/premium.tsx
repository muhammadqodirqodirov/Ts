import Image from 'next/image'
import { app } from '@/public'
import { Arrow } from '@/public/assets/arrow'
import "./main-premium.css"
export const Premium = () => {
  return (
    <section className=''>
        <div className="container mx-auto containerPrem max-w-max-premiumm  mx-auto mb-64">
            <div className="flex res-premium-wrap justify-between items-center gap-5 pb-32" style={{borderBottom:"1px solid #CBCBCB", maxWidth:"950px" }}>
            <div className='res-premium-ph' >
                <Image src={app} alt="img"/>
            </div>
            <div className='res-pr'>
                <div className='wrapper-title'>
                <h3 className="res-premium-title mb-16 font-bold capitalize text-ten" style={{ fontFamily: "Poppins", fontSize: "50.923px",  lineHeight: "58.198px", maxWidth:"470px"}}>
                Premium <span className="font-bold capitalize text-fourth" style={{fontFamily: "Poppins", fontSize: "50.923px", lineHeight: "58.198px", maxWidth:"470px"}}>Quality</span> For Your Health
                </h3>
                </div>
                <ul className='max-w-max-premium res-premium-text'>
                    <div className='flex gap-2'>
                        <span className='rounded-full w-2 h-1.5 mt-1.5 inline-block bg-bg-span-top'/>
                        <li className="res-premium-text max-w-max-premium-text text-xl font-normal mb-7 text-nine" style={{fontFamily: "Inter",  }}>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                    </div>
                    <div className='flex gap-2'>
                        <span  className='rounded-full w-2 h-1.5 mt-1.5 inline-block bg-bg-span-top'/>
                        <li className="res-premium-text max-w-max-premium-text text-xl font-normal mb-16 text-nine" style={{fontFamily: "Inter",  }}>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                    </div>
                 <button className="res-pr-btn text-center text-base capitalize gap-5 flex font-medium rounded-2xl items-center pt-3 px-2 pb-3 bg-bg-color" style={{color: "#FFF", fontFamily: "Poppins", }}>
                Download <span><Arrow/></span> 
                </button>
                </ul>

                
            </div>
            </div>
        </div>
    </section>
  )
}
