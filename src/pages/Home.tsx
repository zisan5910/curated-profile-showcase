
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Search, Plus, Award, Building2, HeartHandshake, Phone, Mail, Clock, MapPin, Shield, Star, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import Stats from '@/components/Stats';

const Home = () => {
  const quickActions = [
    {
      title: 'ডোনার খুঁজুন',
      icon: <Search className="h-6 w-6" />,
      link: '/find-donors',
      color: 'text-red-600'
    },
    {
      title: 'রক্তদাতা হোন',
      icon: <Plus className="h-6 w-6" />,
      link: '/donate-blood',
      color: 'text-pink-600'
    },
    {
      title: 'স্বেচ্ছাসেবক হোন',
      icon: <Users className="h-6 w-6" />,
      link: '/be-a-volunteer',
      color: 'text-blue-600'
    },
    {
      title: 'সার্টিফিকেট',
      icon: <Award className="h-6 w-6" />,
      link: '/certificate',
      color: 'text-yellow-600'
    },
    {
      title: 'হাসপাতাল',
      icon: <Building2 className="h-6 w-6" />,
      link: '/hospitals',
      color: 'text-green-600'
    },
    {
      title: 'আর্থিক সহায়তা',
      icon: <HeartHandshake className="h-6 w-6" />,
      link: '/donate',
      color: 'text-purple-600'
    }
  ];

  const importantInfo = [
    {
      title: 'জরুরি হটলাইন',
      value: '০১৭২২-৫২৮১৬৪',
      icon: <Phone className="h-5 w-5" />,
      color: 'text-red-600'
    },
    {
      title: 'সেবার সময়',
      value: '২৪/৭',
      icon: <Clock className="h-5 w-5" />,
      color: 'text-blue-600'
    },
    {
      title: 'সদস্য সংখ্যা',
      value: '৬৮,০০০+',
      icon: <Users className="h-5 w-5" />,
      color: 'text-green-600'
    },
    {
      title: 'সেবার এলাকা',
      value: 'সারাদেশে',
      icon: <MapPin className="h-5 w-5" />,
      color: 'text-purple-600'
    }
  ];

  const socialLinks = [
    {
      name: 'পেজ',
      url: 'https://www.facebook.com/bobdo.official',
      icon: <Facebook className="h-4 w-4" />,
    },
    {
      name: 'গ্রুপ',
      url: 'https://www.facebook.com/groups/BOBO.BD',
      icon: <Users className="h-4 w-4" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile App Style */}
      <section className="bg-white pt-4 pb-6">
        <div className="container mx-auto px-4 max-w-md">
          {/* App Logo */}
          <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto mb-3">
              <img 
                src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                alt="BOBDO Logo" 
                className="h-full w-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-1">
              বগুড়া অনলাইন রক্তদান সংগঠন
            </h1>
            <p className="text-sm text-gray-600">
              স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
            </p>
          </div>

          {/* Primary Actions - 2x1 Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <Button asChild className="bg-red-600 hover:bg-red-700 h-12 rounded-xl">
              <Link to="/find-donors" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                <span className="text-xs">জরুরি রক্ত খুঁজুন</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 h-12 rounded-xl">
              <Link to="/donate-blood" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className="text-xs">রক্তদাতা হোন</span>
              </Link>
            </Button>
          </div>

          {/* Social Links - Horizontal */}
          <div className="flex gap-2 justify-center">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-xs transition-colors"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards - 2x2 Grid */}
      <section className="py-4 bg-white border-t">
        <div className="container mx-auto px-4 max-w-md">
          <div className="grid grid-cols-2 gap-3">
            {importantInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-sm bg-gray-50">
                <CardContent className="p-3 text-center">
                  <div className={`${info.color} mb-2 flex justify-center`}>{info.icon}</div>
                  <p className="text-xs font-medium text-gray-900 mb-1">{info.value}</p>
                  <p className="text-xs text-gray-600">{info.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Quick Actions - 3x2 Grid */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-lg font-bold text-center text-gray-900 mb-4">
            সেবাসমূহ
          </h2>
          
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link} className="block">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <CardContent className="p-4 text-center">
                    <div className={`${action.color} mb-2 flex justify-center`}>{action.icon}</div>
                    <p className="text-xs font-medium text-gray-900">{action.title}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact - Single Card */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4 max-w-md">
          <h2 className="text-lg font-bold text-center text-gray-900 mb-4">
            জরুরি যোগাযোগ
          </h2>
          
          <div className="space-y-3">
            <a href="tel:01722528164" className="block">
              <Card className="shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-red-600 cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">জরুরি হটলাইন</p>
                    <p className="text-red-600 font-medium">০১৭২২-৫২৮১৬৪</p>
                    <p className="text-sm text-gray-600">২৪ ঘণ্টা সেবা</p>
                  </div>
                </CardContent>
              </Card>
            </a>
            
            <a href="mailto:bobdo5800@gmail.com" className="block">
              <Card className="shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-red-600 cursor-pointer">
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">ইমেইল</p>
                    <p className="text-red-600 font-medium">bobdo5800@gmail.com</p>
                    <p className="text-sm text-gray-600">তাৎক্ষণিক উত্তর</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
