import { FaPhone, FaEnvelope, FaGlobe, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Social Media Banner */}
        <div className="text-center mb-8 pb-8 border-b border-gray-800">
          <p className="mb-4">Get connected with us on social networks!</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700">
              <FaFacebookF />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500">
              <FaTwitter />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nepal Oil Corporation</h3>
            <img 
              src="/src/assets/noclogo.png"
              alt="NOC Logo"
              className="h-16 w-auto mb-4"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white">Photo Gallery</a></li>
              <li><Link to="#contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><a href="https://noc.org.np" className="text-gray-400 hover:text-white">Old Website</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="https://www.bolpatra.gov.np/" target="_blank" className="text-gray-400 hover:text-white">E-bidding</a></li>
              <li><a href="https://mof.gov.np/" target="_blank" className="text-gray-400 hover:text-white">Ministry of Finance</a></li>
              <li><a href="https://www.moha.gov.np/" target="_blank" className="text-gray-400 hover:text-white">Ministry of Home & Affairs</a></li>
              <li><a href="https://moics.gov.np/" target="_blank" className="text-gray-400 hover:text-white">Ministry of Supply</a></li>
              <li><a href="https://www.nrb.org.np/" target="_blank" className="text-gray-400 hover:text-white">Nepal Rastra Bank</a></li>
              <li><a href="https://www.opmcm.gov.np/en/" target="_blank" className="text-gray-400 hover:text-white">Office of the Prime Minister</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaGlobe className="text-accent" />
                <a href="http://www.noc.org.np" className="text-gray-400 hover:text-white">www.noc.org.np</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-accent" />
                <a href="mailto:info@noc.org.np" className="text-gray-400 hover:text-white">info@noc.org.np</a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-accent" />
                <span className="text-gray-400">977-1-5364975, 5364974, 5359548</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-accent" />
                <span className="text-gray-400">30004706</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2009 - 2024 Nepal Oil Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;