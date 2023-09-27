import { Minus } from '@/app/assets/icon/minus'
import { Plus } from '@/app/assets/icon/plus'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { useState } from 'react'

export const Acardion = () => {
    const [state,setState]=useState(false)
    const [state2,setState2]=useState(false)
    const [state3,setState3]=useState(false)
    const [state4,setState4]=useState(false)
    const [state5,setState5]=useState(false)
    const isTogled=()=>{
        setState(state=>!state)
    }
     const isTogled2=()=>{
        setState2(state2=>!state2)
    }
    const isTogled3=()=>{
        setState3(state3=>!state3)
    }
    const isTogled4=()=>{
        setState4(state4=>!state4)
    }
    const isTogled5=()=>{
        setState5(state5=>!state5)
    }
  return<>
  <div className='container mx-auto pt-24' style={{ maxWidth:"1152px",}}>

<Accordion elevation={0} style={{background:"#F9F9F9"}}   >
  <AccordionSummary className='relative flex items-center'>
    <Typography style={{color: "#323142",  fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>How long does delivery take?</Typography>
    <button className='absolute  left-2/4 mt-3' style={{display:"flex",justifyContent:"end",right:"17px"}} onClick={isTogled}>{state===false?<Plus/>:<Minus/>}</button>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={{color: "#686868", width:"790px", fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
    You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion elevation={0} style={{background:"#F9F9F9"}} >
  <AccordionSummary className='relative'  >
    <Typography style={{color: "#323142", fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>How Does It Work ?</Typography>
    <button className='absolute  left-2/4 mt-3' style={{display:"flex",justifyContent:"end",right:"17px"}} onClick={isTogled2}>{state2===false?<Plus/>:<Minus/>}</button>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={{color: "#686868", width:"790px", fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
    You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion elevation={0} style={{background:"#F9F9F9"}} >
  <AccordionSummary className='relative'  >
    <Typography style={{color: "#323142",  fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>How does your food delivery service work?</Typography>
    <button className='absolute  left-2/4 mt-3' style={{display:"flex",justifyContent:"end",right:"17px"}} onClick={isTogled3}>{state3===false?<Plus/>:<Minus/>}</button>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={{color: "#686868", width:"790px",  fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
    You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion elevation={0} style={{background:"#F9F9F9"}} >
  <AccordionSummary className='relative'  >
    <Typography style={{color: "#323142",  fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>What payment options do you accept?</Typography>
    <button className='absolute  left-2/4 mt-3' style={{display:"flex",justifyContent:"end",right:"17px"}} onClick={isTogled4}>{state4===false?<Plus/>:<Minus/>}</button>
  </AccordionSummary>
  <AccordionDetails>
    <Typography style={{color: "#686868", width:"790px", fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
    You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion elevation={0} style={{background:"#F9F9F9"}}  >
  <AccordionSummary className='relative'  >
    <Typography style={{color: "#323142",  fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>Do you offer discounts or promotions?</Typography>
    <button className='absolute  left-2/4 mt-3' style={{display:"flex",justifyContent:"end",right:"17px"}} onClick={isTogled5}>{state5===false?<Plus/>:<Minus/>}</button>
  </AccordionSummary>
  <AccordionDetails className='relative'>
    <Typography style={{color: "#686868", width:"790px",  fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
    You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
    </Typography>
  </AccordionDetails>
</Accordion>

<Accordion elevation={0} style={{background:"#F9F9F9"}}  >
  <AccordionSummary className='relative'>
    <Typography style={{color: "#323142", fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}></Typography>
  </AccordionSummary>
  <AccordionDetails>
    
  </AccordionDetails>
</Accordion>


</div>
  </>
}
