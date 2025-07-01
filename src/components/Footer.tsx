
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Youtube,
  Users,
  Mail,
  Phone,
  MapPin,
  Globe,
  Heart
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { to: '/', text: 'হোম' },
    { to: '/find-donors', text: 'ডোনার খুঁজুন' },
    { to: '/donate-blood', text: 'রক্তদাতা হোন' },
    { to: '/be-a-volunteer', text: 'স্বেচ্ছাসেবক হোন' },
    { to: '/certificate', text: 'সার্টিফিকেট' },
    { to: '/about-us', text: 'আমাদের সম্পর্কে' },
  ];

  const socialLinks = [
    {
      name: 'ফেসবুক পেজ',
      url: 'https://www.facebook.com/bobdo.official',
      icon: <Facebook className="h-5 w-5" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'ফেসবুক গ্রুপ',
      url: 'https://www.facebook.com/groups/BOBO.BD',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'ইউটিউব',
      url: 'https://youtube.com/@BograOnlineBloodDonationOrgani',
      icon: <Youtube className="h-5 w-5" />,
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* App Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                <img 
                  src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                  alt="BOBDO Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">BOBDO</h3>
                <p className="text-gray-400 text-sm">রক্তদান সংগঠন</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              বগুড়া অনলাইন রক্তদান সংগঠন - ২০১৬ সাল থেকে নিরবচ্ছিন্ন সেবা প্রদান করে আসছি। আমাদের ৬৮,০০০+ সদস্য রয়েছে।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-red-500" />
              দ্রুত লিংক
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-red-500" />
              যোগাযোগ
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href="tel:01722528164" className="text-gray-400 hover:text-white transition-colors">
                  ০১৭২২-৫২৮১৬৪
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:bobdo5800@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  bobdo5800@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">সাতমাথা, বগুড়া</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              সামাজিক মাধ্যম
            </h4>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ${link.color} px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105`}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                &copy; ২০১৬-২০২৫ BOBDO. সকল অধিকার সংরক্ষিত।
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/developer-info" className="text-gray-400 hover:text-white transition-colors">
                ডেভেলপার তথ্য
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">
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
