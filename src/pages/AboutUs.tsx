
import React from 'react';
import { Users, Target, Award, Droplet, Heart, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Stats from '@/components/Stats';

const AboutUs = () => {
  const values = [
    {
      title: 'আমাদের মিশন',
      description: 'স্বেচ্ছায় রক্তদানের মাধ্যমে আমাদের সম্প্রদায়ের জন্য নিরাপদ, পর্যাপ্ত রক্ত সরবরাহ নিশ্চিত করা এবং রক্তদানের গুরুত্ব সম্পর্কে সচেতনতা বৃদ্ধি করা।',
      icon: <Target className="h-8 w-8 text-blood-600" />
    },
    {
      title: 'আমাদের ভিশন',
      description: 'এমন একটি বিশ্ব যেখানে প্রত্যেকের প্রয়োজন অনুযায়ী নিরাপদ রক্তে প্রবেশাধিকার রয়েছে এবং যেখানে নিয়মিত রক্তদান একটি স্বাস্থ্যকর জীবনধারার স্বাভাবিক অংশ হিসেবে গৃহীত হয়।',
      icon: <Award className="h-8 w-8 text-blood-600" />
    },
    {
      title: 'আমাদের মূল্যবোধ',
      description: 'সহানুভূতি, সততা, উৎকর্ষ, শিক্ষা এবং সম্প্রদায় সেবা রক্তদানের মাধ্যমে জীবন বাঁচানোর আমাদের সকল প্রচেষ্টাকে পরিচালিত করে।',
      icon: <Users className="h-8 w-8 text-blood-600" />
    }
  ];

  const leadership = [
    { name: 'মোঃ সোহেল মিয়া', position: 'প্রতিষ্ঠাতা ও পরিচালক' },
    { name: 'শৈবাল খলিফ ছোটন', position: 'প্রধান সমন্বয়ক' },
    { name: 'রাহিদ হাসান', position: 'প্রশাসন ও এইচআর প্রধান' },
    { name: 'মোঃ আব্দুল আজিজ', position: 'হিসাবরক্ষক' },
  ];

  const coordinators = [
    'জয়া', 'শশী', 'সুলতান', 'মাহি', 'নাঈম', 'সাব্বির'
  ];

  const teams = [
    'মতিউর-জয়া', 'লাল সবুজ-সাব্বির', 'অকুতোভয়-মাহি'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Droplet className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">আমাদের সম্পর্কে</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) এর মিশন, ভিশন এবং সম্প্রদায়ের উপর আমাদের প্রভাব সম্পর্কে জানুন।
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Our Story */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-blood-600" />
            </div>
            <CardTitle className="text-xl">আমাদের গল্প</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              বগুড়া অনলাইন রক্তদান সংগঠন (BOBDO) ২০১৬ সালে একটি সহজ মিশন নিয়ে প্রতিষ্ঠিত হয়েছিল। আজ আমরা ৬৮ হাজার মানুষের পরিবার।
            </p>
            <p className="text-gray-700 leading-relaxed">
              আমাদের প্রতিষ্ঠাতা, মোঃ সোহেল মিয়া, নিবেদিত স্বেচ্ছাসেবকদের একত্রিত করে বিওবিডিও প্রতিষ্ঠা করেন।
            </p>
            <p className="text-gray-700 leading-relaxed">
              আজ, বিওবিডিও একাধিক রক্তদান কেন্দ্র পরিচালনা করে, নিয়মিত মোবাইল ব্লাড ড্রাইভ পরিচালনা করে, ইচ্ছুক দাতাদের ডাটাবেস বজায় রাখে এবং রক্তদান সম্পর্কে শিক্ষামূলক সম্পদ প্রদান করে।
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="shadow-md border-0 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <Stats />

        {/* Leadership */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">নেতৃত্ব</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-blood-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blood-600 text-sm mt-1">{member.position}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Coordinators */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">সমন্বয়কারী</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coordinators.map((name, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="w-10 h-10 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Users className="h-5 w-5 text-blood-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Teams */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">আমাদের টিম</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {teams.map((team, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-blood-600" />
                  </div>
                  <span className="font-semibold text-gray-900">{team}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
