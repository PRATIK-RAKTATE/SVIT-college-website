import React from 'react'
import AboutSidebar from './AboutSisebar'
import SalientFeatures from './SilentFeaucture'
import VisionMission from './VissionMission'
import AimsObjectives from './AimObjective'

const MissionVissionAO = () => {
  return (
    <>
          <div className="flex flex-col md:flex-row gap-6">
            <AboutSidebar />
            <VisionMission />
          </div>
          <div className="mt-6">
            <AimsObjectives />
            <SalientFeatures />
          </div>
        </>
  )
}

export default MissionVissionAO