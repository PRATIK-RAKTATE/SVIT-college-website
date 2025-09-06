import React from 'react'
import LibrarySideBar from './LibrarySydebar'
import LibraryInfo from './LibraryInfo'

const LibraryObjectives = () => {
  return (
    <>
     <div className='flex flex-row'>
        <LibrarySideBar/>
     </div>
     <div>
      <LibraryInfo/>
     </div>
    </>
  )
}

export default LibraryObjectives