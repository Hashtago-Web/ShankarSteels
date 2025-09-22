import React from "react";

export default function Contact() {
  return (
    <div className="font-sans ">
      {/* Hero Section */}
      <div
        className=" -z-1 h-[45vh] sm:[h-65vh] xl:px-22 sm:h-155 bg-cover bg-center flex flex-col justify-end text-white "
        style={{ backgroundImage: "url('contact_image.png')" }}
      >
        <div className="flex flex-col md:text-left md:ml-10 text-center gap-2 mb-30 sm:mb-60 md:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide">
            Contact Us
          </h2>
          <p className="text-xl  sm:text-2xl lg:text-3xl">CONNECT WITH US</p>
        </div>
      </div>

      {/* Corporate Office Section */}
      <section className="mt-2 sm:mt-6 md:mt-10 mb-6 md:mb-10 px-6 py-2">
        <div className="max-w-4xl font-sm mx-auto text-center">
          <h2 className="text-3xl sm:text-3xl md:text-4xl mb-2 text-[#000000] md:mb-5 lg:text-5xl ">
            CONTACT <span className="text-[#001E55]">US</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-100 text-black p-8 rounded-4xl shadow-xl">
          <h3 className="text-xl font-bold text-[#001E55] mb-4 lg:text-3xl">
            CORPORATE OFFICE
          </h3>
          <p>Bhubaneswar</p>
          <p className="mt-3">
            268, Puri - Cuttack Rd, near Okil Baug, Laxmisagar, Bhubaneswar,
          </p>
          <p>Odisha 751006</p>
          <p className="mt-3">
            <span className="font-sm">Tel:</span> +91 4592782659
          </p>
          <p>
            <span className="font-sm">Email:</span> info@aplopollo.com
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-[#000000] font-bold mb-2 sm:mb-4 lg:text-5xl">
            Get in <span className="text-[#001E55] ">touch</span>
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-4 md:mt-8 ">
            <input
              type="text"
              placeholder="Full Name*"
              className="placeholder-black rounded-xs text-xs px-2 py-4 border w-full h-4 bg-[#FFFFFF] lg:text-sm"
            />
            <input
              type="email"
              placeholder="Email*"
              className="placeholder-black rounded-xs text-xs px-2 py-4 border text-[#000000] w-full h-4 bg-[#FFFFFF] lg:text-sm"
            />
            <input
              type="text"
              placeholder="Number*"
              className="placeholder-black rounded-xs text-xs px-2 py-4 border  text-[#000000] w-full h-4 bg-[#FFFFFF] lg:text-sm"
            />
            <input
              type="text"
              placeholder="City*"
              className="placeholder-black rounded-xs text-xs px-2 py-4 border text-[#000000] w-full h-4 bg-[#FFFFFF]  lg:text-sm"
            />
            <textarea
              rows="4"  
              placeholder="Message*"
              className="placeholder-black rounded-xs text-xs px-2 py-4 border text-[#000000] w-full h-10 md:col-span-2 bg-[#FFFFFF] lg:text-sm"
            ></textarea>

            {/* Centered Submit Button */}
            <div className="md:col-span-2 mb-5 lg:mb-10">
              <button
                type="submit"
                className="bg-[#001E55] hover:bg-blue-800 rounded-sm font-sm text-white py-3 w-full sm:w-1/2 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}