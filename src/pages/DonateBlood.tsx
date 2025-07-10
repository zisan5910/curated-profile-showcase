
import React from 'react';
import { Heart, Shield, Clock, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DonateBlood = () => {
  const requirements = [
    { text: 'বয়স ১৮-৬৫ বছর', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { text: 'ওজন ৫০ কেজি বা তার বেশি', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { text: 'সুস্থ ও সবল', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
    { text: 'শেষ রক্তদানের ৩ মাস পর', icon: <CheckCircle className="h-4 w-4 text-green-600" /> },
  ];

  const restrictions = [
    'কোনো সংক্রামক রোগ না থাকা',
    'গর্ভবতী মহিলাদের রক্তদান করা যাবে না',
    'ওষুধ সেবনের ক্ষেত্রে ডাক্তারের পরামর্শ নিন',
    'রক্তদানের আগে পর্যাপ্ত ঘুম ও খাবার গ্রহণ করুন',
  ];

  const benefits = [
    { title: 'স্বাস্থ্য উন্নতি', description: 'নিয়মিত রক্তদান স্বাস্থ্যের জন্য ভাল', icon: <Heart className="h-5 w-5 text-red-600" /> },
    { title: 'জীবন বাঁচান', description: 'একটি রক্তদানে ৩টি জীবন বাঁচানো যায়', icon: <Shield className="h-5 w-5 text-blue-600" /> },
    { title: 'সামাজিক দায়বদ্ধতা', description: 'সমাজের প্রতি আপনার অবদান', icon: <Clock className="h-5 w-5 text-green-600" /> },
  ];

  const steps = [
    { step: '১', title: 'নিবন্ধন', description: 'ফর্ম পূরণ করুন' },
    { step: '২', title: 'স্বাস্থ্য পরীক্ষা', description: 'সংক্ষিপ্ত চেকআপ' },
    { step: '৩', title: 'রক্তদান', description: '১০-১৫ মিনিট সময়' },
    { step: '৪', title: 'বিশ্রাম', description: 'হালকা খাবার ও বিশ্রাম' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <section className="bg-white pt-4 pb-6">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">রক্তদাতা হোন</h1>
            <p className="text-sm text-gray-600">একটি রক্তদানে তিনটি জীবন বাঁচান</p>
          </div>

          {/* Primary Action */}
          <Button asChild className="w-full bg-red-600 hover:bg-red-700 h-12 rounded-xl mb-4">
            <a
              href="https://www.facebook.com/groups/BOBO.BD"
              target="_blank"
              rel="noopener noreferrer"
            >
              এখনই যোগদান করুন
            </a>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-md space-y-6">
        {/* Requirements & Restrictions - 1x2 Grid */}
        <div className="space-y-4">
          <Card className="shadow-sm border-0 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                প্রয়োজনীয় শর্ত
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                    {req.icon}
                    <span className="text-gray-700 text-sm">{req.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-0 bg-white">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                সতর্কতা
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {restrictions.map((restriction, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 bg-gray-50 rounded-lg">
                    <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{restriction}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits - 1x3 Grid */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-gray-900 px-2">রক্তদানের উপকারিতা</h2>
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-sm border-0 bg-white">
              <CardContent className="p-4 flex items-start gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps - 2x2 Grid */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-gray-900 px-2">রক্তদানের প্রক্রিয়া</h2>
          <div className="grid grid-cols-2 gap-3">
            {steps.map((step, index) => (
              <Card key={index} className="shadow-sm border-0 bg-white">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">{step.title}</h3>
                  <p className="text-gray-600 text-xs">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Cards - 1x2 Grid */}
        <div className="space-y-3 pb-6">
          <Card className="shadow-sm border-0 bg-blue-50">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold text-blue-900 mb-2">রক্তদাতা হিসেবে নিবন্ধন</h3>
              <p className="text-blue-800 text-sm mb-3">আমাদের রক্তদাতা তালিকায় যোগ দিন</p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 h-10 rounded-xl">
                <a
                  href="https://www.facebook.com/groups/BOBO.BD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  নিবন্ধন করুন
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-0 bg-green-50">
            <CardContent className="p-4 text-center">
              <h3 className="font-semibold text-green-900 mb-2">তথ্য ও সহায়তা</h3>
              <p className="text-green-800 text-sm mb-3">রক্তদান সম্পর্কে আরো জানতে যোগাযোগ করুন</p>
              <div className="space-y-2">
                <a
                  href="tel:01722528164"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-xl hover:bg-green-700 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  ০১৭২২-৫২৮১৬৪
                </a>
                <a
                  href="mailto:bobdo5800@gmail.com"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-xl hover:bg-green-700 transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  bobdo5800@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
