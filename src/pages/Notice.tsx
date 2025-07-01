
import React from 'react';
import { Bell, Calendar, AlertTriangle, Info, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Notice = () => {
  const notices = [
    {
      id: 1,
      title: 'রক্তের সংকট',
      category: 'urgent',
      date: '২৫ ডিসেম্বর, ২০২৪',
      content: 'বর্তমানে আমরা রক্তের গুরুতর সংকটে আছি। রক্তদাতাদের অবিলম্বে প্রয়োজন। আপনি যদি রক্তদানের জন্য উপযুক্ত হন তবে দয়া করে আমাদের যে কোন দান কেন্দ্রে যত দ্রুত সম্ভব আসুন।',
    },
    {
      id: 2,
      title: 'আরো স্বেচ্ছাসেবক প্রয়োজন',
      category: 'announcement',
      date: '২০ ডিসেম্বর, ২০২৪',
      content: 'আমাদের এই মিশনে কাজ করতে আরও বেশি স্বেচ্ছাসেবক এর প্রয়োজন। যারা আগ্রহী আছেন তারা দয়া করে আমাদের সাথে যোগাযোগ করুন ধন্যবাদ।',
    },
    {
      id: 3,
      title: 'মাসিক মিটিংয়ে উপস্থিত হওয়ার জন্য অনুরোধ',
      category: 'important',
      date: '১৮ ডিসেম্বর, ২০২৪',
      content: 'স্বেচ্ছাসেবকগণ আপনাদের জন্য প্রতি মাসে যে মাসিক মিটিং এর ব্যবস্থা করা হয় তাতে দয়া করে উপস্থিত থাকবেন এবং মাসিক ভাতা প্রদান করবেন',
    },
    {
      id: 4,
      title: 'আমাদের দাতাদের ধন্যবাদ',
      date: '১৫ ডিসেম্বর, ২০২৪',
      category: 'announcement',
      content: 'আমরা আমাদের বসন্তকালীন রক্তদান শিবিরে অংশগ্রহণকারী সকল দাতাদের আন্তরিক ধন্যবাদ জানাতে চাই। আপনার উদারতার জন্য আমরা ৫০০ ইউনিটেরও বেশি রক্ত সংগ্রহ করতে পেরেছি যা প্রায় ১,৫০০ জীবন বাঁচাতে সাহায্য করবে!',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'urgent':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'important':
        return <Info className="h-5 w-5 text-amber-500" />;
      case 'event':
        return <Calendar className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-green-500" />;
    }
  };

  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'urgent':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'important':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'event':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      default:
        return 'bg-green-50 text-green-700 border-green-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'urgent':
        return 'জরুরি';
      case 'important':
        return 'গুরুত্বপূর্ণ';
      case 'event':
        return 'ইভেন্ট';
      default:
        return 'ঘোষণা';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bell className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">নোটিশ ও ঘোষণা</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              গুরুত্বপূর্ণ রক্তদান সংবাদ, ইভেন্ট এবং জরুরি আবেদন সম্পর্কে আপডেট থাকুন।
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Notices */}
        {notices.map((notice) => (
          <Card key={notice.id} className="shadow-md border-0 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {getCategoryIcon(notice.category)}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{notice.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{notice.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryClass(notice.category)}`}>
                  {getCategoryLabel(notice.category)}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{notice.content}</p>
            </CardContent>
          </Card>
        ))}

        {/* Subscribe Section */}
        <Card className="bg-gradient-to-r from-blood-50 to-pink-50 border-blood-200 shadow-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-blood-600" />
            </div>
            <h2 className="text-xl font-bold text-blood-900 mb-3">নোটিফিকেশন সাবস্ক্রাইব করুন</h2>
            <p className="text-blood-800 mb-6 max-w-md mx-auto">
              সর্বশেষ সংবাদ, জরুরি আবেদন এবং রক্তদান শিবির সম্পর্কে আপডেট পেতে আমাদের চ্যানেল সাবস্ক্রাইব করুন।
            </p>
            <Button asChild className="h-12 px-8 bg-blood-600 hover:bg-blood-700 rounded-xl shadow-md">
              <a
                href="https://youtube.com/@BograOnlineBloodDonationOrgani"
                target="_blank"
                rel="noopener noreferrer"
              >
                এখনই সাবস্ক্রাইব করুন
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-md border-0">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-3">আরও তথ্যের জন্য যোগাযোগ করুন</h3>
            <p className="text-gray-600 mb-4">
              এই নোটিশ সম্পর্কে আরও বিস্তারিত জানতে আমাদের তথ্য ডেস্কে যোগাযোগ করুন:
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:01722528164"
                className="flex items-center justify-center gap-2 bg-blood-600 text-white px-6 py-3 rounded-xl hover:bg-blood-700 transition-colors font-medium"
              >
                ফোন: ০১৭২২-৫২৮১৬৪
              </a>
              <a
                href="mailto:bobdo5800@gmail.com"
                className="flex items-center justify-center gap-2 bg-blood-100 text-blood-700 px-6 py-3 rounded-xl hover:bg-blood-200 transition-colors font-medium"
              >
                ইমেইল: bobdo5800@gmail.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notice;
