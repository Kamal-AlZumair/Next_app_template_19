import Image from 'next/image'
import React from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import DogImg from '../public/img/newsletter/dog.png'

const Newsletter = () => {
  return (
    <section>
      <div className=' flex flex-1 h-[800px] flex-col lg:flex-row lg:h-[324px]'>
        {/* input */}
        <div className=' bg-newsletterOrange h-full bg-cover bg-center bg-no-repeat flex-1 flex flex-col justify-center items-center px-8 lg:px-0'>
          <div>
            <h2 className=' h2 mb-12'>Subscribe & Get Pet <br /> Update news</h2>
            <div className=' flex relative'>
              <input className=' bg-transparent border-b-2 placeholder:text-white text-white outline-none absolute w-full pr-12' type="text" placeholder='Mail' />
              <HiOutlineArrowNarrowRight className=' absolute top-0 right-0 text-white text-3xl cursor-pointer'/>
            </div>
          </div>
        </div>
        {/* image */}
        <div className=' bg-newsletterYellow bg-center bg-no-repeat bg-cover flex-1 flex justify-center items-end h-full'>
          <Image src={DogImg} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
