
import React, { useState } from 'react';
import { Wallet, CreditCard, AlertCircle, Copy, Check, HeartHandshake } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const paymentMethods = [
  {
    id: 'bkash',
    name: 'bKash',
    number: '01722-528164',
    logo: 'https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg',
  },
  {
    id: 'nagad',
    name: 'Nagad',
    number: '01722-528164',
    logo: 'https://download.logo.wine/logo/Nagad/Nagad-Logo.wine.png',
  },
  {
    id: 'rocket',
    name: 'Rocket',
    number: '01722-528164',
    logo: 'https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png',
  },
];

export default function Donate() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopyNumber = (number: string) => {
    navigator.clipboard.writeText(number.replace(/-/g, '')).then(() => {
      setCopiedNumber(number);
      toast({
        title: 'নম্বর কপি হয়েছে',
        description: 'নম্বরটি আপনার ক্লিপবোর্ডে কপি করা হয়েছে।',
      });
      setTimeout(() => setCopiedNumber(null), 2000);
    });
  };

  const instructions = [
    'পছন্দের পেমেন্ট পদ্ধতি নির্বাচন করুন',
    'প্রদত্ত নম্বরে অনুদানের পরিমাণ পাঠান',
    'লেনদেন আইডি সংরক্ষণ করুন',
    'অনুদান ফর্মটি পূরণ করুন'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <HeartHandshake className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">আর্থিক অনুদান</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              আর্থিক সহায়তা প্রদানের মাধ্যমে আমাদের মিশনকে সমর্থন করুন
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Payment Methods */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Wallet className="h-6 w-6 text-blood-600" />
            </div>
            <CardTitle className="text-xl">কিভাবে অনুদান দেবেন</CardTitle>
            <CardDescription>
              অনুদান প্রদানের জন্য এই ধাপগুলি অনুসরণ করুন
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="bg-gray-50 rounded-xl p-4 text-center"
                >
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="h-10 mx-auto mb-3 object-contain"
                  />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {method.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-sm text-gray-600">{method.number}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopyNumber(method.number)}
                      className="h-8 w-8"
                    >
                      {copiedNumber === method.number ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">
                      পেমেন্ট নির্দেশাবলী:
                    </h4>
                    <ol className="space-y-1 text-sm text-blue-800">
                      {instructions.map((instruction, index) => (
                        <li key={index}>
                          {index + 1}. {instruction}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Donation Form */}
        <Card className="shadow-md border-0 bg-gradient-to-r from-blood-50 to-pink-50 border-blood-200">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <CreditCard className="h-6 w-6 text-blood-600" />
            </div>
            <CardTitle className="text-xl text-blood-900">অনুদানের বিবৃতি জমা দিন</CardTitle>
            <CardDescription className="text-blood-800">
              অনুদান সম্পূর্ণ করতে ফর্মটি পূরণ করুন
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="h-12 px-8 bg-blood-600 hover:bg-blood-700 rounded-xl shadow-md" asChild>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeRg5unKNOp5OAalKuoPS0FZ2y1W7TUEt5MXvhUKIv-lnt7NA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                অনুদান ফর্ম খুলুন
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="shadow-md border-0">
          <CardContent className="p-6 text-center">
            <p className="text-gray-600 mb-4">অনুদান সম্পর্কিত কোন প্রশ্ন থাকলে যোগাযোগ করুন:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="flex items-center justify-center gap-2">
                <span className="font-medium text-gray-900">ফোন: ০১৭২২-৫২৮১৬৪</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleCopyNumber('01722-528164')}
                  className="h-6 w-6"
                >
                  {copiedNumber === '01722-528164' ? (
                    <Check className="h-3 w-3 text-green-600" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </div>
              <span className="font-medium text-gray-900">ইমেইল: bobdo5800@gmail.com</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
