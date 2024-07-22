import React, { useEffect, useState } from "react";

import banner from "../../assets/images/banner.jpg";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: banner,
      title: "Innovative Solutions",
      description: "Explore our cutting-edge solutions designed to drive efficiency and innovation in your industry.",
      buttons: [
        { text: "Learn More", link: "/solutions" },
        { text: "Contact Us", link: "/contact" },
      ],
    },
    {
      image: banner1,
      title: "Expert Team",
      description: "Our team of experts is dedicated to providing top-notch services tailored to your business needs.",
      buttons: [
        { text: "Meet the Team", link: "/team" },
        { text: "Our Services", link: "/services" },
      ],
    },
    {
      image: banner2,
      title: "Quality Assurance",
      description: "We prioritize quality at every step, ensuring our products meet the highest standards.",
      buttons: [
        { text: "Our Commitment", link: "/quality" },
        { text: "Certifications", link: "/certifications" },
      ],
    },
    {
      image: banner3,
      title: "Global Reach",
      description: "With a global presence, we are equipped to handle projects of any scale, anywhere in the world.",
      buttons: [
        { text: "Global Network", link: "/network" },
        { text: "Get in Touch", link: "/contact" },
      ],
    },
    {
      image: banner4,
      title: "Sustainable Practices",
      description: "Committed to sustainability, we integrate eco-friendly practices into our operations.",
      buttons: [
        { text: "Our Approach", link: "/sustainability" },
        { text: "Join Us", link: "/careers" },
      ],
    },
    {
      image: banner5,
      title: "Customer Satisfaction",
      description: "Customer satisfaction is at the core of our business. We strive to exceed expectations every time.",
      buttons: [
        { text: "Testimonials", link: "/testimonials" },
        { text: "Support", link: "/support" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change 5000 to adjust the interval (5 seconds)
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative w-full ">
      {/* Carousel wrapper */}
      <div className="relative h-[400px] overflow-hidden md:h-[700px] lg:-mt-36 -z-50">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out  ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* <Link to={slide.buttons[0].link} style={{zIndex : "999"}} className="z-50"> </Link> */}

            <img
              src={slide.image}
              className="w-full h-full object-cover object-top  "
              alt={`Slide ${index + 1}`}
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-fontPrimary p-4 bg-fontDefault bg-opacity-15 z-50" >
              <h2 className="text-2xl md:text-4xl mb-4">{slide.title}</h2>
              <p className="text-base md:text-lg mb-6 text-center  md:w-144 ">
                {slide.description}
              </p>
{/* 
              <Link
              className="z-[99999]">cool</Link> */}
              {/* <div className="flex space-x-4">
                <Link
                  to={slide.buttons[0].link}
                  className="border border-fontSecondary  px-4 py-2 rounded z-40"
                >
                  {slide.buttons[0].text}
                </Link>
                <Link
                  to={slide.buttons[1].link}
                  className="bg-fontSecondary px-4 py-2 rounded "
                >
                  {slide.buttons[1].text}
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Controllers */}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-3 z-10 bg-fontPrimary bg-opacity-50 p-2 rounded-full  md:block"
        onClick={goToPrevSlide}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-3 z-10 bg-fontPrimary bg-opacity-50 p-2 rounded-full  md:block"
        onClick={goToNextSlide}
      >
        <IoIosArrowForward />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-fontSecondary" : "bg-gray-600"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
