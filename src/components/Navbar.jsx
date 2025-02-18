import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navRef = useRef(null);
  const productRef = useRef(null);
  const newsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const transitionPoint = 100;
      const progress = Math.min(scrollPosition / transitionPoint, 1);
      setScrollProgress(progress);
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (productRef.current && !productRef.current.contains(event.target)) {
        setIsProductOpen(false);
      }
      if (newsRef.current && !newsRef.current.contains(event.target)) {
        setIsNewsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav 
      className={`
        sticky top-0 z-50 w-full transition-all duration-500 ease-in-out
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-[url("/src/assets/navbg.jpg")] bg-cover bg-center'}
      `}
      style={{
        height: `${Math.max(96 - (scrollProgress * 24), 72)}px`,
      }}
    >
      {/* Background overlay */}
      <div 
        className="absolute inset-0 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          opacity: isScrolled ? '0.95' : '0.85',
          pointerEvents: 'none'
        }}
      />

      <div className="w-full h-full px-4 lg:px-8">
        <div className="flex justify-between items-center h-full max-w-full mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img 
              src="/src/assets/noclogo.png" 
              alt="Nepal Oil Corporation Logo" 
              className="h-16 w-auto transition-transform duration-500"
            />
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:block relative z-10">
            <input
              type="text"
              placeholder="Search..."
              className="w-[350px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 bg-white/90"
            />
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-black focus:outline-none z-10 hover:bg-black/5 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 z-10">
            <Link 
              to="/" 
              className="text-black font-bold hover:text-blue-700 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-black font-bold hover:text-blue-700 transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/prices" 
              className="text-black font-bold hover:text-blue-700 transition-colors"
            >
              Price
            </Link>

            {/* Products Dropdown */}
            <div ref={productRef} className="relative group">
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="text-black font-bold hover:text-blue-700 transition-colors flex items-center space-x-1"
              >
                <span>Products</span>
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isProductOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductOpen && (
                <div className="absolute top-full right-0 w-56 bg-white shadow-xl rounded-lg mt-2 py-2 border border-gray-100">
                  <div className="flex flex-col">
                    {[
                      { title: 'All Products', path: '/product' },
                      { title: 'Petrol', path: '/product/petrol' },
                      { title: 'Diesel', path: '/product/diesel' },
                      { title: 'Kerosene', path: '/product/kerosene' },
                      { title: 'LP Gas', path: '/product/lpg' },
                      { title: 'Aviation Fuel', path: '/product/aviation' },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="px-4 py-2 text-black hover:bg-gray-50 transition-colors"
                        onClick={() => setIsProductOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* News & Notices Dropdown */}
            <div ref={newsRef} className="relative group">
              <button
                onClick={() => setIsNewsOpen(!isNewsOpen)}
                className="text-black font-bold hover:text-blue-700 transition-colors flex items-center space-x-1"
              >
                <span>News & Notices</span>
                <ChevronDown size={16} className={`transform transition-transform duration-200 ${isNewsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isNewsOpen && (
                <div className="absolute top-full right-0 w-56 bg-white shadow-xl rounded-lg mt-2 py-2 border border-gray-100">
                  <div className="flex flex-col">
                    {[
                      { title: 'Latest News', path: '/news/latest' },
                      { title: 'Press Releases', path: '/news/press' },
                      { title: 'Notices', path: '/news/notices' },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="px-4 py-2 text-black hover:bg-gray-50 transition-colors"
                        onClick={() => setIsNewsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contactus" 
              className="px-6 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu */}
          <div 
            ref={navRef}
            className={`
              fixed top-0 right-0 h-screen w-full bg-white/95 backdrop-blur-md transform transition-transform duration-300 ease-in-out z-40
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
              lg:hidden
            `}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <div className="flex justify-between items-center">
                <Link 
                  to="/" 
                  className="text-black text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-black focus:outline-none hover:bg-black/5 rounded-lg transition-colors"
                >
                  <X size={28} />
                </button>
              </div>
              <div className="flex flex-col space-y-6 mt-8">
                <Link 
                  to="/about" 
                  className="text-black text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/prices" 
                  className="text-black text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Price
                </Link>
                
                <div className="space-y-4">
                  <button
                    onClick={() => setIsProductOpen(!isProductOpen)}
                    className="text-black text-lg font-bold flex items-center justify-between w-full"
                  >
                    <span>Products</span>
                    <ChevronDown size={20} className={`transform transition-transform duration-200 ${isProductOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProductOpen && (
                    <div className="pl-4 space-y-4">
                      {[
                        { title: 'All Products', path: '/product' },
                        { title: 'Petrol', path: '/product/petrol' },
                        { title: 'Diesel', path: '/product/diesel' },
                        { title: 'Kerosene', path: '/product/kerosene' },
                        { title: 'LP Gas', path: '/product/lpg' },
                        { title: 'Aviation Fuel', path: '/product/aviation' },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block text-black/80 hover:text-black transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => setIsNewsOpen(!isNewsOpen)}
                    className="text-black text-lg font-bold flex items-center justify-between w-full"
                  >
                    <span>News & Notices</span>
                    <ChevronDown size={20} className={`transform transition-transform duration-200 ${isNewsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isNewsOpen && (
                    <div className="pl-4 space-y-4">
                      {[
                        { title: 'Latest News', path: '/news/latest' },
                        { title: 'Press Releases', path: '/news/press' },
                        { title: 'Notices', path: '/news/notices' },
                      ].map((item, index) => (
                        <Link
                          key={index}
                          to={item.path}
                          className="block text-black/80 hover:text-black transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  to="/contactus" 
                  className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;