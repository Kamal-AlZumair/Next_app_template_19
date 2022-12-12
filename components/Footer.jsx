import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className=' bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* logo */}
          <div className=' text-orange text-4xl flex-1 text-center lg:text-left flex items-center justify-center lg:justify-start mb-2'>Pet First</div>
          <div className=' text-white flex-1 '>
            {/* links */}
            <ul className=' flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8'>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            {/* social */}
            <div className='flex justify-center lg:justify-start'>
              <div className='mr-6'>Follow</div>
              <ul className='flex gap-x-4'>
                <li><a href="#"><BsFacebook/></a></li>
                <li><a href="#"><BsInstagram/></a></li>
                <li><a href="#"><BsTwitter/></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
