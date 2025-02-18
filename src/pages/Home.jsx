import React from 'react';
import { Link } from 'react-router-dom';
import { FaGasPump, FaTruck, FaIndustry, FaNewspaper, FaFileAlt } from 'react-icons/fa';
import { newsData } from '../data/newsdata';
import EnhancedHomeSlider from '../components/EnhancedHomeSlider';

function Home() {
  // Get latest 2 news items and 5 notices
  const latestNews = newsData.latest.slice(0, 4);
  const latestNotices = newsData.notices.slice(0, 5);

  const quickLinks = [
    { icon: FaGasPump, title: "Daily Price", link: "/prices" },
    { icon: FaFileAlt, title: "Tenders", link: "#tenders" },
    { icon: FaNewspaper, title: "Press Release", link: "/news" }
  ];

  return (
    <div>
       <EnhancedHomeSlider className=""/>

      {/* Quick Links */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} to={link.link} className="flex items-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <link.icon className="w-10 h-10 text-primary" />
                <span className="ml-4 text-lg font-semibold text-gray-800">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Section */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
                <Link to="/news/latest" className="text-primary hover:text-secondary">
                  View All →
                </Link>
              </div>
              <div className="space-y-6">
                {latestNews.map((item) => (
                  <Link 
                    key={item.id} 
                    to={`/news/${item.category}/${item.id}`}
                    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{item.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <span className="text-primary hover:text-secondary font-medium">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Notices Section */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Notices</h2>
                <Link to="/news/notices" className="text-primary hover:text-secondary">
                  View All →
                </Link>
              </div>
              <div className="space-y-4">
                {latestNotices.map((notice) => (
                  <Link
                    key={notice.id}
                    to={`/news/${notice.category}/${notice.id}`}
                    className="block bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-sm text-gray-500 mb-2">{notice.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{notice.title}</h3>
                    <p className="text-gray-600 line-clamp-2">{notice.content}</p>
                    <span className="text-primary hover:text-secondary font-medium mt-2 inline-block">
                      View Details →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaGasPump className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Retail Distribution</h3>
              <p className="text-gray-600">Nationwide network of retail outlets ensuring consistent fuel supply to consumers.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaTruck className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Transportation</h3>
              <p className="text-gray-600">Efficient transportation network for timely delivery of petroleum products.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FaIndustry className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Storage Management</h3>
              <p className="text-gray-600">Modern storage facilities maintaining safety and quality standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;