import React from 'react'
import AboutSidebar from './AboutSisebar'
import VitthalraoIntro from './VitthalraoIntro'
import BalasahebIntro from './BalasahebIntro'

const AboutInception = () => {
  return (
     <>
              <div className="flex flex-col md:flex-row gap-6">
                <AboutSidebar />
                <VitthalraoIntro/>
              </div>
              <div className="mt-6">
                <BalasahebIntro/>
              </div>
            </>
  )
}

export default AboutInception