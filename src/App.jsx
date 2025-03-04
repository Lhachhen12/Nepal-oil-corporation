import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PriceList from './pages/PriceList';
import About from './pages/About';
import NewsNotice from './pages/News&Notice';
import Product from './pages/Product';
import ProductDetail from './components/ProductDetail';
import NavPromo from './components/NavPromo';
import NewsDetail from './components/NewsDetail';
import PhotoGallery from './components/PhotoGallery';
import ContactForm from './pages/Contactus';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router future={{ 
      v7_startTransition: true,
      v7_relativeSplatPath: true 
    }}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <NavPromo />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prices" element={<PriceList />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:productType" element={<ProductDetail />} />
            <Route path="/news" element={<NewsNotice />} />
            <Route path="/news/:category" element={<NewsNotice />} />
            <Route path="/news/:category/:id" element={<NewsDetail />} />
            <Route path="/photogalary" element={<PhotoGallery />} />
            <Route path='/contactus' element={<ContactForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;