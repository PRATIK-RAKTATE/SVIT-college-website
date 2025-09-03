import React from 'react'
import Carousel from './HeroCarousel'
import SidebarHod from './SidebarHod'
import Departmentinfo from './Departmentinfo'

const department = () => {
  return (
    <div className='flex flex-col'>
     <div>
        <Carousel />
      </div> 

      <div >
        <SidebarHod />
        <main className="flex-1 p-4">
          <Departmentinfo />
        </main>
      </div>
    </div>
  )
}

export default department