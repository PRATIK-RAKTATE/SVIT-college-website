import React from 'react'
import LibrarySideBar from './LibrarySydebar'
import AdvisoryCommittee from './AdvisoryCommittee'
import WelcomeLibrary from './WelcomeLibrary'

const LibraryAdvisoryComitee = () => {
  return (
    <>
     <div className='flex flex-row'>
        <LibrarySideBar/>
        <WelcomeLibrary/>
     </div>
     <div>
      <AdvisoryCommittee/>
     </div>
    </>
  )
}

export default LibraryAdvisoryComitee