import React from 'react';
import Layout from '../../common/Layout';

import { Link } from 'react-router-dom';
import { materialGrade } from '../materialGrade';


const Exotic = () => {
  // Filter out the Alloy Steel category
  const exoticSteel = materialGrade.find(item => item.title === "Exotic Steel");

  return (
    <Layout>
      <div className="py-8 customContainer">
        <h2 className="text-3xl font-bold text-center mb-8">Exotic Steel</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {exoticSteel.sub_sub_category.map(subCategory => (
              <div key={subCategory._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={subCategory.prodImg} alt={subCategory.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{subCategory.title}</h3>
                  <ul className="list-disc list-inside">
                    {subCategory.grades.map(grade => (
                      <li key={grade._id} className="text-gray-700">
                        <Link to={grade.page} className="hover:text-tertiary hover:underline">
                          {grade.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Exotic;
