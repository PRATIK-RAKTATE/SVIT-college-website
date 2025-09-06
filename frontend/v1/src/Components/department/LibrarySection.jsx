import React from 'react'
import LibrarySideBar from '../Library/LibrarySydebar'
import Section from './Section'

const LibrarySection = () => {
  return (
    <>
     <div className='flex flex-row'>
        <LibrarySideBar/>
     </div>
     <div>
     <Section/>
     </div>
    </>
  )
}

export default LibrarySection