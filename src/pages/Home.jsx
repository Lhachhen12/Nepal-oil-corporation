import { Link } from 'react-router-dom';
import { FaGasPump, FaTruck, FaIndustry, FaNewspaper, FaFileAlt } from 'react-icons/fa';

function Home() {
  const news = [
    {
      title: "निगमको ५५ औ वार्षिकोत्सवको अवसरमा आयोजित संस्थागत सामाजिक उत्तरदायित्व कार्यकरमका झलकहरु",
      content: "निगमको ५५ औ वार्षिकोत्सवको अवसरमा आयोजित संस्थागत सामाजिक उत्तरदायित्व कार्यकरमका झलकहरु"
    },
    {
      title: "इन्धन व्यापारमा विकल्प को खोजि",
      content: "इन्धन व्यापारमा विकल्प को खोजि"
    }
  ];

  const notices = [
    {
      title: "हार्दिक निमन्त्रणा",
      date: "9 Jan 2025",
      content: "हार्दिक निमन्त्रणा"
    },
    {
      title: "लिखित परीक्षाको परीक्षा केन्द्र प्रकाशन गरिएको सूचना (सूचना नं. २१/२०८१-८२)",
      date: "16 Dec 2024",
      content: "लिखित परीक्षाको परीक्षा केन्द्र प्रकाशन गरिएको सूचना"
    },
    {
      title: "लोक सेवा आयोगबाट लिइने निगमको आन्तरिक तथा खुला/समावेशी प्रतियोगितात्मक लिखित परीक्षा कार्यक्रम बारेको सूचना",
      date: "6 Dec 2024",
      content: "सूचना नं. २०/२०८१-८२"
    },
    {
      title: "नया साधारण बिक्रेता नियुक्ति सम्बन्धि सुचना",
      date: "22 Nov 2024",
      content: "नया साधारण बिक्रेता नियुक्ति सम्बन्धि सुचना"
    },
    {
      title: "बढुवा सिफारिस गरिएको बारे सूचना",
      date: "21 Nov 2024",
      content: "सूचना नं. १९/२०८१–८२"
    }
  ];

  const quickLinks = [
    { icon: FaGasPump, title: "Daily Price", link: "/prices" },
    { icon: FaFileAlt, title: "Tenders", link: "#tenders" },
    { icon: FaNewspaper, title: "Press Release", link: "/news" }
  ];

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative bg-primary h-[500px]">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Nepal Oil Corporation</h1>
            <p className="text-2xl mb-8">Ensuring Energy Security for Nepal</p>
            <div className="flex space-x-4">
              <Link to="/prices" className="bg-accent hover:bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                View Prices
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
              <div className="space-y-6">
                {news.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <Link to="#" className="text-primary hover:text-secondary font-medium">
                        Read more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notices Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Notices</h2>
              <div className="space-y-4">
                {notices.map((notice, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-sm text-gray-500 mb-2">{notice.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{notice.title}</h3>
                    <p className="text-gray-600">{notice.content}</p>
                    <Link to="#" className="text-primary hover:text-secondary font-medium mt-2 inline-block">
                      View Details →
                    </Link>
                  </div>
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