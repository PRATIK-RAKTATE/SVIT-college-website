import React from 'react'
import AboutSidebar from './AboutSisebar'
import CurriculumInfo from './CurriculumSyllabus'

const AboutCurriculumSyllabus = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
                    <AboutSidebar />
                    <CurriculumInfo/>
                  </div>
  )
}

export default AboutCurriculumSyllabus