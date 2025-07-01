
import React from 'react';
import { Search, MapPin, Phone, Clock, Users, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FindDonors = () => {
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  const areas = [
    'সাতমাথা', 'শিবগঞ্জ', 'দুপচাঁচিয়া', 'গাবতলী', 
    'কাহালু', 'নন্দীগ্রাম', 'শাহজাহানপুর', 'সোনাতলা', 
    'ধুনট', 'আদমদীঘি', 'শেরপুর', 'সারিয়াকান্দি'
  ];

  const recentDonors = [
    { name: 'মোঃ রহিম উদ্দিন', bloodGroup: 'B+', area: 'সাতমাথা', lastDonation: '৩ মাস আগে' },
    { name: 'সাকিব হাসান', bloodGroup: 'A+', area: 'শিবগঞ্জ', lastDonation: '২ মাস আগে' },
    { name: 'তানিয়া আক্তার', bloodGroup: 'O+', area: 'দুপচাঁচিয়া', lastDonation: '৪ মাস আগে' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">ডোনার খুঁজুন</h1>
            <p className="text-gray-600">প্রয়োজনীয় রক্তের গ্রুপ ও এলাকা নির্বাচন করুন</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search Form */}
        <Card className="mb-8 shadow-lg border-0">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Search className="h-5 w-5 text-red-600" />
              ডোনার খুঁজুন
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  রক্তের গ্রুপ
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                  <option value="">রক্তের গ্রুপ নির্বাচন করুন</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  এলাকা
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                  <option value="">এলাকা নির্বাচন করুন</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  জরুরি প্রয়োজন
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                  <option value="">সময়সীমা</option>
                  <option value="immediate">এখনই</option>
                  <option value="today">আজকের মধ্যে</option>
                  <option value="week">এই সপ্তাহে</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex-1 h-12 bg-red-600 hover:bg-red-700 text-white">
                <Search className="h-5 w-5 mr-2" />
                ডোনার খুঁজুন
              </Button>
              <Button variant="outline" className="h-12 border-gray-300">
                <Filter className="h-5 w-5 mr-2" />
                ফিল্টার
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Method */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                ফেসবুক গ্রুপে পোস্ট করুন
              </h3>
              <p className="text-blue-800 mb-4">
                দ্রুত ডোনার খুঁজে পেতে আমাদের ফেসবুক গ্রুপে পোস্ট করুন
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <a
                  href="https://www.facebook.com/groups/BOBO.BD"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  গ্রুপে পোস্ট করুন
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Donors */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">সাম্প্রতিক ডোনার</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentDonors.map((donor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">{donor.bloodGroup}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{donor.name}</h3>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <MapPin className="h-3 w-3" />
                          {donor.area}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Clock className="h-4 w-4" />
                    শেষ রক্তদান: {donor.lastDonation}
                  </div>
                  
                  <Button className="w-full h-10 bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    যোগাযোগ করুন
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-red-600 text-white border-0">
          <CardContent className="p-6 text-center">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">জরুরি যোগাযোগ</h3>
            <p className="mb-4 opacity-90">
              ডোনার খুঁজে পেতে সমস্যা হলে সরাসরি যোগাযোগ করুন
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:01722528164"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-50 transition-colors"
              >
                ০১৭২২-৫২৮১৬৪
              </a>
              <a
                href="mailto:bobdo5800@gmail.com"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
              >
                bobdo5800@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FindDonors;
