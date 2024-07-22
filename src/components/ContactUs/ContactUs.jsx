import React, { useState } from "react";
import axios from "axios";
import Layout from "../common/Layout";
import ContactLoader from "./ContactLoader";

const ContactUs = () => {
  const [msg, setMsg] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    area: "",
    message: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    setMsg(<ContactLoader />);
    e.preventDefault();
    try {
    const response =   await axios.post(
        "https://hariomsteel.onrender.com/api/v1/form/user-form-submit",
        formData
      );
      
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        city: "",
        area: "",
        message: "",
        subject: "",
      });
      console.log(response);
      if (response) {
        console.log(response);
        setMsg('');
        setMsg(response?.data?.message);
      }
    } catch (error) {
      console.error("There was an error sending the message!", error);
      setMsg(error?.response?.data?.message)

      setTimeout(() => {
        setMsg("");
      }, 4000);
    }
  };

  return (
    <Layout>
      <div>
        <section className="bg-sectionbg" id="contact">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-10">
            <div className="mb-4">
              <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p className="text-xl font-semibold uppercase tracking-wide text-primary">
                  Contact US
                </p>
                <h2 className="font-heading mt-4 mb-4 font-bold tracking-tight text-fontDefault text-3xl sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-xl text-fontDefault">
                  We're here to answer your questions and provide the
                  information you need. Feel free to reach out to us using any
                  of the methods below.
                </p>
              </div>
            </div>
            <div className="flex items-stretch justify-center">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-full pr-6">
                  <p className="mt-3 mb-12 text-lg text-fontDefault">
                    Whether you have a question about our products, services,
                    pricing, or anything else, our team is ready to assist you.
                  </p>
                  <ul className="mb-6 md:mb-0 space-y-6">
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-fontDefault">
                          Our Address
                        </h3>
                        <p className="text-fontDefault">
                          GROUND FLOOR, SHED NO. 5,
                        </p>
                        <p className="text-fontDefault">
                          SHREE RAJESHWAR IND. ESTATE 2,
                        </p>
                        <p className="text-fontDefault">
                          CHAKUDIYA MAHADEV MANDIR ROAD, Rakhial,
                        </p>
                        <p className="text-fontDefault">
                          Ahmedabad, Gujarat, 380023
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                          <path d="M15 7a2 2 0 0 1 2 2"></path>
                          <path d="M15 3a6 6 0 0 1 6 6"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-fontDefault">
                          Contact
                        </h3>
                        <p className="text-fontDefault">
                          Mobile:&nbsp;
                          <a
                            href="tel:+919082205826"
                            className="hover:text-tertiary"
                          >
                            {" "}
                            +91 9082205826
                          </a>
                        </p>
                        <p className="text-fontDefault">
                          Mail:&nbsp;
                          <a
                            href="mailto:sales@hariommsteel.com"
                            className="hover:text-tertiary"
                          >
                            sales@hariomsteel.com
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                          <path d="M12 7v5l3 3"></path>
                        </svg>
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-fontDefault">
                          Working hours
                        </h3>
                        <p className="text-fontDefault">
                          Monday - Saturday: 10:00 am - 06:00 pm
                        </p>
                        <p className="text-fontDefault">Sunday: Closed</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12 bg-secondary border border-gray-300 rounded-md">
                  <h2 className="mb-4 text-2xl font-bold text-fontDefault">
                    Ready to Get Started?
                  </h2>
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            htmlFor="firstName"
                            className="pb-1 text-xs uppercase tracking-wider text-fontDefault"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            autoComplete="given-name"
                            placeholder="Your first name"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-fontDefault"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            htmlFor="lastName"
                            className="pb-1 text-xs uppercase tracking-wider text-fontDefault"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            autoComplete="family-name"
                            placeholder="Your last name"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-fontDefault"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            htmlFor="email"
                            className="pb-1 text-xs uppercase tracking-wider text-fontDefault"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            autoComplete="email"
                            placeholder="Your email address"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-fontDefault"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            htmlFor="phoneNumber"
                            className="pb-1 text-xs uppercase tracking-wider text-fontDefault"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            id="phoneNumber"
                            autoComplete="tel"
                            placeholder="Your phone number"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-fontDefault"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            htmlFor="city"
                            className="pb-1 text-xs uppercase tracking-wider text-fontDefault"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            autoComplete="address-level2"
                            placeholder="Your city"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-fontDefault"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            htmlFor="area"
                            className="pb-1 text-xs uppercase tracking-wider text-fontDefault"
                          >
                            Area
                          </label>
                          <input
                            type="text"
                            id="area"
                            autoComplete="address-level3"
                            placeholder="Your area"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-fontDefault"
                            name="area"
                            value={formData.area}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            htmlFor="subject"
                            className="pb-1 text-xs uppercase tracking-wider text-fontDefault"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            autoComplete="off"
                            placeholder="Subject of your message"
                            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-fontDefault"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="message"
                          className="pb-1 text-xs uppercase tracking-wider text-fontDefault"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          cols="30"
                          rows="5"
                          placeholder="Write your message..."
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-fontDefault"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="w-full bg-primary text-secondary hover:bg-fontSecondary px-6 py-3 font-xl rounded-md"
                      >
                        Send Message
                      </button>
                    </div>
                    <div>{msg}</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactUs;
