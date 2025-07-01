
import React from 'react';
import { Calendar, AlertCircle, CheckSquare, Droplet, Clock, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GetBlood = () => {
  const requirements = [
    { text: 'রোগীর পূর্ণ নাম এবং বয়স', icon: <CheckSquare className="h-4 w-4 text-blood-600" /> },
    { text: 'রক্তের গ্রুপ এবং প্রয়োজনীয় পরিমাণ', icon: <CheckSquare className="h-4 w-4 text-blood-600" /> },
    { text: 'হাসপাতালের নাম এবং অবস্থান', icon: <CheckSquare className="h-4 w-4 text-blood-600" /> },
    { text: 'ডাক্তারের নাম এবং যোগাযোগের তথ্য', icon: <CheckSquare className="h-4 w-4 text-blood-600" /> },
    { text: 'কোন তারিখের মধ্যে রক্ত প্রয়োজন', icon: <CheckSquare className="h-4 w-4 text-blood-600" /> },
  ];

  const documents = [
    'ডাক্তারের প্রেসক্রিপশন বা রক্তের জন্য আবেদন ফর্ম',
    'রোগীর পরিচয় প্রমাণ (বা পরিবারের সদস্যের পরিচয়পত্র)',
    'হাসপাতালে ভর্তির চিঠি (যদি প্রযোজ্য)',
    'রক্তের গ্রুপ রিপোর্ট (যদি থাকে)',
  ];

  const bloodGroups = [
    { donor: 'A+', canReceive: ['A+', 'AB+'] },
    { donor: 'A-', canReceive: ['A+', 'A-', 'AB+', 'AB-'] },
    { donor: 'B+', canReceive: ['B+', 'AB+'] },
    { donor: 'B-', canReceive: ['B+', 'B-', 'AB+', 'AB-'] },
    { donor: 'AB+', canReceive: ['AB+'] },
    { donor: 'AB-', canReceive: ['AB+', 'AB-'] },
    { donor: 'O+', canReceive: ['A+', 'B+', 'AB+', 'O+'] },
    { donor: 'O-', canReceive: ['সবার জন্য'] },
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">রক্তের জন্য আবেদন করুন</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আপনার বা আপনার প্রিয়জনের রক্ত প্রয়োজন? আমরা আপনাকে দ্রুত সাহায্য করতে এখানে আছি।
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-red-900 mb-2">জরুরি প্রয়োজন?</h3>
                <p className="text-red-800 mb-4">
                  যদি আপনার জরুরি ভিত্তিতে রক্তের প্রয়োজন হয়, দয়া করে যোগাযোগ করুন:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:01722528164"
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-colors text-sm font-medium"
                  >
                    <Phone className="h-4 w-4" />
                    ০১৭২২-৫২৮১৬ৄ
                  </a>
                  <a
                    href="mailto:bobdo5800@gmail.com"
                    className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-xl hover:bg-red-200 transition-colors text-sm font-medium"
                  >
                    <Mail className="h-4 w-4" />
                    ইমেইল পাঠান
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-6 w-6 text-blood-600" />
            </div>
            <CardTitle className="text-xl">রক্তের জন্য আবেদন করুন</CardTitle>
            <p className="text-gray-600 text-sm">
              রোগী এবং প্রয়োজনীয় তথ্যসহ নিচের গ্রুপে পোস্ট করুন
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild className="h-12 px-8 bg-blood-600 hover:bg-blood-700 rounded-xl text-white shadow-md">
              <a
                href="https://www.facebook.com/groups/BOBO.BD/?ref=share&mibextid=NSMWBT"
                target="_blank"
                rel="noopener noreferrer"
              >
                গ্রুপে পোস্ট করুন
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckSquare className="h-5 w-5 text-blood-600" />
                প্রয়োজনীয় তথ্য
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    {req.icon}
                    <span className="text-gray-700 text-sm">{req.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md border-0">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                প্রয়োজনীয় নথিপত্র
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckSquare className="h-4 w-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Blood Compatibility Chart */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">রক্তের গ্রুপ সামঞ্জস্যতা চার্ট</CardTitle>
            <p className="text-gray-600 text-sm">কোন রক্তের গ্রুপ কাকে দিতে পারে</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {bloodGroups.map((group, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="w-12 h-12 bg-blood-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3 font-bold">
                    {group.donor}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">দিতে পারে:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {group.canReceive.map((receiver, idx) => (
                      <span key={idx} className="bg-blood-100 text-blood-700 px-2 py-1 rounded-lg text-xs font-medium">
                        {receiver}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">আবেদনের প্রক্রিয়া</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '১', title: 'তথ্য সংগ্রহ', desc: 'প্রয়োজনীয় তথ্য প্রস্তুত করুন' },
                { step: '২', title: 'গ্রুপে পোস্ট', desc: 'ফেসবুক গ্রুপে পোস্ট করুন' },
                { step: '৩', title: 'ডোনার খুঁজুন', desc: 'উপযুক্ত ডোনার খুঁজে পাবেন' },
                { step: '৪', title: 'যোগাযোগ', desc: 'ডোনারের সাথে যোগাযোগ করুন' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-blood-600 text-white rounded-xl flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GetBlood;
