import { king } from '@/public'
import Image from 'next/image'
import { Star } from '@/public/assets/star'
import { Save } from '@/public/assets/Save'
import "./main-king.css"
import { StarTab } from './icon/star-tab'
import { StarPhon } from './icon/star-phon'
import { SaveIcon } from './icon/save'
export const King = () => {
  return (
    <section className=" -mt-20 mb-52 pl-5 pr-5 ">
        <div className="container mx-auto">
            <div className='bg-white mx-auto' style={{borderRadius: "30px", border: "1.593px solid  #F4F4F6", boxShadow: "7.57186px 90.86229px 45.43114px 0px rgba(229, 229, 229, 0.70)", maxWidth:"1238px" }}>
                <Image style={{borderRadius: "30px 30px 0px 0px", width:"1317px"}} src={king} alt="img"/>
                <div>
                  <p className='text-fifty bg-bg-history px-1.5 w-14 font-normal text-text-king res-king-h h-5 py-px'>Healthy</p>
                <div className="h-32 pt-6 pb-8 pl-11 flex items-center justify-between">
                    <div className='flex king-wrapper-t max-w-text-king w-full justify-between items-center'>
                    <p className="king-title font-semibold text-first-color text-4xl " style={{ fontFamily: "Poppins",}}>
                    The Chicken King
                    </p>
                    <div className="flex w-full king-wrapper-c max-w-mx-king ">

                    <p className="king-text text-2xl font-normal mr-2.5" style={{color: "#8E97A6", fontFamily: "Manrope", }}>
                    24min •
                    </p>
                    <div className='starTab'><StarTab/></div>
                    <div className='starPhone'><StarPhon/></div>
                    <div className='starDesktop'><Star /></div>
                    <p className="king-text text-2xl font-normal ml-2.5" style={{color: " #8E97A6", fontFamily: "Manrope", }}>
                    4.8
                    </p>
                    </div>
                    </div>
                    <div className='saveph mr-6'>
                      <SaveIcon/>
                    </div>
                    <div className="w-full king-save ml-24" style={{maxWidth:"130px"}}>
                    <Save/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
