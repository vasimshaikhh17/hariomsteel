import React, { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import {
  IoIosArrowForward,
  IoIosArrowDown,
  IoIosMenu,
  IoIosClose,
} from "react-icons/io";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { categories } from "./navbarlinks";
import logo from "../../assets/images/Logo.png";

import INDIA from "../../assets/images/makeinindia.png";
import iso from "../../assets/images/iso.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [mobileSubDropdownOpen, setMobileSubDropdownOpen] = useState(null);

  const [bgColor, setBgColor] = useState("bg-secondary lg:bg-white");

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setBgColor(" bg-secondary lg:bg-secondary");
    } else {
      setBgColor("bg-secondary");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen((prev) => (prev === index ? null : index));
    setMobileSubDropdownOpen(null);
  };

  const toggleMobileSubDropdown = (index) => {
    setMobileSubDropdownOpen((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <header className="hidden lg:block shadow-md text-fontPrimary rounded-b-full bg-primary ">
        <div className="flex justify-between items-center h-14 mx-40">
          <div className="z-50">
            {" "}
            <p className="flex items-center">
              <MdMailOutline className="mr-2 text-xl" />
              Mail :&nbsp;
              <a
                href="mailto:sales@hariommsteel.com"
                className="hover:text-tertiary  w-fit"
              >
                sales@hariomsteel.com
              </a>
            </p>
          </div>
          <div className="flex gap-4 z-50">
            <img src={INDIA} className="w-12 h-auto" alt="India Flag" />
            <img src={iso} className="w-12 h-auto" alt="ISO Certificate" />

            <p className="flex items-center">
              <IoCallOutline className="mr-2 text-xl" />
              Mobile :&nbsp;
              <a
                href="tel:+919082205826"
                className="hover:text-tertiary  w-fit"
              >
                +91 9082205826
              </a>
            </p>
          </div>
        </div>
      </header>

      <nav
        className={`sticky top-0 z-50 py-2 md:px-10 mx-auto lg:w-[80vw] lg:rounded-b-full transition-colors duration-300 box-shadow2  ${bgColor}`}
      >
        <div className="flex items-center font-medium justify-between mx-3 md:mx-0 lg:h-12 ">
          <div className="hidden lg:inline-flex items-center">
            <Link to={"/"} className="hidden lg:inline-flex items-center">
              <img src={logo} alt="Logo" width={50} />
              <span className="text-tertiary text-2xl font-bold fade-up uppercase">
                Hariom Steel
              </span>
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <ul className="lg:flex hidden uppercase items-center gap-1">
              {categories.map((category) => (
                <div className="group relative" key={category._id}>
                  <NavLink
                    to={category.page}
                    className={({ isActive }) =>
                      `p-2 flex justify-between items-center text-[13px] font-bold hover:text-primary ${
                        isActive ? "text-fontSecondary" : "text-fontDefault"
                      }`
                    }
                  >
                    {category.title}
                    {category.sub_category &&
                      category.sub_category.length > 0 && (
                        <IoIosArrowForward className="ml-2 arrow-icon transition-transform duration-300 ease-in-out group-hover:rotate-90" />
                      )}
                  </NavLink>
                  {category.sub_category &&
                    category.sub_category.length > 0 && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block w-48 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 shadow-2xl font-bold ">
                        {category.sub_category.map((subcat) => (
                          <div key={subcat._id} className="relative group-sub ">
                            <NavLink
                              to={subcat.page}
                              className={({ isActive }) =>
                                `bg-secondary  hover:bg-primary hover:text-fontPrimary p-2 grid grid-cols-1 w-full  font-bold    ${
                                  isActive
                                    ? "text-fontSecondary"
                                    : "text-fontDefault"
                                }`
                              }
                            >
                              <div className="flex items-center justify-between">
                                <div className="duration-100 pl-3 text-[12px] w-fit">
                                  {subcat.title}
                                </div>
                                <div>
                                  {subcat.sub_sub_category &&
                                    subcat.sub_sub_category.length > 0 && (
                                      <IoIosArrowForward className="arrow-icon transition-transform duration-300 ease-in-out group-sub-hover:rotate-90" />
                                    )}
                                </div>
                              </div>
                            </NavLink>
                            {subcat.sub_sub_category && (
                              <div className="absolute left-full top-0 w-48 hidden group-sub-hover:block transition-all duration-300 ease-in-out opacity-0 group-sub-hover:opacity-100 bg-secondary ">
                                {subcat.sub_sub_category.map((subSubCat) => (
                                  <NavLink
                                    to={subSubCat.page}
                                    key={subSubCat._id}
                                    className={({ isActive }) =>
                                      `block px-3 py-2 text-[12px] hover:bg-primary  hover:text-secondary font-bold uppercase ${
                                        isActive
                                          ? "text-fontSecondary"
                                          : "text-fontDefault"
                                      }`
                                    }
                                  >
                                    {subSubCat.title}
                                  </NavLink>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <button
              className="bg-primary hover:bg-tertiary text-fontPrimary font-bold py-2 px-4 rounded"
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              Contact Us
            </button>
          </div>

          <div className="flex items-center justify-between w-full lg:hidden">
            <div className="flex items-center">
              <Link to={"/"}>
                <img src={logo} width={50} alt="" />
              </Link>
              {/* <span className="uppercase">Hariom Steel</span> */}
            </div>

            <div className="flex items-center gap-3">
              <div>
                <button
                  className="bg-primary hover:bg-tertiary text-fontPrimary font-bold py-2 px-4 rounded"
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Contact Us
                </button>
              </div>
              <div
                className="text-3xl lg:hidden z-50"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <IoIosClose className="text-fontDefault" />
                ) : (
                  <IoIosMenu className="text-fontDefault" />
                )}
              </div>
            </div>
          </div>

          <ul
            className={`lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-14 pl-4 duration-500 ${
              open ? "left-0" : "left-[-100%]"
            }`}
          >
            {categories.map((category, index) => (
              <li key={category._id}>
                <div className="flex justify-between items-center mx-6 my-3 p-4">
                  <NavLink
                    to={category.page}
                    className={({ isActive }) =>
                      `text-[12px] ${isActive ? "text-fontSecondary" : "text-fontDefault"}`
                    }
                    onClick={handleLinkClick}
                  >
                    {category.title}
                  </NavLink>
                  {category.sub_category &&
                    category.sub_category.length > 0 && (
                      <button
                        className="text-lg"
                        onClick={() => toggleMobileDropdown(index)}
                      >
                        {mobileDropdownOpen === index ? (
                          <IoIosArrowDown />
                        ) : (
                          <IoIosArrowForward />
                        )}
                      </button>
                    )}
                </div>
                {mobileDropdownOpen === index && (
                  <div className="pl-5">
                    {category.sub_category.map((subcat, subIndex) => (
                      <div key={subcat._id}>
                        <div className="flex justify-between items-center mt-2 mx-6">
                          <div className="flex items-center justify-start">
                            <NavLink
                              to={subcat.page}
                              className={({ isActive }) =>
                                `hover:text-fontSecondary duration-100 pl-3 text-[12px] ${
                                  isActive
                                    ? "text-fontSecondary"
                                    : "text-fontDefault"
                                }`
                              }
                              onClick={handleLinkClick}
                            >
                              {subcat.title}
                            </NavLink>
                          </div>
                          {subcat.sub_sub_category &&
                            subcat.sub_sub_category.length > 0 && (
                              <button
                                className="text-lg"
                                onClick={() =>
                                  toggleMobileSubDropdown(subIndex)
                                }
                              >
                                {mobileSubDropdownOpen === subIndex ? (
                                  <IoIosArrowDown />
                                ) : (
                                  <IoIosArrowForward />
                                )}
                              </button>
                            )}
                        </div>
                        {mobileSubDropdownOpen === subIndex &&
                          subcat.sub_sub_category && (
                            <div className="pl-5 ml-10">
                              {subcat.sub_sub_category.map((subSubCat) => (
                                <NavLink
                                  to={subSubCat.page}
                                  key={subSubCat._id}
                                  className={({ isActive }) =>
                                    `block mt-2 text-[12px] hover:text-fontSecondary ${
                                      isActive
                                        ? "text-fontSecondary"
                                        : "text-fontDefault"
                                    }`
                                  }
                                  onClick={handleLinkClick}
                                >
                                  {subSubCat.title}
                                </NavLink>
                              ))}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
