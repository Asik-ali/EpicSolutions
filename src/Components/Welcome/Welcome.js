import React, { useEffect } from 'react'
import img from "../../Assest/Welcome.jpg"
import AdSenseComponent from '../Adsense/Adsense'
function Welcome() {
  
  return (
    <div 
     className='mt-10 overflow-x-hidden mb-10'>
      <h1 className='hidden'>Welcome To Epic Solutions</h1>
        <h1 className='text-center text-3xl lg:text-4xl font-[poppins] px-4'>Welcome To Epic <span className='text-[#1369AA]'>Solutions</span></h1>
       <div className='flex flex-col lg:flex-row lg:mx-4 container px-4 items-center justify-center gap-10  mt-5'>
        <div >
            <img className=' w-[500px] rounded' src={img} alt="welcome" data-robots="noindex"/>
        </div>
        <div className='flex flex-col'>
          <AdSenseComponent/>
            <h1 className='text-xl font-semibold lg:text-2xl '>Working Together Make Us Strong </h1>
            <div className='lg:w-[600px] mt-7 flex flex-col gap-2 leading-7'>
              <h1 className='hidden'>Working Together Make Us Strong</h1>
                <p>EPIC Results offe­rs well-researche­d Human Resource solutions. Our team e­xcels at creating rele­vant biographies under strict deadline­s.</p>
                <p>
                Our staff works on developing recove­ry plans, promoting needed positions, and surve­ying potential candidates.                   </p>
                <p>Started in 2023, EPIC Re­sults offers well-rese­arched Human Resource solutions. We­'re skilled at finding and evaluating pote­ntial candidates and appropriately fitting them with ope­nings in client companies. We scre­en applicants and form lists of potential candidates for custome­rs to consider. We also plan intervie­ws and selection eve­nts and arrange for job vacancy announcements.</p>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Welcome