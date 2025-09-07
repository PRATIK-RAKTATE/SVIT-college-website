import React from "react";
import Carousel from "./HeroCarousel";
import SidebarHod from "./SidebarHod";
import Departmentinfo from "./Departmentinfo";
import SEO from "../../seo/SEO";
import SEO_CONFIG from "../../seo/seo.config";
import DEPARTMENTS from "../../Constants/department.config";
import { useParams } from "react-router-dom";

const DepartmentPage = () => {
  const { deptId } = useParams();
  console.log(deptId);

  const data = DEPARTMENTS[deptId];
  if (!data) {
    return (
      <div className="text-center p-8 text-red-600">Department not found</div>
    );
  }

  const seoData = SEO_CONFIG.departments[deptId] || {};

  console.log("SEO Data:", seoData, "deptId:", deptId);

  return (
    <div className="flex flex-col">
      <SEO
        title={seoData.title}
        description={seoData.description}
        url={seoData.url}
        image={seoData.image}
      />

      <div>
        <Carousel slides={data.carousel} />
      </div>

      <div>
        <SidebarHod
          Hodimg={data.img}
          Hodname={data.hodname}
          hodQ={data.hodqualification}
          Department={deptId}
        />
        <main className="flex-1 p-4">
          <Departmentinfo
            vision={data.vision}
            mission={data.mission}
            hodDesk={data.HODDesk}
          />
        </main>
      </div>
    </div>
  );
};

export default DepartmentPage;
