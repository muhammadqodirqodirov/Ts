"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Cart } from '@/app/assets/icon/cart'
import { Logo } from '@/app/assets/icon/logo'
import { useCartPage } from '@/app/features/cartStore/useCartPage'
import "./main-header.css"
import { MenuHeader } from './menuHeader'
export const Header = () => {
  // const route = window.location;
  const [isPath, setIsPath] = useState("/");
  const [isLogout, setIsLogout] = useState(false);
  const [login,setLogin]=useState(false)
  // useEffect(() => {
  //   console.log(isLogout);
  //   axios.post(
  //       "http://207.154.221.44:4002/api/dishes",
  //       {},
  //       { headers: { Authorization: localStorage.getItem("token") } }
  //     )
  //     .then((res) => {
  //       if (res.data.statusCode === 500) {
  //         console.log("logout");
  //         setIsLogout(true);
  //       } else {
  //         setIsLogout(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   if (route.pathname.endsWith("/")) {
  //     setIsPath("/");
  //   } else if (route.pathname.endsWith("/page/datas")) {
  //     setIsPath("/page/datas");
  //   } else if (route.pathname.endsWith("/components/pageCart")) {
  //     setIsPath("/components/pageCart");
  //   }
  // }, 
  // [route.pathname, localStorage.getItem("token")]
  // );
const cart = useCartPage((state)=>state.post)
const [menu,setMenu]=useState(false)
const handlclick=()=>{
  setMenu(true)
  return(<MenuHeader/>)
}
  return (
    <header className='px-5 pt-12 max-w-max-header justify-center mx-auto pb-20'>
    <div className="container mx-auto     gap-14 flex justify-between pb-9"
    style={{
        borderBottom: "1px solid #CBCBCB",
      }}
    >
      <div className='max-w-max-header-comp flex items-center  justify-between gap-20'>
       <div className='flex items-center max-w-max-header-logo gap-2'>
      <div>
      <Logo />
      </div>
        <p className='text-fourth text-xl font-semibold'>
          eatly
        </p>

       </div>
          <div className='link-res flex items-center max-w-max-link justify-between gap-14'>
          <Link className='text-lg font-medium capitalize mt'
          href="/"
          style={{
           
            color: `${isPath === "/" ? "#6C5FBC" : "#606060"}`,
          }}
        >
          Home
        </Link>
        <Link className='text-lg font-medium capitalize '
          href="/page/datas"
          style={{
            color: `${isPath === "/page/datas" ? "#6C5FBC" : "#606060"}`,
          }}
        >
          Dishes
        </Link>
          </div>
          </div>

      <div className='flex items-center mb-6 max-w-max-heaeder-button gap-3 header-Links'>
        <Link className='relative' href="/components/pageCart">
          <Cart
            color={isPath === "/components/pageCart" ? "#6C5FBC" : undefined}
          />
          <span className='inline-block absolute -top-4 -right-2 px-1.5 text-white font-semibold bg-bg-color rounded-full'>{cart.length}</span>
        </Link>
        {isLogout ? (
          <button
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <div className='flex gap-2'>
            <Link className='py-5 px-7 text-fifth text-lg font-semibold capitalize' href="/page/regisLog/login" >
              Login
            </Link>

            <Link className='py-5 capitalize px-7 font-bold text-lg w-30 rounded-2xl bg-bg-button text-six' href="/page/regisLog/register">
              Sign up
            </Link>
            </div>
          </>
        )}
      </div>
      <div className='btn-res'><MenuHeader/></div>
    </div>
    
  </header>
  )
}