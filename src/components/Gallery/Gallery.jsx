import React from 'react';
import Layout from '../common/Layout';
import { productData } from '../ProductComponent/alldata';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const boxStyle =
    'relative bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center';

  return (
    <Layout>
      <h2 className='text-center mb-4 text-3xl font-semibold'>Gallery</h2>
      <div className='customContainer grid md:grid-cols-3 auto-rows-[250px] gap-4 my-10'>
        {productData.flatMap(product =>
          product.sub_sub_category.map((subProduct, i) => (
            <div
              key={subProduct._id}
              className={`${boxStyle} ${
                i === 1 || i === 1 || i === 2 || i === 1 ? 'md:col-span-2' : ''
              } ${i === 2 ? 'md:row-span-2' : ''}`}
            >
              <Link to={subProduct?.page} className='w-full h-full'>
                <img
                  src={subProduct.prodImg}
                  alt={subProduct.title}
                  className='w-full h-full object-contain rounded-xl'
                />
                <h3 className='absolute bottom-2 left-2 bg-white bg-opacity-75 text-black p-1 rounded'>
                  {subProduct.title}
                </h3>
              </Link>
            </div>
          ))
        )}
      </div>
    </Layout> 
  );
};

export default Gallery;
