import React from 'react'
import AboutSidebar from './AboutSisebar'
import AboutPrincipleImg from './AboutPrincipleImg'
import AboutPrinciple from './AboutPrinciple'

const PrincipleDesk = () => {
  return (
     <>
          <div className="flex flex-col md:flex-row gap-6">
            <AboutSidebar />
            <AboutPrincipleImg/>
          </div>
          <div className="mt-6">
            <AboutPrinciple />
          </div>
        </>
  )
}

export default PrincipleDesk