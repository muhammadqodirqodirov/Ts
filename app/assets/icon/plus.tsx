import React, { useState } from 'react'

export const Plus = () => {
  const [state,setState]=useState("/")
 if(state==="/"){
return<>
  <div className='py-3 px-3 bg-bg-color rounded-full'>
    <svg width={11} height={12} viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.16748" y="5.41113" width="10.5978" height="1.11556" fill="white" />
  <rect x="4.90869" y="11.2681" width="10.5978" height="1.11556" transform="rotate(-90 4.90869 11.2681)" fill="white" />
</svg>

    </div>
</>
 }else{
  return<>
   <div className='py-1 px-3 bg-bg-color rounded-full'>
 <svg width={11} height={2} viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.16748" y="0.411133" width="10.5978" height="1.11556" fill="white" />
</svg>


  </div>
  </>
 }
}
