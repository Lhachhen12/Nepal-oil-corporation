import React, { useState } from 'react';
import { Mail, Phone, User, MessageSquare, Send, MapPin, Globe, Clock, X, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setShowPopup(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      content: 'Babarmahal, Kathmandu, Nepal'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+977-1-4262780, 4262961'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'info@noc.org.np'
    },
    {
      icon: Globe,
      title: 'Website',
      content: 'www.nepaloil.com.np'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">We'd love to hear from you. Please fill out this form or shoot us an email.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-blue-800 to-blue-950 text-white rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90">{info.title}</h4>
                    <p className="text-white/70">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-medium text-white/90 mb-4">Business Hours</h4>
              <div className="flex items-center space-x-2 text-white/70">
                <Clock size={16} />
                <span>Sunday - Friday, 10:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <User size={18} />
                    <span>Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all`}
                    placeholder="Lhachhen Wangjyu Lama"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <Mail size={18} />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all`}
                    placeholder="shreejanlama608@gmail.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <Phone size={18} />
                    <span>Phone</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all`}
                    placeholder="+977 98XXXXXXXX"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                    <MessageSquare size={18} />
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all`}
                    placeholder="How can we help?"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <label className="flex items-center space-x-2 text-gray-700 font-medium mb-2">
                  <MessageSquare size={18} />
                  <span>Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full p-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-blue-800 transition-all`}
                  placeholder="Write your message here..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-br from-blue-800 to-blue-900 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors disabled:opacity-70"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

     {/* Google Map Wrapper */}
<div className="location-wrapper mt-12 ">
  <h2 className="text-xl text-center font-bold pb-2">Our Location</h2>
  <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-blue-800 bg-white">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7426722175446!2d85.32184607447189!3d27.694347126066493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bab540e9c3%3A0xbf4b45f5a4341982!2sTanka%20Prasad%20Ghumti%20Sadak%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1739894817550!5m2!1sen!2snp"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>


      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md relative animate-fadeIn">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-600 mb-6">Thank you for contacting us. We will get back to you soon.</p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;