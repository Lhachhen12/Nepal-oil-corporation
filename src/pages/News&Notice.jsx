// src/pages/NewsNotice.jsx
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { newsData } from '../data/newsdata';

const NewsNotice = () => {
  const { category = 'latest' } = useParams();
  const navigate = useNavigate();
  const [currentData, setCurrentData] = useState([]);
  const [activeTab, setActiveTab] = useState(category);

  useEffect(() => {
    setCurrentData(newsData[category] || newsData.latest);
    setActiveTab(category);
  }, [category]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/news/${tab}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8 border-b">
        <button
          onClick={() => handleTabChange('latest')}
          className={`py-2 px-4 ${activeTab === 'latest' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`}
        >
          Latest News
        </button>
        <button
          onClick={() => handleTabChange('press')}
          className={`py-2 px-4 ${activeTab === 'press' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`}
        >
          Press Releases
        </button>
        <button
          onClick={() => handleTabChange('notices')}
          className={`py-2 px-4 ${activeTab === 'notices' ? 'border-b-2 border-primary text-primary' : 'text-gray-600'}`}
        >
          Notices
        </button>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        {currentData.map((item) => (
         <Link key={item.id} to={`/news/${item.category}/${item.id}`} className="block"> {/* Key prop and block display */}
         <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"> {/* Transition and duration */}
           <div className="p-6">
             <div className="flex justify-between items-start mb-4">
               <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">{item.title}</h3> {/* Line clamping for long titles */}
               <span className="text-sm text-gray-500 whitespace-nowrap">{item.date}</span> {/* Prevent date from wrapping */}
             </div>
             <p className="text-gray-600 mb-4 line-clamp-3">{item.content}</p> {/* Line clamping for long content */}
             <div className="text-primary hover:text-secondary font-medium inline-flex items-center group"> {/* Group for hover effect */}
               Read more
               <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Transition on icon */}
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
               </svg>
             </div>
           </div>
         </div>
       </Link>      
        ))}
      </div>
    </div>
  );
};

export default NewsNotice;