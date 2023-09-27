"use client";
import { schemeLogin } from "@/app/scheme/scheme-login";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerLogo, registerLitle} from "../../../assets/index";
import Image from "next/image";
import { Grafic } from "@/public/assets/grafic";
import Link from "next/link";
import { Email } from "@/app/assets/icon/email";
import { Password } from "@/app/assets/icon/password";
import { useLogin } from "@/app/features/loginStore/useLoginStore";
import { useRouter } from 'next/navigation'
import { LogoR } from "@/app/assets/icon/register-Logo";
import { Login } from "@/app/types";
import "./main-log.css"
import { Header } from "@/app/components/header/header";
const Page = () => {

  const router = useRouter()

  const {handleSubmit, register, reset, formState:{errors}}=useForm({resolver:zodResolver(schemeLogin)})
  const postData = useLogin((set) => set.postLogin);
  const submit:any=(data:Login)=>{
    postData({...data}).then((res)=>{
      router.replace("/page/datas")
      console.log(res);
    })
  }
  
  return (
    <>
    <div className="header-top">
      <Header/>
    </div>
      <div className="container mx-auto flex justify-between">
        <div style={{marginLeft:"100px"}} className="flex max-w-divinput flex-col gap-7 w-full  mt-8">
          <div className="loginPAge" style={{marginBottom:"100px"}}>
            <LogoR />
          </div>
          <div style={{color: "#323142",textAlign:"center", fontFamily: "Poppins", fontSize: "35.25px", fontWeight: "600", lineHeight: "125%", letterSpacing: "-1.41px",}}>
            <h2>
            Sign Up To eatly
            </h2>
          </div>
          <div  className="clent">
            <form onSubmit={handleSubmit(submit)} className="mx-w-inputs InputsName">
              
              <div className="relative">
                <input style={{width:"382px"}}
                  className="py-6 mb-6  pl-16 bg-bg-color-input w-full rounded-2xl"
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                />
                <div className="absolute top-1/4 left-4 ">
                  <Email />
                </div>
              </div>
              <div className="relative">
                <input style={{width:"382px"}}
                  className="py-6 mb-6  pl-16 bg-bg-color-input w-full rounded-2xl"
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="absolute top-1/4 left-4 ">
                  <Password />
                </div>
              </div>
              
              <button style={{backgroundColor:"#6C5FBC", width:"382px"}}
                type="submit"
                className="bg-bg-button w-full py-6 rounded-2xl font-semibold text-lg text-white"
              >
                SIGN IN
              </button>
            </form>
            <div style={{marginBottom:"186px"}} className="flex login mt-6 justify-center">
              <h3 style={{marginRight:"10px"}} className="font-normal text-third text-lg">
              Create A New Account? 
              </h3>
              <Link style={{color:"#6C5FBC"}}
                className=" font-bold text-lg text-fourth"
                href="/regisLog/register"
              >
                Sign up
              </Link>
            </div>

            <div className="text-center">
              <div style={{display:"flex", width:"681px", justifyContent:"space-between"}}>
                <p style={{color: " #718096", fontFamily: "Poppins", fontSize: "16px", fontWeight: "500", lineHeight:"150%", letterSpacing: "0.2px"}}>
                Privacy Policy
                </p>
                <p style={{color: " #718096", fontFamily: "Poppins", fontSize: "16px", fontWeight: "500", lineHeight:"150%", letterSpacing: "0.2px"}}>
                Copyright 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{background:"#6C5FBC"}} className="loginPAge bg-bg-color max-w-wrapper w-full ">
          <div className="pt-60  log-img relative pl-40">
            <Image src={registerLogo} width={360} height={358} alt="meal" />
            <div
              className="rounded-3xl px-4 absolute flex gap-5 items-center max-w-mxs bg-white"
              style={{ top: "50%", marginTop: "-85px", right: "60px" }}
            >
              <Image src={registerLitle} alt="img" />
              <div>
                <h3 className="text-xl font-bold text-first-color">
                  Chicken Hell
                </h3>
                <p className="text-xs font-semibold text-first-color">
                  On The Way
                </p>
              </div>
              <p className="mt-10 text-xs font-medium text-second">3:09 PM</p>
            </div>
            <div
              className="absolute top-6 mt-40"
              style={{ left: "15.3%", top: "42%" }}
            >
              <Grafic />
            </div>
          </div>
          <div>
            <h2 className="font-extrabold text-white text-4xl text-center mb-5 mt-20">
              Find Foods With Love
            </h2>
            <p style={{color: "var(--others-white, #FFF)", width:"500px", fontFamily: "Manrope", fontSize: "14px", fontWeight: "500",lineHeight:"150%",letterSpacing:"0.2px"}} className="text-second text-sm font-medium max-w-text-max text-center mx-auto pb-40">
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;