import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { productData } from './alldata.js';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io';
import { LuCircleDotDashed } from 'react-icons/lu';

const RelatedProducts = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  useEffect(() => {
    productData.forEach((category, catIndex) => {
      category.sub_sub_category.forEach((subCategory, subIndex) => {
        if (subCategory.page === location.pathname) {
          setActiveCategory(catIndex);
          setActiveSubCategory(subIndex);
        }
        if (subCategory.sub_3) {
          subCategory.sub_3.forEach((sub3) => {
            if (sub3.page === location.pathname) {
              setActiveCategory(catIndex);
              setActiveSubCategory(subIndex);
            }
          });
        }
      });
    });
  }, [location.pathname]);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
    setActiveSubCategory(null);
  };

  const toggleSubCategory = (subIndex) => {
    setActiveSubCategory(activeSubCategory === subIndex ? null : subIndex);
  };

  return (
    <div className="bg-gray-100 p-4 shadow-md rounded-md uppercase text-[12px] font-bold">
      <h2 className="text-lg font-bold mb-4">Related Products</h2>
      {productData.map((category, catIndex) => (
        <div key={category._id} className="mb-4">
          <div
            className="cursor-pointer bg-primary text-fontPrimary p-2 rounded-md flex justify-between items-center"
            onClick={() => toggleCategory(catIndex)}
          >
            <Link to={category.page}>{category.title}</Link>
            <span className="ml-2">
              {activeCategory === catIndex ? <IoIosArrowForward /> : <IoIosArrowDown />}
            </span>
          </div>
          {activeCategory === catIndex && (
            <div className="mt-2 bg-secondary rounded-md">
              <ul className="list-none p-2">
                {category.sub_sub_category.map((subCategory, subIndex) => {
                  const isActive = subCategory.page === location.pathname;
                  return (
                    <li key={subCategory._id} className="border-b last:border-b-0 mb-2">
                      <div
                                                 className="cursor-pointer p-2 flex justify-between items-center bg-primary rounded-md  hover:bg-tertiary text-fontPrimary"

                        onClick={() => toggleSubCategory(subIndex)}
                      >
                        <Link
                          to={subCategory.page}
                          className={`flex gap-2 items-center  rounded-md ${
                            isActive    ? "text-fontPrimary"
                                : " hover:text-fontPrimary"
                          }`}
                        >
                           <LuCircleDotDashed />
                          {subCategory.title}
                        </Link>
                        {subCategory.sub_3 && (
                          <span className="ml-2">
                            {activeSubCategory === subIndex ? <IoIosArrowForward /> : <IoIosArrowDown />}
                          </span>
                        )}
                      </div>
                      {activeSubCategory === subIndex && subCategory.sub_3 && (
                        <ul className="list-none p-2 ml-4">
                          {subCategory.sub_3.map((sub3) => {
                            const isSub3Active = sub3.page === location.pathname;
                            return (
                              <li key={sub3._id}      className="border-b last:border-b-0 flex items-center">
                                 <IoIosArrowRoundForward />
                                <Link
                                  to={sub3.page}
                                  className={`block p-2 rounded-md ${
                                    isSub3Active ? 'text-tertiary ' : 'hover:bg-tertiary  hover:text-fontPrimary'
                                  }`}
                                >
                                  {sub3.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
