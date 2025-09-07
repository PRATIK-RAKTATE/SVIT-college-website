import React from 'react'
import LibrarySideBar from './LibrarySydebar'
import EResources from './EResources'
import WelcomeLibrary from './WelcomeLibrary'

const LibraryFacilities = () => {
  return (
    <>
     <div className='flex flex-row'>
        <LibrarySideBar/>
        <WelcomeLibrary/>
     </div>
     <div>
      <EResources/>
     </div>
    </>
  )
}

export default LibraryFacilities