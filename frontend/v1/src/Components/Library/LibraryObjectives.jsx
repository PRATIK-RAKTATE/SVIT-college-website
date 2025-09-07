import React from 'react'
import LibrarySideBar from './LibrarySydebar'
import LibraryInfo from './LibraryInfo'
import WelcomeLibrary from './WelcomeLibrary'

const LibraryObjectives = () => {
  return (
    <>
     <div className='flex flex-row'>
        <LibrarySideBar/>
        <WelcomeLibrary/>
     </div>
     <div>
      <LibraryInfo/>
     </div>
    </>
  )
}

export default LibraryObjectives