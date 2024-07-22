import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = [
  {
    name: "Rajesh Kumar",
    occupation: "Operations Manager",
    testimony: `"Hariom Steels delivers exceptional quality and reliability. Their commitment to excellence and attention to detail set them apart in the industry."`,
  },
  {
    name: "Sita Sharma",
    occupation: "Project Engineer",
    testimony: `"The quality of materials and service provided by Hariom Steels is unparalleled. They have consistently exceeded our expectations in every project we undertake."`,
  },
  {
    name: "Arvind Patel",
    occupation: "Procurement Specialist",
    testimony: `"Hariom Steels stands out for their professionalism and efficiency. Their products are of high quality and their customer service is always responsive and helpful."`,
  },
];

const Testimonials = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section py-8 mt-10">
      <div className="customContainer ">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-fontPrimary">
            What Our Clients Say
          </h3>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-primary rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
                <p className=" mb-4 italic text-fontPrimary">"{testimonial.testimony}"</p>
                <h5 className="text-lg font-semibold text-fontPrimary">
                  {testimonial.name}
                </h5>
                <p className="text-fontPrimary">{testimonial.occupation}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default React.memo(Testimonials);
