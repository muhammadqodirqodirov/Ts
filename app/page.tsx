import { Customer } from './page/customer/customer'
import { Header } from './components/header/header'
import { Enjoy } from './page/enjoy/enjoy'
import { EnterEmail } from './page/skidka/enter-email'
import { HealthyMeal } from './page/healthy/healthy-meal'
import { Premium } from './page/premium/premium'
import { King } from './page/king/king'
import { OurDishes } from './page/ourDishes/ourdishes'
import { Dashboard } from './page/dashboard/dashboard'
import { Footer } from './components/footer/footer'
export default function Home() {
  return<>
  
  <Header/>
  <Enjoy/>
  <HealthyMeal/>
  <Premium/>
  <King/>
  <OurDishes/>
  <Dashboard/>
  <Customer/>
  <EnterEmail/>
  <Footer/>
  </>

}
