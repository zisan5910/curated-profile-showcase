
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Heart,
  Users,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  HandHeart,
  Star,
  Clock,
  Award
} from 'lucide-react';

const BeAVolunteer = () => {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: 'জীবন বাঁচান',
      description: 'আপনার স্বেচ্ছাসেবা অসংখ্য মানুষের জীবন বাঁচাতে সাহায্য করবে।'
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: 'সমাজসেবা',
      description: 'সমাজের কল্যাণে আপনার অবদান রাখুন।'
    },
    {
      icon: <Star className="h-6 w-6 text-yellow-600" />,
      title: 'দক্ষতা বৃদ্ধি',
      description: 'স্বেচ্ছাসেবার মাধ্যমে নতুন দক্ষতা অর্জন করুন।'
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: 'স্বীকৃতি',
      description: 'আপনার অবদানের জন্য সার্টিফিকেট ও সম্মাননা পাবেন।'
    }
  ];

  const roles = [
    { title: 'রক্তদান সমন্বয়ক', description: 'রক্তদাতা ও রোগীদের মধ্যে সমন্বয় সাধন' },
    { title: 'ইভেন্ট অর্গানাইজার', description: 'রক্তদান শিবির ও কর্মসূচি আয়োজন' },
    { title: 'সচেতনতা প্রচারক', description: 'রক্তদান সম্পর্কে সচেতনতা বৃদ্ধি' },
    { title: 'ডিজিটাল সাপোর্ট', description: 'অনলাইন প্ল্যাটফর্ম ব্যবস্থাপনা' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">স্বেচ্ছাসেবক হোন</h1>
            <p className="text-gray-600">আমাদের মিশনে যোগ দিন এবং জীবন বাঁচাতে সাহায্য করুন</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <HandHeart className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">স্বেচ্ছাসেবক হিসেবে যোগদান করুন</h2>
            <p className="text-lg mb-6 opacity-90">
              আপনার সময় ও দক্ষতা দিয়ে সমাজের সেবা করুন
            </p>
            <Button asChild className="bg-white text-blue-600 hover:bg-blue-50 h-12 px-8">
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

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">কেন স্বেচ্ছাসেবক হবেন?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer Roles */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">স্বেচ্ছাসেবকের ভূমিকা</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h3>
                      <p className="text-gray-600">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <Card className="mb-8 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              স্বেচ্ছাসেবকের প্রয়োজনীয় যোগ্যতা
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">মৌলিক যোগ্যতা:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• বয়স ১৮ বছর বা তার বেশি</li>
                  <li>• সমাজসেবায় আগ্রহী</li>
                  <li>• নিয়মিত সময় দিতে পারেন</li>
                  <li>• দলীয় কাজে অভিজ্ঞ</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">অতিরিক্ত দক্ষতা:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• যোগাযোগ দক্ষতা</li>
                  <li>• কম্পিউটার ব্যবহারে দক্ষতা</li>
                  <li>• সামাজিক মাধ্যম ব্যবহার</li>
                  <li>• ইভেন্ট ম্যানেজমেন্ট</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Training & Support */}
        <Card className="mb-8 bg-green-50 border-green-200">
          <CardContent className="p-6">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                প্রশিক্ষণ ও সহায়তা
              </h3>
              <p className="text-green-800 mb-4">
                আমরা আমাদের স্বেচ্ছাসেবকদের প্রয়োজনীয় প্রশিক্ষণ ও সহায়তা প্রদান করি
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded-lg">
                  <strong>অরিয়েন্টেশন প্রোগ্রাম</strong>
                  <p className="text-gray-600">প্রাথমিক প্রশিক্ষণ</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <strong>নিয়মিত ওয়ার্কশপ</strong>
                  <p className="text-gray-600">দক্ষতা উন্নয়ন</p>
                </div>
                <div className="bg-white p-3 rounded-lg">
                  <strong>মেন্টরশিপ</strong>
                  <p className="text-gray-600">অভিজ্ঞ সদস্যদের গাইডেন্স</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-center">যোগাযোগের তথ্য</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">ফোন</h3>
                <a
                  href="tel:01722528164"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  ০১৭২২-৫২৮১৬৪
                </a>
              </div>
              <div>
                <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">ইমেইল</h3>
                <a
                  href="mailto:bobdo5800@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  bobdo5800@gmail.com
                </a>
              </div>
              <div>
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900 mb-1">ঠিকানা</h3>
                <p className="text-gray-600">
                  সাতমাথা, বগুড়া
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BeAVolunteer;
