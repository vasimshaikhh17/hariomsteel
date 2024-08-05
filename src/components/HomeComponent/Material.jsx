import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { materialGrade } from "../Materials/materialGrade";

const Material = () => {
  return (
    <>
      <h1
        className="text-fontDefault text-4xl font-bold mb-4 text-center mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Material Grades
      </h1>
      <div
        className="customContainer p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
      >
        {materialGrade.map((material) => (
          <div
            key={material._id}
            className="group relative cursor-pointer overflow-hidden bg-white rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <span className="absolute top-0 left-0 h-full w-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-30"></span>
            <div className="relative z-10 p-4">
              <Link to={material.page}>
                <img
                  src={material.imageUrl}
                  alt={material.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="py-4">
                  <h2 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                    {material.title}
                  </h2>
                </div>
              </Link>
              <ul className="space-y-2 transition-colors duration-300 group-hover:text-primary">
                {material.sub_sub_category.map((subItem) => (
                  <li key={subItem._id} className="flex items-center gap-2">
                    <FaArrowRightLong className="text-primary group-hover:text-primary" />
                    <Link
                      to={subItem.page}
                      className="text-primary transition-colors duration-300 hover:text-tertiary hover:underline group-hover:text-primary"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Material;
