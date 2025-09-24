import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      {/* Footer after md screen */}
      <footer
        className="hidden md:block bg-gradient-to-r from-blue-900 to-blue-800 font-sans text-white py-10 px-6 bg-center"
        style={{ backgroundImage: "url('footer_image.png')" }}
      >
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 xs:grid-cols-4 md:grid-cols-4 gap-8 w-full px-3 xs:px-5 md:px-12 text-center xs:text-left">

          {/* Logo + Address */}
          <div className="space-y-2">
            <img
              src="shankar_logo2.png"
              alt="TSSC Logo"
              className="w-24 xs:mx-0 mb-4"
            />
            <address className="not-italic text-xs sm:text-sm text-left md:text-base leading-relaxed">
              Corporate Office <br />
              VaishnoDevi Centre 12, <br />
              Bhubaneswar, Odisha, INDIA
            </address>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="font-semibold text-sm  sm:text-base md:text-lg mb-4  text-left">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base  text-left">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Business</a></li>
              <li><a href="#" className="hover:text-gray-300">Product &amp; Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base md:text-lg mb-4 text-left ">Products</h3>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base  text-left">
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
            <h3 className="font-semibold text-lg mb-4  text-left">Connect with us</h3>

            <div className="flex justify-start space-x-4 mb-6">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300 text-lg lg:text-xl"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300 text-lg lg:text-xl"><FaInstagram /></a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-300 text-lg lg:text-xl"><FaYoutube /></a>
            </div>

            <div className="space-y-2 text-xs sm:text-sm md:text-base  text-left">
              <p className="font-medium">Contact us</p>
              <p><a href="tel:+9112345678" className="hover:text-gray-300">+91 1234 5678</a></p>
              <p><a href="tel:+9112348956" className="hover:text-gray-300">+91 1234 8956</a></p>
              <p className="">
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


      {/* Footer before md screen */}
      <footer
        className="md:hidden font-sans text-white py-5 px-4 bg-center bg-cover"
        style={{ backgroundImage: "url('footer_image.png')" }}
      >
        {/* Flex Layout after md screen */}
        <div className="flex w-full flex-col px-6">

          {/* Logo */}
          <div className="flex">
            <img
              src="shankar_logo2.png"
              alt="TSSC Logo"
              className="w-24"
            />
          </div>

          <div className="flex gap-10">
            {/* Left Column */}
            <div className="flex-1 flex flex-col w-full gap-10 md:flex-row ">


              {/* Connect with us */}
              <div>
                <h3 className="font-bold text-base mb-3">Connect with us</h3>
                <div className="flex gap-4 text-lg">
                  <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
                  <a href="#" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram /></a>
                  <a href="#" aria-label="YouTube" className="hover:text-gray-300"><FaYoutube /></a>
                </div>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="font-bold mb-2">Contact us</h3>
                <p><a href="tel:+9112345678" className="hover:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed ">+91 8284915235</a></p>
                <p><a href="tel:+9112348956" className="hover:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">+91 8284562481</a></p>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  <a
                    href="mailto:vaishnodevisteel@gmail.com"
                    className="hover:text-gray-300"
                  >
                    vaishnodevi<br />steel@gmail.com
                  </a>
                </p>
              </div>

              {/* Corporate Office */}
              <div>
                <h3 className="font-semibold mb-2">Corporate Office</h3>
                <address className="not-italic text-xs sm:text-sm md:text-base leading-relaxed">
                  VaishnoDevi Centre 12, <br />
                  Bhubaneswar, Odisha, INDIA
                </address>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col items-center  w-1/2 md:flex-row space-y-8 ">
              {/* Quick Links */}
              <div className="w-full flex-col items-center">
                <h3 className="font-semibold text-base mb-4">Quick Links</h3>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base">
                  <li><a href="#" className="hover:text-gray-300">Home</a></li>
                  <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                  <li><a href="#" className="hover:text-gray-300">Business</a></li>
                  <li><a href="#" className="hover:text-gray-300">Product &amp; Services</a></li>
                  <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                </ul>
              </div>

              {/* Products */}
              <div className="w-full flex-col items-center">
                <h3 className="font-semibold text-base mb-4">Products</h3>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base">
                  <li><a href="#" className="hover:text-gray-300">Crash Guard</a></li>
                  <li><a href="#" className="hover:text-gray-300">Asbestos Roofing Sheet</a></li>
                  <li><a href="#" className="hover:text-gray-300">Structural Steels</a></li>
                  <li><a href="#" className="hover:text-gray-300">Mild Steel Plates</a></li>
                  <li><a href="#" className="hover:text-gray-300">Hardware Products</a></li>
                  <li><a href="#" className="hover:text-gray-300">MS Pipes</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
