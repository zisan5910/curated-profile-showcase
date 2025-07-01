
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  FileText,
  Download,
  CheckCircle,
  Clock,
  Star,
} from 'lucide-react';

const Certificate = () => {
  const certificateTypes = [
    {
      title: 'রক্তদান সার্টিফিকেট',
      description: 'নিয়মিত রক্তদানের জন্য স্বীকৃতি',
      icon: <Award className="h-8 w-8 text-blood-600" />,
      requirements: ['কমপক্ষে ৩ বার রক্তদান', 'সংগঠনের সদস্যপদ'],
    },
    {
      title: 'স্বেচ্ছাসেবক সার্টিফিকেট',
      description: 'স্বেচ্ছাসেবামূলক কাজের প্রশংসাপত্র',
      icon: <Star className="h-8 w-8 text-blood-600" />,
      requirements: ['৬ মাসের স্বেচ্ছাসেবা', 'কমিউনিটি সার্ভিস'],
    },
    {
      title: 'অংশগ্রহণ সার্টিফিকেট',
      description: 'কর্মসূচিতে অংশগ্রহণের সার্টিফিকেট',
      icon: <CheckCircle className="h-8 w-8 text-blood-600" />,
      requirements: ['ইভেন্টে অংশগ্রহণ', 'কার্যক্রম সম্পন্ন'],
    },
  ];

  const processSteps = [
    {
      icon: <FileText className="h-6 w-6 text-blood-600" />,
      title: '১. ফর্ম পূরণ',
      description: 'গুগল ফর্মটি পূরণ করুন'
    },
    {
      icon: <Clock className="h-6 w-6 text-blood-600" />,
      title: '২. যাচাইকরণ',
      description: 'তথ্য যাচাই (৭-১০ দিন)'
    },
    {
      icon: <Award className="h-6 w-6 text-blood-600" />,
      title: '৩. অনুমোদন',
      description: 'সার্টিফিকেট প্রস্তুত'
    },
    {
      icon: <Download className="h-6 w-6 text-blood-600" />,
      title: '৪. প্রাপ্তি',
      description: 'ইমেইলে পাঠানো হবে'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">সার্টিফিকেট আবেদন</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              বিভিন্ন ধরনের সার্টিফিকেটের জন্য আবেদন করুন।
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Certificate Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificateTypes.map((cert, index) => (
            <Card key={index} className="shadow-md border-0 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {cert.icon}
                </div>
                <CardTitle className="text-lg">{cert.title}</CardTitle>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm">প্রয়োজনীয় যোগ্যতা:</h4>
                  <div className="space-y-2">
                    {cert.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Process */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">আবেদন প্রক্রিয়া</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card className="shadow-md border-0 bg-gradient-to-r from-blood-50 to-pink-50 border-blood-200">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-blood-600" />
            </div>
            <CardTitle className="text-xl text-blood-900">সার্টিফিকেটের জন্য আবেদন করুন</CardTitle>
            <p className="text-blood-800 text-sm">
              নিচের ফর্মটি পূরণ করে আপনার পছন্দের সার্টিফিকেটের জন্য আবেদন করুন
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              asChild
              className="h-12 px-8 bg-blood-600 hover:bg-blood-700 rounded-xl shadow-md"
            >
              <a
                href="https://forms.google.com/certificate-application"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-5 w-5 mr-2" />
                সার্টিফিকেট আবেদন ফর্ম
              </a>
            </Button>
            <p className="text-blood-700 text-xs mt-4">
              * আবেদনের পূর্বে নিশ্চিত করুন যে আপনি সংশ্লিষ্ট সার্টিফিকেটের যোগ্যতা পূরণ করেছেন
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certificate;
