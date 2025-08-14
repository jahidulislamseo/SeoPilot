
import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // Show popup after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/8801516089599?text=Hi! I am interested in your SEO services. Can we discuss my project?',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Floating Button */}
      <div className="relative">
        {!isMinimized && (
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 mb-4 max-w-sm animate-bounce">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">Fatema Akter</h4>
                  <p className="text-xs text-gray-500">SEO Expert</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-700 mb-3">
              Hi! 👋 Need help with SEO? Let's chat about growing your business!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
            >
              <MessageCircle className="mr-2" size={16} />
              Start WhatsApp Chat
            </button>
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <button
          onClick={isMinimized ? handleWhatsAppClick : toggleMinimize}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 pulse-animation"
        >
          <MessageCircle size={24} />
        </button>

        {/* Online indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
