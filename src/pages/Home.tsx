
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Search, Plus, Award, Building2, HeartHandshake, Phone, Mail, Clock, MapPin, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Stats from '@/components/Stats';

const Home = () => {
  const quickActions = [
    {
      title: 'ডোনার খুঁজুন',
      description: 'আপনার প্রয়োজনীয় রক্তের গ্রুপের ডোনার খুঁজুন',
      icon: <Search className="h-6 w-6" />,
      link: '/find-donors',
      color: 'bg-gradient-to-br from-red-50 to-red-100 border-red-200',
      primary: true
    },
    {
      title: 'রক্তদাতা হোন',
      description: 'রক্তদাতা হিসেবে নিবন্ধন করুন এবং জীবন বাঁচান',
      icon: <Plus className="h-6 w-6" />,
      link: '/donate-blood',
      color: 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200',
      primary: true
    },
    {
      title: 'স্বেচ্ছাসেবক',
      description: 'স্বেচ্ছাসেবক হিসেবে যোগদান করুন',
      icon: <Users className="h-6 w-6" />,
      link: '/be-a-volunteer',
      color: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'
    },
    {
      title: 'সার্টিফিকেট',
      description: 'আপনার অবদানের স্বীকৃতি নিন',
      icon: <Award className="h-6 w-6" />,
      link: '/certificate',
      color: 'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200'
    },
    {
      title: 'হাসপাতাল',
      description: 'নিকটস্থ হাসপাতালের তথ্য',
      icon: <Building2 className="h-6 w-6" />,
      link: '/hospitals',
      color: 'bg-gradient-to-br from-green-50 to-green-100 border-green-200'
    },
    {
      title: 'আর্থিক সহায়তা',
      description: 'সংগঠনকে সহায়তা প্রদান করুন',
      icon: <HeartHandshake className="h-6 w-6" />,
      link: '/donate',
      color: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200'
    }
  ];

  const importantInfo = [
    {
      title: 'জরুরি তথ্য',
      description: 'রক্তের জরুরি প্রয়োজনে যোগাযোগ করুন',
      icon: <Phone className="h-5 w-5 text-red-600" />,
      content: '০১৭২২-৫২৮১৬ৄ'
    },
    {
      title: 'সেবার সময়',
      description: '২৪ ঘণ্টা সেবা প্রদান',
      icon: <Clock className="h-5 w-5 text-blue-600" />,
      content: '২৪/৭ উপলব্ধ'
    },
    {
      title: 'সদস্য সংখ্যা',
      description: 'আমাদের সাথে যুক্ত সদস্য',
      icon: <Users className="h-5 w-5 text-green-600" />,
      content: '৬৮,০০০+ সদস্য'
    },
    {
      title: 'সেবার এলাকা',
      description: 'বগুড়া জেলা এবং আশেপাশে',
      icon: <MapPin className="h-5 w-5 text-purple-600" />,
      content: 'সারাদেশে'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo */}
            <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/pVmRddDC/bobdo-removebg-preview.png" 
                alt="BOBDO Logo" 
                className="h-24 w-24 object-contain"
              />
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              বগুড়া অনলাইন রক্তদান সংগঠন
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              স্বেচ্ছায় করি রক্তদান, হাসবে রোগী বাঁচবে প্রাণ
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 h-12 px-8 rounded-xl shadow-lg">
                <Link to="/find-donors" className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  জরুরি রক্ত খুঁজুন
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 h-12 px-8 rounded-xl shadow-lg">
                <Link to="/donate-blood" className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  রক্তদাতা হোন
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {importantInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-sm hover:shadow-md transition-shadow border-0 bg-gray-50">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2">{info.icon}</div>
                  <h3 className="font-semibold text-sm text-gray-900 mb-1">{info.title}</h3>
                  <p className="text-xs text-gray-600 mb-2">{info.description}</p>
                  <p className="text-sm font-medium text-gray-900">{info.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Quick Actions */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              কিভাবে সাহায্য করতে পারেন
            </h2>
            <p className="text-gray-600">
              আপনার অংশগ্রহণে বাঁচতে পারে অনেক প্রাণ
            </p>
          </div>
          
          {/* Primary Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            {quickActions.filter(action => action.primary).map((action, index) => (
              <Card key={index} className={`${action.color} border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-6 text-center">
                  <div className="text-red-600 mb-4 flex justify-center">{action.icon}</div>
                  <CardTitle className="text-xl mb-3 text-gray-900">{action.title}</CardTitle>
                  <CardDescription className="text-gray-600 mb-6">{action.description}</CardDescription>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 rounded-xl">
                    <Link to={action.link}>
                      শুরু করুন
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Secondary Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {quickActions.filter(action => !action.primary).map((action, index) => (
              <Card key={index} className={`${action.color} border shadow-sm hover:shadow-md transition-all duration-300`}>
                <CardContent className="p-4 text-center">
                  <div className="text-red-600 mb-3 flex justify-center">{action.icon}</div>
                  <CardTitle className="text-sm mb-2 text-gray-900">{action.title}</CardTitle>
                  <CardDescription className="text-xs text-gray-600 mb-3">{action.description}</CardDescription>
                  <Button asChild size="sm" variant="ghost" className="w-full text-xs h-8 rounded-lg">
                    <Link to={action.link}>
                      দেখুন
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              জরুরি যোগাযোগ
            </h2>
            <p className="text-gray-600">
              যে কোনো সময় আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="tel:01722528164"
              className="block transform transition-all duration-200 hover:scale-105"
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-red-600 h-full cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">জরুরি হটলাইন</h3>  
                  <p className="text-red-600 hover:text-red-700 font-medium text-lg mb-2">
                    ০১৭২২-৫২৮১৬৪
                  </p>
                  <p className="text-sm text-gray-600">২৪ ঘণ্টা সেবা</p>
                </CardContent>
              </Card>
            </a>
            
            <a
              href="mailto:bobdo5800@gmail.com"
              className="block transform transition-all duration-200 hover:scale-105"
            >
              <Card className="shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-red-600 h-full cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">ইমেইল</h3>
                  <p className="text-red-600 hover:text-red-700 font-medium mb-2">
                    bobdo5800@gmail.com
                  </p>
                  <p className="text-sm text-gray-600">তাৎক্ষণিক উত্তর</p>
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
