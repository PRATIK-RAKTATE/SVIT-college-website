import React from 'react'
import LibrarySideBar from './LibrarySydebar'
import EResources from './EResources'

const LibraryFacilities = () => {
  return (
    <>
     <div className='flex flex-row'>
        <LibrarySideBar/>
     </div>
     <div>
      <EResources/>
     </div>
    </>
  )
}

export default LibraryFacilities