// src/data/newsData.js
export const newsData = {
  latest: [
    {
      id: "N001",
      title: "निगमको ५५ औ वार्षिकोत्सवको अवसरमा आयोजित संस्थागत सामाजिक उत्तरदायित्व कार्यकरमका झलकहरु",
      content: "निगमको ५५ औ वार्षिकोत्सवमा आयोजित कार्यक्रमहरूमध्ये केही झलकहरु।",
      date: "15 Feb 2024",
      category: "latest",
      status: "active"
    },
    {
      id: "N002",
      title: "इन्धन व्यापारमा विकल्प को खोजि",
      content: "इन्धन व्यापारमा नविनतम प्रविधि तथा विकल्पहरूको खोजी भइरहेको छ।",
      date: "14 Feb 2024",
      category: "latest",
      status: "active"
    },
    {
      id: "N003",
      title: "नेपालमा पर्यटन क्षेत्रको विकास",
      content: "नेपालमा पर्यटन क्षेत्रको विकासका लागि नयाँ योजनाहरू ल्याइएका छन्।",
      date: "13 Feb 2024",
      category: "latest",
      status: "active"
    },
    {
      id: "N004",
      title: "कृषि क्षेत्रमा आधुनिकीकरणको आवश्यकता",
      content: "कृषि क्षेत्रमा आधुनिकीकरणको आवश्यकता छ, जसले उत्पादन बढाउन मद्दत गर्नेछ।",
      date: "12 Feb 2024",
      category: "latest",
      status: "active"
    },
    {
      id: "N005",
      title: "शिक्षा क्षेत्रमा नयाँ पहल",
      content: "शिक्षा क्षेत्रमा नयाँ पहलहरू सुरु गरिएका छन्, जसले विद्यार्थीहरूको लागि अवसरहरू सिर्जना गर्नेछ।",
      date: "11 Feb 2024",
      category: "latest",
      status: "active"
    }
  ],
  press: [
    {
      id: "P001",
      title: "नयाँ प्रविधिमा आधारित ईन्धनको प्रयोग",
      content: "नवीनतम प्रविधिहरूको माध्यमबाट वातावरणमैत्री इन्धनको खोजी भइरहेको छ।",
      date: "13 Feb 2024",
      category: "press",
      status: "active"
    },
    {
      id: "P002",
      title: "बढ्दो मूल्य वृद्धिले इन्धन बजारमा प्रभाव",
      content: "हालसालैको मूल्य वृद्धिले इन्धन आपूर्ति र खपतमा असर पुर्याएको छ।",
      date: "12 Feb 2024",
      category: "press",
      status: "active"
    },
    {
      id: "P003",
      title: "सरकारले ल्याएको नयाँ आर्थिक नीति",
      content: "सरकारले नयाँ आर्थिक नीति ल्याएको छ, जसले आर्थिक विकासमा मद्दत गर्नेछ।",
      date: "10 Feb 2024",
      category: "press",
      status: "active"
    },
    {
      id: "P004",
      title: "स्वास्थ्य क्षेत्रमा सुधार",
      content: "स्वास्थ्य क्षेत्रमा सुधारका लागि नयाँ योजनाहरू ल्याइएका छन्।",
      date: "9 Feb 2024",
      category: "press",
      status: "active"
    },
    {
      id: "P005",
      title: "रोजगारीका अवसरहरूमा वृद्धि",
      content: "रोजगारीका अवसरहरूमा वृद्धि भएको छ, जसले युवाहरूलाई फाइदा पुर्याउनेछ।",
      date: "8 Feb 2024",
      category: "press",
      status: "active"
    }
  ],
  notices: [
    {
      id: "NT001",
      title: "हार्दिक निमन्त्रणा",
      content: "विशेष समारोहको निमन्त्रणा।",
      date: "9 Jan 2024",
      category: "notice",
      status: "active"
    },
    {
      id: "NT002",
      title: "लिखित परीक्षाको परीक्षा केन्द्र प्रकाशन गरिएको सूचना",
      content: "लिखित परीक्षाका लागि परीक्षा केन्द्र सार्वजनिक।",
      date: "16 Dec 2023",
      category: "notice",
      status: "active"
    },
    {
      id: "NT003",
      title: "नयाँ भर्नाको लागि सूचना",
      content: "नयाँ विद्यार्थी भर्नाको लागि सूचना जारी गरिएको छ।",
      date: "5 Jan 2024",
      category: "notice",
      status: "active"
    },
    {
      id: "NT004",
      title: "छात्रवृत्तिको लागि आवेदन",
      content: "छात्रवृत्तिको लागि आवेदन माग गरिएको छ।",
      date: "2 Jan 2024",
      category: "notice",
      status: "active"
    },
    {
      id: "NT005",
      title: "कार्यक्रममा सहभागी हुन आह्वान",
      content: "विशेष कार्यक्रममा सहभागी हुनको लागि आह्वान गरिएको छ।",
      date: "25 Dec 2023",
      category: "notice",
      status: "active"
    }
  ],
  notFound: {
    id: "NF001",
    title: "Page Not Found",
    content: "The page you are looking for does not exist.",
    date: "17 Feb 2024",
    category: "not-found",
    status: "active",
    suggestions: [
      "Latest News",
      "Press Releases",
      "Notices"
    ],
    links: {
      "Latest News": "/news/latest",
      "Press Releases": "/news/press",
      "Notices": "/news/notices"
    }
  }
};