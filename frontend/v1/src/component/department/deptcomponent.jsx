import React from 'react'
import SidebarHod from './component/department/SidebarHod'
import Departmentinfo from './component/department/Departmentinfo'

const deptcomponent = () => {
  return (
    <div >
        {/* Sidebar */}
        <SidebarHod />

        {/* Department Info */}
        <main className="flex-1 p-4">
          <Departmentinfo />
        </main>
      </div>
  )
}

export default deptcomponent