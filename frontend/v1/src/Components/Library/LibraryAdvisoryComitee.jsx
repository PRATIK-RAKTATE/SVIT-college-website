import React from 'react'
import LibrarySideBar from './LibrarySydebar'
import AdvisoryCommittee from './AdvisoryCommittee'

const LibraryAdvisoryComitee = () => {
  return (
    <>
     <div className='flex flex-row'>
        <LibrarySideBar/>
     </div>
     <div>
      <AdvisoryCommittee/>
     </div>
    </>
  )
}

export default LibraryAdvisoryComitee