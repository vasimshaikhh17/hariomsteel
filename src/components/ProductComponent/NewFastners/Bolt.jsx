import React from 'react';
import Layout from '../../common/Layout';
import { categories } from '../../common/navbarlinks'; // Assuming this is where your categories data is coming from


const Bolt = () => {
  // Find the "Fastners" category within the categories array
  const fastnersCategory = categories.find(category => category.title === "Fastners");
  // Find the "Bolt" subcategory within the Fastners category
  const boltCategory = fastnersCategory?.sub_category.find(subCat => subCat.title === "Bolt");

  return (
    <Layout>
      <div className="container mx-auto p-4">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-center text-primary mb-8">{boltCategory.title}</h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 customContainer ">
          {boltCategory?.sub_sub_category.map(subSubCat => (
            <a key={subSubCat._id} href={subSubCat.page} className="block  rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 group">
              <img
                className="h-48 w-full object-contain mix-blend-multiply"
                src={subSubCat.subSubImage}
                alt={subSubCat.title}
              />
              <div className="p-6">
                <div className="uppercase text-center tracking-wide text-sm text-primary group-hover:text-tertiary font-semibold mb-4">{subSubCat.title}</div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Bolt;
