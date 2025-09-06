import React from 'react'
import LibrarySideBar from './LibrarySydebar'
import LibraryReport from './CentralLibrary'
import BranchLibraryReport from './DepartmentWiseReport'
import LibraryFinancialReport from './TotalReport'

const Library = () => {
  return (
    <>
      <LibrarySideBar/>
      <LibraryReport/>
      <BranchLibraryReport/>
      <LibraryFinancialReport/>
    </>
  )
}

export default Library