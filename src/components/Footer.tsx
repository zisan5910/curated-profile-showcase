
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Facebook,
  Youtube,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  Globe
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { to: '/', text: 'হোম' },
    { to: '/find-donors', text: 'ডোনার খুঁজুন' },
    { to: '/donate-blood', text: 'রক্ত দিন' },
    { to: '/be-a-volunteer', text: 'স্বেচ্ছাসেবক' },
    { to: '/certificate', text: 'সার্টিফিকেট' },
    { to: '/about-us', text: 'আমাদের সম্পর্কে' },
  ];

  const socialLinks = [
    {
      name: 'ফেসবুক পেজ',
      url: 'https://www.facebook.com/bobdo.official',
      icon: <Facebook className="h-4 w-4" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'ফেসবুক গ্রুপ',
      url: 'https://www.facebook.com/groups/BOBO.BD',
      icon: <Users className="h-4 w-4" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'ইউটিউব',
      url: 'https://youtube.com/@BograOnlineBloodDonationOrgani',
      icon: <Youtube className="h-4 w-4" />,
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">BOBDO</span>
          </div>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            বগুড়া অনলাইন রক্তদান সংগঠন - ২০১৬ সাল থেকে নিরবচ্ছিন্ন সেবা প্রদান করে আসছি
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8 bg-gray-800 rounded-lg p-4">
          <div className="text-center">
            <div className="text-lg font-bold text-red-500 mb-1">68K+</div>
            <div className="text-xs text-gray-400">সদস্য</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-red-500 mb-1">1000+</div>
            <div className="text-xs text-gray-400">রক্তদান</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-red-500 mb-1">500+</div>
            <div className="text-xs text-gray-400">প্রাণ রক্ষা</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-red-500 mb-1">8+</div>
            <div className="text-xs text-gray-400">বছর সেবা</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Globe className="h-4 w-4 text-red-500" />
              দ্রুত লিংক
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-white text-xs hover:bg-gray-800 px-2 py-1 rounded transition-all"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Phone className="h-4 w-4 text-red-500" />
              যোগাযোগ
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 text-gray-400" />
                <a href="tel:01722528164" className="text-gray-400 hover:text-white text-xs">
                  ০১৭২২-৫২৮১৬৪
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 text-gray-400" />
                <a href="mailto:bobdo5800@gmail.com" className="text-gray-400 hover:text-white text-xs">
                  bobdo5800@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3 text-gray-400" />
                <span className="text-gray-400 text-xs">সাতমাথা, বগুড়া</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3 text-gray-400" />
                <span className="text-gray-400 text-xs">২ৄ ঘণ্টা সেবা</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Users className="h-4 w-4 text-red-500" />
              সামাজিক মাধ্যম
            </h3>
            <div className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${link.color} px-3 py-2 rounded text-xs transition-colors`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs">
                &copy; ২০১৬-২০২৫ BOBDO. সকল অধিকার সংরক্ষিত।
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link to="/developer-info" className="text-gray-400 hover:text-white">
                ডেভেলপার তথ্য
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/contacts" className="text-gray-400 hover:text-white">
                যোগাযোগ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
