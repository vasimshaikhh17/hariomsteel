import React from "react";
import Layout from "../common/Layout";


import { productData } from "./alldata.js"
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <Layout>
      <div className=" p-6 customContainer md:mt-10">
        {productData.map((product, index) => (
          <div key={product._id}>
            <div className="flex flex-col md:flex-row items-center justify-around mb-8">
              <div
                className="w-1/2 md:w-1/3 "
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="h-auto "
                />
              </div>
              <div
                className="w-full mt-6 md:mt-0 md:px-16 flex flex-col md:items-left "
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <h2 className="text-2xl font-bold mb-4 uppercase md:ml-11">
                  {product.title}{":-"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.sub_sub_category &&
                    product.sub_sub_category.map((item) => (
                      <ul
                        key={item._id}
                        className="list-none space-y-2 md:px-6"
                      >
                        <li className="flex items-center">
                          <span className="mr-2">➔</span>
                          <Link

                            to={item.page}
                            className="text-primary hover:underline uppercase"
                          >
                            {item.title}
                          </Link>
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
            </div>
            {index < productData.length - 1 && <hr className="my-8" />}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
