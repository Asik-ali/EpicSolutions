import React, { useEffect } from 'react'
import img from "../../Assest/Home5.jpg"
function Welcome() {

  return (
    <div
      className='mt-10 overflow-x-hidden mb-10'>
      <h1 className='hidden'>Welcome To Itel Mobile</h1>
      <h1 className='text-center text-3xl lg:text-4xl font-[poppins] px-4'>Welcome To Itel  <span className='text-[#ff063c]'>Mobile</span></h1>
      <div className='flex flex-col lg:flex-row lg:mx-4 container px-4 items-center justify-center gap-10  mt-5'>
        <div >
          <img className=' w-[500px] rounded h-[400px]' src={img} alt="welcome" data-robots="noindex" />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl font-semibold lg:text-2xl '> Exploring the World of Itel Mobile </h1>
          <div className='lg:w-[600px] mt-7 flex flex-col gap-2 leading-7'>
            <h1 className='hidden'> Exploring the World of Itel Mobile</h1>
            <p>Introduce readers to the topic of Itel Mobile, emphasizing its position in the smartphone market as a provider of affordable yet innovative devices. Highlight the importance of accessibility in technology and how Itel Mobile addresses this need</p>
            <p>
              Detail the various product lines offered by Itel Mobile, including entry-level, mid-range, and flagship models. Highlight the unique features and specifications of each product line, showcasing the brand's commitment to meeting diverse consumer needs.                  </p>
            <p>Offer insights into Itel Mobile's future plans and innovations. Discuss anticipated product releases, technological advancements, and strategic partnerships. Highlight the brand's commitment to continuous improvement and innovation. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome