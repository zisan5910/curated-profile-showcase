
import React from 'react';
import { Heart, Shield, Clock, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DonateBlood = () => {
  const requirements = [
    { text: 'বয়স ১৮-৬৫ বছর', icon: <CheckCircle className="h-5 w-5 text-green-600" /> },
    { text: 'ওজন ৫০ কেজি বা তার বেশি', icon: <CheckCircle className="h-5 w-5 text-green-600" /> },
    { text: 'সুস্থ ও সবল', icon: <CheckCircle className="h-5 w-5 text-green-600" /> },
    { text: 'শেষ রক্তদানের ৩ মাস পর', icon: <CheckCircle className="h-5 w-5 text-green-600" /> },
  ];

  const benefits = [
    { title: 'স্বাস্থ্য উন্নতি', description: 'নিয়মিত রক্তদান স্বাস্থ্যের জন্য ভাল', icon: <Heart className="h-6 w-6 text-red-600" /> },
    { title: 'জীবন বাঁচান', description: 'একটি রক্তদানে ৩টি জীবন বাঁচানো যায়', icon: <Shield className="h-6 w-6 text-blue-600" /> },
    { title: 'সামাজিক দায়বদ্ধতা', description: 'সমাজের প্রতি আপনার অবদান', icon: <Clock className="h-6 w-6 text-green-600" /> },
  ];

  const steps = [
    { step: '১', title: 'নিবন্ধন', description: 'ফর্ম পূরণ করুন' },
    { step: '২', title: 'স্বাস্থ্য পরীক্ষা', description: 'সংক্ষিপ্ত চেকআপ' },
    { step: '৩', title: 'রক্তদান', description: '১০-১৫ মিনিট সময়' },
    { step: '৪', title: 'বিশ্রাম', description: 'হালকা খাবার ও বিশ্রাম' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">রক্তদাতা হোন</h1>
            <p className="text-gray-600">একটি রক্তদানে তিনটি জীবন বাঁচান</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <Card className="mb-8 bg-gradient-to-r from-red-600 to-pink-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <Heart className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">রক্তদানে এগিয়ে আসুন</h2>
            <p className="text-lg mb-6 opacity-90">
              আপনার একটি রক্তদান কারো জীবন বাঁচাতে পারে
            </p>
            <Button asChild className="bg-white text-red-600 hover:bg-red-50 h-12 px-8">
              <a
                href="https://www.facebook.com/groups/BOBO.BD"
                target="_blank"
                rel="noopener noreferrer"
              >
                এখনই যোগদান করুন
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Requirements */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">রক্তদানের যোগ্যতা</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  প্রয়োজনীয় শর্ত
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {req.icon}
                      <span className="text-gray-700">{req.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  সতর্কতা
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <p>• কোনো সংক্রামক রোগ না থাকা</p>
                  <p>• গর্ভবতী মহিলাদের রক্তদান করা যাবে না</p>
                  <p>• ওষুধ সেবনের ক্ষেত্রে ডাক্তারের পরামর্শ নিন</p>
                  <p>• রক্তদানের আগে পর্যাপ্ত ঘুম ও খাবার গ্রহণ করুন</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">রক্তদানের উপকারিতা</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">রক্তদানের প্রক্রিয়া</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                রক্তদাতা হিসেবে নিবন্ধন
              </h3>
              <p className="text-blue-800 mb-4">
                আমাদের রক্তদাতা তালিকায় যোগ দিন
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
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

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                তথ্য ও সহায়তা
              </h3>
              <p className="text-green-800 mb-4">
                রক্তদান সম্পর্কে আরো জানতে যোগাযোগ করুন
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:01722528164"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  ০১৭২২-৫২৮১৬৪
                </a>
                <a
                  href="mailto:bobdo5800@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
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
