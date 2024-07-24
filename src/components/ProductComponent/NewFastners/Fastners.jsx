import React from 'react';
import Layout from '../../common/Layout';
import { categories } from '../../common/navbarlinks'; // Assuming this is where your categories data is coming from
import { Link } from 'react-router-dom';

const Fastners = () => {
  // Find the "Fastners" category within the categories array
  const fastnersCategory = categories.find(category => category.title === "Fastners");

  return (
    <Layout>
      <div className="container mx-auto p-4">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-center text-primary mb-8">{fastnersCategory.title}</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 customContainer">
          {fastnersCategory?.sub_category.map(subCat => (
            <Link key={subCat._id} to={subCat.page} className="block bg-white rounded-xl shadow-md overflow-hidden transition-transform transform group hover:scale-105 ">
              <img  
                className="h-48 w-full object-contain"
                src={subCat?.subImage}
                alt={subCat.title}
              />
              <div className="p-6">
                <div className="uppercase text-center tracking-wide text-sm text-primary font-semibold mb-4 group-hover:text-tertiary">{subCat.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Fastners;
