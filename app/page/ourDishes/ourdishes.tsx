"use client";

import React from "react";
import { useEffect } from "react";
import { useData } from "../../features/dataStore/useData";
import { Like } from "@/public/assets/like";
import Image from "next/image";
import { DishesStar } from "@/public/assets/dishesstar";
import { PlusDishes } from "@/public/assets/plusdishes";
import Link from "next/link";
import { Arrow } from "@/public/assets/arrow";
import { ArroWiev } from "@/public/assets/arroViev";
import { TabletStar } from "./icon/tabletstar";
import { TabletPlus } from "./icon/tabletPlus";
import { MobiPlus } from "./icon/mobiPlus";
import { LikeMobi } from "./icon/likeMobi";
import "./main-dishes.css"
const getColor:any = (text:any) => {
  if(text === "TRENDING"){
      return ["#FB471D","#F7C5BA"]
  }
  if(text === "SUPREME"){
    return ["#309D5B","#33ac648f"]
  }
  if(text === "HEALTHY"){
    return  ["#DAA31A","#F7EDD0"]
  }
}

export const OurDishes = () => {
  const post = useData((state:any) => state.post);
  const getData = useData((state:any) => state.getData);
  useEffect(() => {
    getData();
  }, []);

  const data = post.filter((item:any,index:number) => index < 5);
  const dataPh = post.filter((item:any,index:number) => index < 4);
  console.log(data)
console.log(data)
  return (
    <section >
      <div className="container mx-auto">
        <div className="mb-20 text-center ">
          <h2
            className="dish-title text-5xl font-semibold leading-7 container mx-auto text-first-color"
            style={{fontFamily: "Poppins" }}
          >
            Our Top
            <span
              className="dish-title text-5xl font-semibold leading-7 text-fourth"
              style={{ fontFamily: "Poppins" }}
            >
              Dishes
            </span>
          </h2>
        </div>

        <div className="mb-32 container flex mx-auto" >
          <div className="res-dishesour flex mb-16 flex-wrap justify-end gap-7 max-w-max-header"  style={{  margin:"0 auto"}}>
            {data.map((item:any) => (
              console.log(item),
              <div key={item.id} className="res-item w-56 h-96 bg-white"
                style={{
                  borderRadius: "34.581px",
                  border: "1.441px solid  #F4F4F6",
                  boxShadow:
                    "6.84842px 82.18102px 41.09051px 0px rgba(229, 229, 229, 0.70)",
                }}
              >
                <div className="res-like mt-6 ml-44 " >
                  <Like />
                </div>
                <div className="flex justify-center" >
                  <img className="w-44 res-dish-img" src={`http://207.154.221.44:4002/${item?.image}`}
                  />
                </div>
                <div className="ml-6" >
                  
                <p className="font-normal res-types px-2 py-1 text-xs w-20" style={{color:`${getColor(item?.type)[0]}`,backgroundColor:`${getColor(item?.type)[1]}`, fontFamily: "Poppins",    borderRadius: "4.839px",}}>{item?.type} </p>
                  <p className="text-2xl res-name font-semibold mb-0.5 text-first-color" style={{ fontFamily: "Poppins",}}>{item?.name}</p>
                  <div className="flex items-center mb-3.5" >
                    <p className="res-text text-base mr-1.5 font-normal text-sixty" style={{ fontFamily: "Manrope",  }}>
                    {item.time}min •
                    </p>
                    <p className="mr-1.5 desktop">
                      <DishesStar/>
                    </p>
                    <p className="tablet">
                      <TabletStar/>
                    </p>
                    <p className="res-text text-base mr-1.5 font-normal text-sixty" style={{ fontFamily: "Manrope",}}>
                      {item?.mark}
                    </p>
                  </div>
                  <div className="container mx-auto flex">
                    <p className="res-price font-bold mr-4 w-28 text-first-color text-2xl" style={{ fontFamily: "Manrope",}}>
                    ${item?.price}
                    </p>
                    <button className="desktop">
                      <PlusDishes/>
                    </button>
                    <button className="tablet bg-black px-2 rounded-lg">
                      <TabletPlus/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          <Link className="flex items-center  justify-end"  style={{ justifyContent:"end" , alignItems:"end"}} href="/page/datas">
          <div className="flex items-center gap-4">
          <p className="text-xl text-second mt-2 ">View All</p>
          <p><ArroWiev/></p>
          </div>
          </Link>
          </div>
          <div className="res-dish-mobi flex mb-16 flex-wrap justify-center mx-auto" >
            {dataPh.map((item:any) => (
              <div key={item.id} className="res-item w-56 h-96 bg-white"
                style={{
                  borderRadius: "34.581px",
                  border: "1.441px solid  #F4F4F6",
                  boxShadow:
                    "6.84842px 82.18102px 41.09051px 0px rgba(229, 229, 229, 0.70)",
                }}
              >
                <div className="res-like mt-6 ml-44 " >
                  <Like />
                </div>
                <div className="mobilike">
                  <LikeMobi/>
                </div>
                <div className="flex justify-center" >
                  <img className="res-dish-img"
                    src={`http://207.154.221.44:4002/${item.image}`}
                  />
                </div>
                <div className="ml-6" >
                  
                <p className="font-normal res-types px-2 py-1 text-xs w-20" style={{color:`${getColor(item.type)[0]}`,backgroundColor:`${getColor(item.type)[1]}`,fontFamily: "Poppins", borderRadius: "4.839px",}}>{item.type} </p>
                  <p className="res-name text-2xl font-semibold mb-0.5 text-first-color" style={{fontFamily: "Poppins",}}>{item.name}</p>
                  <div className="flex items-center mb-3.5" >
                    <p className="res-text text-base mr-1.5 font-normal text-sixty" style={{fontFamily: "Manrope",  }}>
                    {item.time}min •
                    </p>
                    <p className="tablet mr-1.5">
                      <TabletStar/>
                    </p>
                    <p className="res-text text-base mr-1.5 font-normal" style={{color: "var(--Grey, #8E97A6)", fontFamily: "Manrope",}}>
                      {item.mark}
                    </p>
                  </div>
                  <div className="container mx-auto flex">
                    <p className="res-price font-bold mr-4 w-28 text-first-color text-2xl" style={{fontFamily: "Manrope",}}>
                    ${item.price}
                    </p>
                    <button className="tablet bg-black px-3 rounded-lg">
                      <MobiPlus/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          <Link className="flex items-center  justify-end"  style={{  alignItems:"end"}} href="/page/datas">
          <div className="flex items-center justify-end gap-4">
          <p className="text-xl text-second mt-2 ">View All</p>
          <p><ArroWiev/></p>
          </div>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
