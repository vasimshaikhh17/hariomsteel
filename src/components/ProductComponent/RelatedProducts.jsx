import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { productData } from './alldata.js';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const RelatedProducts = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    productData.forEach((category, index) => {
      category.sub_sub_category.forEach((subCategory) => {
        if (subCategory.page === location.pathname) {
          setActiveCategory(index);
        }
      });
    });
  }, [location.pathname]);

  const toggleCategory = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div className="bg-gray-100 p-4 shadow-md rounded-md uppercase">
      <h2 className="text-lg font-bold mb-4">Related Products</h2>
      {productData.map((category, index) => (
        <div key={category._id} className="mb-4">
          <div 
            className="cursor-pointer bg-primary text-fontPrimary p-2 rounded-md flex justify-between items-center"
            onClick={() => toggleCategory(index)}
          >
            <Link to={category.page}>{category.title}</Link>
            <span className="ml-2">
              {activeCategory === index ? <  IoIosArrowForward/> : <IoIosArrowDown/>}
            </span>
          </div>
          {activeCategory === index && (
            <div className="mt-2 bg-secondary  rounded-md">
              <ul className="list-none p-2">
                {category.sub_sub_category.map((subCategory) => {
                  const isActive = subCategory.page === location.pathname;
                  return (
                    <li key={subCategory._id} className="border-b last:border-b-0">
                      <Link
                        to={subCategory.page}
                        className={`block p-2 rounded-md ${
                          isActive ? 'text-tertiary ' : 'hover:bg-tertiary  hover:text-fontPrimary'
                        }`}
                      >
                        {subCategory.title}
                      </Link>
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
