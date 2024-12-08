import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="container p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
    
      <Image
            src="/jj.png"
            width={2000}
            height={4000}
            alt="Profile Image"
            className=""
          />
    </div>
    
  )
}

export default page
