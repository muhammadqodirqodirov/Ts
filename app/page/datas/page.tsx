"use client"

import { StarLittle } from '@/app/assets/icon/star-little'
import { useData } from '@/app/features/dataStore/useData'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Acardion } from './acardion/acardion'
import { Grid } from '@mui/material'
import { Plus } from '@/app/assets/icon/plus'
import { PlusDishes } from '@/app/assets/icon/plusDishes'
import { GridWrapper } from './styled-grid'
import { Header } from '@/app/components/header/header'
import { useRouter } from 'next/navigation'
import { useCartPage } from '@/app/features/cartStore/useCartPage'
import { Data } from '@/app/types'

const Dishes = () => {
    const posts = useData((state:any)=>state.post)
    const getData:()=>void= useData((state:any)=>state.getData)
    const addCard= useCartPage((state:any)=>state.addCart)
    const post=useCartPage((state:any)=>state.post)
    const product=useCartPage((state:any)=>state.product)
    useEffect(()=>{
        getData()
    },[])
    const route=useRouter()
    const handleCard=(id:number)=>{
        const newItem={
         quantity:1,
         item: posts.find((item:any) => item.id === id)
        }
        addCard({newItem})
        console.log(newItem)
   }
    return <>
    <Header/>
   <section className='bg-bg-body'>
   <div className='container max-w-containers mx-auto'  style={{borderBottom:"1px solid #CBCBCB" ,paddingBottom:"80px"}}>
   <GridWrapper  container  maxWidth={1249} gap="30px" marginBottom="250p" marginLeft={20} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }} >   
        {posts?.map((item:Data)=>
        <div className='hover:bg-bg-color max-w-card-w w-full rounded-2xl bg-white ' key={item.id}>
            <div className='flex justify-center'>
            <img className='pt-6 max-w-img-w h-img-h' src={`http://207.154.221.44:4002/${item?.image}`} />
            </div>
           <div className='ml-6 mr-6'>
            <h3 className='mb-3 text-2xl font-semibold'>{item?.name}</h3>
            <div className='flex mb-1 items-center gap-2 max-w-max-data-p'>
                <p className='flex items-center'>{item.time}
                </p>
                <span className='inline-block ml-1 rounded-full bg-bg-span w-1 h-1'></span>
                <StarLittle/>
                <p>{item.mark}</p>
            </div>
            <div className='flex gap-4 items-center justify-between'>
                <p className='text-2xl font-medium text-first-color'>${item.price}</p>
                <button onClick={()=>handleCard(item.id)} className='py-4 px-4 mb-3 mt-3 rounded-lg bg-first-color text-white'><PlusDishes/></button>
            </div>
           </div>
        </div>
        )}
    </GridWrapper>
    
   </div>
    <div>
        <Acardion/>
    </div>
   </section>
  </>
}

export default Dishes