import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import { IoIosArrowDown, IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { materialGrade } from "./materialGrade";
import { LuCircleDotDashed } from "react-icons/lu";

const MaterialGrade = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  useEffect(() => {
    // Iterate through the materialGrade array
    materialGrade?.forEach((category, categoryIndex) => {
      // Check if sub_sub_category exists and is an array
      category.sub_sub_category?.forEach((subCategory, subCategoryIndex) => {
        if (subCategory.page === location.pathname) {
          setActiveCategory(categoryIndex);
          setActiveSubCategory(subCategoryIndex);
        } else {
          // Check if grades exist and is an array
          subCategory.grades?.forEach((grade) => {
            if (grade.page === location.pathname) {
              setActiveCategory(categoryIndex);
              setActiveSubCategory(subCategoryIndex);
            }
          });
        }
      });
    });
  }, [location.pathname]);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
    setActiveSubCategory(null); // Reset sub-category when a new category is toggled
  };

  const toggleSubCategory = (index) => {
    setActiveSubCategory(activeSubCategory === index ? null : index);
  };

  return (
    <div className="bg-gray-100 p-4 shadow-md rounded-md uppercase text-[12px] font-bold">
      <h2 className="text-lg font-bold mb-4">Material Grades</h2>
      {materialGrade?.map((category, categoryIndex) => (
        <div key={category._id} className="mb-4">
          <div
            className="cursor-pointer bg-primary text-fontPrimary p-2 rounded-md flex justify-between items-center"
            onClick={() => toggleCategory(categoryIndex)}
          >
            <Link to={category.page}>{category.title}</Link>
            <span className="ml-2">
              {activeCategory === categoryIndex ? (
                <IoIosArrowForward />
              ) : (
                <IoIosArrowDown />
              )}
            </span>
          </div>
          {activeCategory === categoryIndex && (
            <div className="mt-2  rounded-md">
              <ul className="list-none p-2">
                {category.sub_sub_category?.map(
                  (subCategory, subCategoryIndex) => {
                    const isSubActive = subCategory.page === location.pathname;
                    return (
                      <li
                        key={subCategory._id}
                        className="border-b last:border-b-0 mb-2"
                      >
                        <div
                          className="cursor-pointer p-2 flex justify-between items-center bg-primary rounded-md text-fontPrimary"
                          onClick={() => toggleSubCategory(subCategoryIndex)}
                        >

                          <Link
                            to={subCategory.page}
                            className={`flex items-center gap-2 rounded-md ${
                                isSubActive
                                ? "text-fontPrimary"
                                : " hover:text-fontPrimary"
                            }`}
                          >
                            <LuCircleDotDashed />
                            {subCategory.title}
                          </Link>
                          <span className="ml-2">
                            {activeSubCategory === subCategoryIndex ? (
                              <IoIosArrowForward />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </span>
                        </div>
                        {activeSubCategory === subCategoryIndex && (
                          <ul className="pl-4">
                            {subCategory.grades?.map((grade) => (
                              <li
                                key={grade._id}
                                className="border-b last:border-b-0 flex items-center"
                              >
                                <IoIosArrowRoundForward />
                                <Link
                                  to={grade.page}
                                  className={`block p-2 rounded-md ${
                                    location.pathname === grade.page
                                      ? "text-tertiary"
                                      : "hover:bg-tertiary hover:text-fontPrimary"
                                  }`}
                                >
                                  {grade.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MaterialGrade;
