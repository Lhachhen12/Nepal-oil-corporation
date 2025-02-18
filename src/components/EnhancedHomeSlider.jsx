import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, TrendingUp, Fuel, AlertCircle } from 'lucide-react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import noc from "../assets/noc.jpg"
import aviation from "../assets/aviation.jpg"
import oil from "../assets/oil.jpg"

const priceData = [
  { month: 'Jan', petrol: 181, diesel: 168, lpg: 1575 },
  { month: 'Feb', petrol: 178, diesel: 165, lpg: 1575 },
  { month: 'Mar', petrol: 175, diesel: 162, lpg: 1550 },
  { month: 'Apr', petrol: 173, diesel: 160, lpg: 1550 },
  { month: 'May', petrol: 170, diesel: 157, lpg: 1525 }
];

const locationPrices = [
  { city: 'Kathmandu', petrol: 181, diesel: 168, emergency: true },
  { city: 'Pokhara', petrol: 182, diesel: 169, emergency: false },
  { city: 'Biratnagar', petrol: 180, diesel: 167, emergency: false },
  { city: 'Birgunj', petrol: 179, diesel: 166, emergency: true }
];
  const EnhancedHomeSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const totalSlides = 4;
    
    useEffect(() => {
      let timer;
      if (!isPaused) {
        timer = setInterval(() => {
          nextSlide();
        }, 4000);
      }
      return () => clearInterval(timer);
    }, [currentSlide, isPaused]);
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
    return (
        <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 z-10 bg-white/90 p-1 sm:p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 z-10 bg-white/90 p-1 sm:p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-800" />
      </button>

      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Hero Slide - Responsive */}
          <div className="w-full flex-shrink-0 h-[500px] bg-gradient-to-r from-blue-900 to-blue-700">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-8 h-full flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0">
                <div className="text-white max-w-3xl">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 animate-fade-in">Nepal Oil Corporation</h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-8 animate-slide-up">Fueling Nepal's Progress Since 1970</p>
                  <p className="text-base md:text-lg mb-4 sm:mb-8 leading-relaxed animate-slide-up">
                    As Nepal's premier energy provider, we're committed to:
                  </p>
                  <ul className="list-none space-y-1 sm:space-y-2 mb-4 sm:mb-8">
                    <li className="flex items-center text-base md:text-lg">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="flex-1">Ensuring uninterrupted fuel supply nationwide</span>
                    </li>
                    <li className="flex items-center text-base md:text-lg">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="flex-1">Maintaining strategic petroleum reserves</span>
                    </li>
                    <li className="flex items-center text-base md:text-lg">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="flex-1">Implementing sustainable energy practices</span>
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-base md:text-lg font-semibold transition-colors">
                      Check Today's Prices
                    </button>
                    <button className="border-2 border-white text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors">
                      About NOC
                    </button>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-xl">
                    <h3 className="text-white text-xl font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-3">
                      <div className="text-white">
                        <p className="text-sm opacity-80">Daily Distribution</p>
                        <p className="text-2xl font-bold">2.5M Liters</p>
                      </div>
                      <div className="text-white">
                        <p className="text-sm opacity-80">Storage Capacity</p>
                        <p className="text-2xl font-bold">71,622 KL</p>
                      </div>
                      <div className="text-white">
                        <p className="text-sm opacity-80">Retail Outlets</p>
                        <p className="text-2xl font-bold">1,500+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Chart Slide - Responsive */}
          <div className="w-full flex-shrink-0 h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-visible gap-4">
              <div className="w-full lg:w-2/3 bg-white/95 rounded-lg p-4 sm:p-6 shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Fuel Price Trends</h2>
                <div className="h-52 sm:h-72 md:h-80 lg:h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={priceData}>
                      <defs>
                        <linearGradient id="colorPetrol" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorDiesel" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="petrol" 
                        stroke="#EF4444" 
                        fillOpacity={1}
                        fill="url(#colorPetrol)"
                        name="Petrol"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="diesel" 
                        stroke="#3B82F6" 
                        fillOpacity={1}
                        fill="url(#colorDiesel)"
                        name="Diesel"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="w-full lg:w-1/3 lg:pl-0 xl:pl-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-6">Regional Price Updates</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                  {locationPrices.map((location, index) => (
                    <div 
                      key={index} 
                      className="bg-white/90 p-3 sm:p-4 rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-1 sm:mr-2" />
                          <h4 className="font-semibold text-base sm:text-lg">{location.city}</h4>
                        </div>
                        {location.emergency && (
                          <div className="flex items-center text-amber-600">
                            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span className="text-xs">Limited Supply</span>
                          </div>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                        <div className="flex items-center">
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mr-1" />
                          <span>Petrol: Rs.{location.petrol}</span>
                        </div>
                        <div className="flex items-center">
                          <Fuel className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1" />
                          <span>Diesel: Rs.{location.diesel}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* NOC Updates Slide - Responsive */}
          <div className="w-full flex-shrink-0 h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto bg-white/95 rounded-lg p-4 sm:p-8 h-full overflow-y-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Latest Updates from NOC</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4">Supply Status</h3>
                  </div>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                    Current petroleum supply remains stable with adequate stocks for the next 30 days. 
                    Recent agreements with international suppliers ensure continuous supply through major checkpoints.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-white p-2 sm:p-3 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs sm:text-sm font-medium">Petrol Reserves</span>
                        <span className="text-xs sm:text-sm text-blue-600">45 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white p-2 sm:p-3 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs sm:text-sm font-medium">Diesel Reserves</span>
                        <span className="text-xs sm:text-sm text-blue-600">38 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full" style={{ width: '63%' }}></div>
                      </div>
                    </div>
                    <div className="bg-white p-2 sm:p-3 rounded-lg">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs sm:text-sm font-medium">LPG Stocks</span>
                        <span className="text-xs sm:text-sm text-blue-600">28 days</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div className="bg-blue-600 h-1.5 sm:h-2 rounded-full" style={{ width: '47%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4">Infrastructure</h3>
                  </div>
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                    Major expansion projects underway to enhance storage and distribution capabilities across Nepal.
                    New automated systems being implemented for efficient monitoring.
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Jhapa Storage Facility</h4>
                      <div className="flex items-center">
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                          <div className="bg-green-600 h-1.5 sm:h-2 rounded-full" style={{ width: '80%' }}></div>
                          </div>
                        </div>
                        <span className="ml-3 sm:ml-4 text-xs sm:text-sm font-medium text-green-600">80%</span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">Expected completion: Q3 2025</p>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg">
                      <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Thankot Modernization</h4>
                      <ul className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2">
                        <li>• Automated monitoring system installed</li>
                        <li>• Safety protocols upgraded</li>
                        <li>• New storage tanks under construction</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4">Important Notices</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-yellow-700 text-sm sm:text-base">Price Adjustment Notice</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Effective from: 2025-02-20</p>
                      <p className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2">New pricing mechanism implementation as per Nepal Oil Corporation board decision.</p>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-700 text-sm sm:text-base">Environmental Guidelines</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Updated: 2025-02-15</p>
                      <p className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2">New environmental compliance requirements for all NOC facilities and partners.</p>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-700 text-sm sm:text-base">Quality Control Update</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Implementation: Ongoing</p>
                      <p className="text-xs sm:text-sm text-gray-700 mt-1 sm:mt-2">Enhanced quality testing procedures at all distribution points.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery Slide - Responsive */}
          <div className="w-full flex-shrink-0 h-[500px] bg-gradient-to-r from-blue-900 to-blue-700 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto bg-white/95 rounded-lg p-4 sm:p-8 h-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6">Our Facilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 h-[350px]">
                <div className="relative group overflow-hidden rounded-lg">
                  <img src={noc} alt="NOC Facility 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-3 sm:p-4 text-white">
                      <h3 className="text-base sm:text-lg font-semibold">Thankot Depot</h3>
                      <p className="text-xs sm:text-sm opacity-90">Main storage and distribution facility</p>
                    </div>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg">
                  <img src={aviation} alt="NOC Facility 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-3 sm:p-4 text-white">
                      <h3 className="text-base sm:text-lg font-semibold">Birgunj Terminal</h3>
                      <p className="text-xs sm:text-sm opacity-90">Cross-border supply management</p>
                    </div>
                  </div>
                </div>
                <div className="relative group overflow-hidden rounded-lg sm:hidden lg:block">
                <img src={oil} alt="NOC Facility 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-3 sm:p-4 text-white">
                      <h3 className="text-base sm:text-lg font-semibold">Quality Control Lab</h3>
                      <p className="text-xs sm:text-sm opacity-90">State-of-the-art testing facility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
              currentSlide === index ? 'bg-white w-4 sm:w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EnhancedHomeSlider;