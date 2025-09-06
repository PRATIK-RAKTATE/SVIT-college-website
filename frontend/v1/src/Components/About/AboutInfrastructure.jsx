import React from 'react'
import AboutSidebar from './AboutSisebar'
import CampusInfo from './CampusInfo'
import HostelInfo from './Hostel'
import Campus from './Campus'

const AboutInfrastructure = () => {
  return (
    <>
                  <div className="flex flex-col md:flex-row gap-6">
                    <AboutSidebar />
                    <CampusInfo/>
                  </div>
                  <div className="mt-6">
                    <HostelInfo/>
                    <Campus/>
                  </div>
                </>
  )
}

export default AboutInfrastructure