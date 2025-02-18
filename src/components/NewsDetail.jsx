// src/pages/NewsDetail.jsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { newsData } from '../data/newsdata';

const NewsDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();

  // Find the news item from the data
  const newsItem = newsData[category]?.find(item => item.id === id);
  const notFoundData = newsData.notFound;

  if (!newsItem) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{notFoundData.title}</h2>
          <p className="text-gray-600 mb-6">{notFoundData.content}</p>
          
          {/* Suggestions Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Options:</h3>
            <ul className="space-y-2">
              {notFoundData.suggestions?.map((suggestion, index) => (
                <li key={index} className="text-gray-600">
                  <Link 
                    to={notFoundData.links?.[suggestion]}
                    className="text-primary hover:text-secondary"
                  >
                    {suggestion}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => navigate('/news')}
            className="text-primary hover:text-secondary font-medium inline-flex items-center"
          >
            ← Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          {/* Back button */}
          <button
            onClick={() => navigate(`/news/${category}`)}
            className="text-primary hover:text-secondary font-medium inline-flex items-center mb-6"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>

          {/* Article header */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{newsItem.title}</h1>
            <div className="flex items-center text-gray-500">
              <span className="text-sm">{newsItem.date}</span>
              <span className="mx-2">•</span>
              <span className="text-sm capitalize">{newsItem.category}</span>
            </div>
          </div>

          {/* Article content */}
          <div className="prose max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed">{newsItem.content}</p>
            
            {/* Additional content section */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Additional Information</h2>
              <p className="text-gray-600">
                For more information about this news item, please contact our press office or visit our main office during business hours.
              </p>
            </div>

            {/* Share section */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <button className="text-primary hover:text-secondary">
                  <span className="sr-only">Share on Facebook</span>
                  Facebook
                </button>
                <button className="text-primary hover:text-secondary">
                  <span className="sr-only">Share on Twitter</span>
                  Twitter
                </button>
                <button className="text-primary hover:text-secondary">
                  <span className="sr-only">Share via Email</span>
                  Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;