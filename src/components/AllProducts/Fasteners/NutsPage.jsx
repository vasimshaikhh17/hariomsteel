import React from "react";
import Layout from "../../common/Layout";
import { Link } from "react-router-dom";
import { productData } from "../../ProductComponent/alldata";

const NutsPage = () => {
  // Find the Fasteners category from the product data
  const fastenersCategory = productData.find(category => category.title === "Fasteners");

  // Find the Nuts subcategory
  const nutsSubcategory = fastenersCategory?.sub_sub_category.find(subCat => subCat.title === "Nuts");

  if (!nutsSubcategory) {
    return <div>Category not found</div>;
  }

  return (
    <Layout>
      <div className="relative h-40 overflow-hidden md:h-96 lg:-mt-36 -z-50 headings">
        <div className="absolute inset-0 flex items-center mt-36 justify-center text-fontPrimary p-4 bg-fontDefault bg-opacity-15 z-50">
          <h2 className="text-2xl md:text-6xl font-bold mb-32 md:mb-4">{nutsSubcategory.title}</h2>
        </div>
      </div>

      <div className="customContainer px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {nutsSubcategory.sub_3.map((item) => (
            <Link key={item._id} to={item.page} className="block">
              <div className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={item.prodImg}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NutsPage;
