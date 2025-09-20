import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-blue-900 to-blue-800 font-sans text-white py-10 px-6 bg-cover"
      style={{ backgroundImage: "url('footer_image.png')" }}
    >
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 xs:grid-cols-4 md:grid-cols-4 gap-8 w-full px-3 xs:px-5 md:px-12 text-center xs:text-left">

        {/* Logo + Address */}
        <div className="space-y-2">
          <img
            src="shankar_logo2.png"
            alt="TSSC Logo"
            className="w-24 mx-auto xs:mx-0 mb-4"
          />
          <address className="not-italic text-xs sm:text-sm md:text-base leading-relaxed">
            Corporate Office <br />
            VaishnoDevi Centre 12, <br />
            Bhubaneswar, Odisha, INDIA
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-xs sm:text-sm md:text-base">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Business</a></li>
            <li><a href="#" className="hover:text-gray-300">Product &amp; Services</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-4">Products</h3>
          <ul className="space-y-2 text-xs sm:text-sm md:text-base">
            <li><a href="#" className="hover:text-gray-300">Crash Guard</a></li>
            <li><a href="#" className="hover:text-gray-300">Asbestos Roofing Sheet</a></li>
            <li><a href="#" className="hover:text-gray-300">Structural Steels</a></li>
            <li><a href="#" className="hover:text-gray-300">Mild Steel Plates</a></li>
            <li><a href="#" className="hover:text-gray-300">Hardware Products</a></li>
            <li><a href="#" className="hover:text-gray-300">MS Pipes</a></li>
          </ul>
        </div>

        {/* Connect & Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Connect with us</h3>

          <div className="flex justify-center xs:justify-start space-x-4 mb-6 text-lg sm:text-xl md:text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300"><FaYoutube /></a>
          </div>

          <div className="space-y-2 text-xs sm:text-sm md:text-base">
            <p className="font-medium">Contact us</p>
            <p><a href="tel:+9112345678" className="hover:text-gray-300">+91 1234 5678</a></p>
            <p><a href="tel:+9112348956" className="hover:text-gray-300">+91 1234 8956</a></p>
            <p className="flex items-center justify-center xs:justify-start gap-2">
              <FaEnvelope aria-hidden="true" />
              <a
                href="mailto:vaishnodevisteel@gmail.com"
                className="hover:text-gray-300"
              >
                vaishnodevisteel@gmail.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
