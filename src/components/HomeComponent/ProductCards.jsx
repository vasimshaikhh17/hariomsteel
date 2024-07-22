import React from "react";

import { productData } from "../ProductComponent/alldata";
import { useNavigate } from "react-router-dom";

const ProductCards = () => {
  const navigate = useNavigate();
  return (
    <div className="customContainer md:mt-10">
      <h1
        className="text-center text-fontDefault font-bold text-3xl mb-14 mt-5 sm:mt-0 md:mt-10"
        data-aos="flip-left"
        data-aos-duration="1000"
      >
        Our Products
      </h1>

      {/* cards section */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-6"
        data-aos-duration="1000"
      >
        {productData.map(({ _id, imageSrc, title, page }) => {
          return (
            <div
              key={_id}
              className="text-fontPrimary shadow-md rounded-lg overflow-hidden relative group box-shadow2"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              <img
                src={imageSrc}
                alt={title}
                className="w-full max-w-[300px] h-[350px] object-contain rounded-lg"
              />

              <h2 className="text-center text-xl font-bold mt-2 text-fontDefault mb-6">
                {title}
              </h2>
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-primary/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <div className="flex justify-center items-center h-[350px]">
                    <button
                      className="border border-fontPrimary px-4 py-2 rounded-lg hover:bg-fontDefault/20 duration-300"
                      onClick={() => {
                        navigate(page);
                      }}
                    >
                      View {title}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;
