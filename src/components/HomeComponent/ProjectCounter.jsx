import React, { useEffect, useState, useRef } from "react";

const ProjectCounter = () => {
  const [counts, setCounts] = useState({
    starsCount: 0,
    downloadsCount: 0,
    sponsorsCount: 0,
    products: 0,
  });

  const counterRef = useRef(null);

  useEffect(() => {
    const targets = [
      { key: "starsCount", count: 24, suffix: "" },
      { key: "downloadsCount", count: 238, suffix: "+" },
      { key: "sponsorsCount", count: 1, suffix: "+" },
      { key: "products", count: 100, suffix: "+" },
    ];

    const maxCount = Math.max(...targets.map((target) => target.count));

    const animateCountUp = (target, duration) => {
      let currentCount = 0;
      const increment = Math.ceil(target.count / (duration / 0.0001));
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target.count) {
          clearInterval(interval);
          currentCount = target.count;
          setCounts((prevCounts) => ({
            ...prevCounts,
            [target.key]: currentCount + target.suffix,
          }));
        } else {
          setCounts((prevCounts) => ({
            ...prevCounts,
            [target.key]: currentCount,
          }));
        }
      }, 10);
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          targets.forEach((target) => {
            animateCountUp(target, maxCount / 100);
          });
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.5,
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={counterRef}
      className="md:mt-10 relative bg-fixed bg-center bg-cover bg-counter-image "
    >


      <div className="pt-12 sm:pt-20 bg-opacity-75 ">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-fontPrimary">
            <h2 className="text-3xl font-extrabold leading-9 sm:text-4xl sm:leading-10">
              Built to Last, Engineered for Strength
            </h2>
            <p className="mt-3 text-xl leading-7 sm:mt-4">
              Our steel products are the backbone of countless structures,
              ensuring reliability and performance.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg shadow-lg grid sm:grid-cols-4">
                  <div className="flex flex-col p-6 text-center border-b border-fontPrimary sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-fontPrimary">
                      Employees
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-fontPrimary">
                      {counts.starsCount}
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-fontPrimary sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-fontPrimary">
                      Clients
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-fontPrimary">
                      {counts.downloadsCount}
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-fontPrimary sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-fontPrimary">
                      Years Of Experience
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-fontPrimary">
                      {counts.sponsorsCount}
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-fontPrimary sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-fontPrimary">
                    Products
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold leading-none text-fontPrimary">
                      {counts.products}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default ProjectCounter;
