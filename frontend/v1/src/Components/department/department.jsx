import React from 'react'
import Carousel from './HeroCarousel'
import SidebarHod from './SidebarHod'
import Departmentinfo from './Departmentinfo'
import SEO from '../../seo/SEO';
import SEO_CONFIG from '../../seo/seo.config';


const department = ({slides,vision,mission,hodDesk,Hodimg,Hodname,hodQ,Department}) => {
  const { title, description, url, image } = SEO_CONFIG.departments.Department|| {};
  return (
    <div className='flex flex-col'>
      <SEO title={title} description={description} url={url} image={image} />
     <div>
        <Carousel slides={slides} />
      </div> 

      <div >
        <SidebarHod Hodimg={Hodimg} Hodname={Hodname} hodQ={hodQ} Department={Department}/>
        <main className="flex-1 p-4">
          <Departmentinfo vision={vision} mission={mission} hodDesk={hodDesk} />
        </main>
      </div>
    </div>
  )
}

export default department