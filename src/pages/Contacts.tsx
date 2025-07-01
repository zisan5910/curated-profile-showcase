
import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Copy,
  Check,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Contacts = () => {
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

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-blood-600" />,
      title: 'ফোন',
      items: [
        { label: 'পরিচালক', value: '01780-703075', link: 'tel:01780703075' },
        { label: 'জরুরি হটলাইন', value: '01722-528164', link: 'tel:01722528164' },
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-blood-600" />,
      title: 'ইমেইল',
      items: [
        { label: 'সাধারণ জিজ্ঞাসা', value: 'bobdo5800@gmail.com', link: 'mailto:bobdo5800@gmail.com' },
        { label: 'ডেভেলপমেন্ট সহায়তা', value: 'ridoan.zisan@gmail.com', link: 'mailto:ridoan.zisan@gmail.com' },
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-blood-600" />,
      title: 'ঠিকানা',
      items: [
        { label: 'প্রধান কার্যালয়', value: 'বগুড়া, বাংলাদেশ', link: null },
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-blood-600" />,
      title: 'কর্মঘণ্টা',
      items: [
        { label: 'জরুরি সেবা', value: '২৪/৭ উপলব্ধ', link: null },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">যোগাযোগ করুন</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              রক্তদান সম্পর্কে আপনার কোন প্রশ্ন আছে বা সহায্তা প্রয়োজন? আমরা আপনাকে সাহায্য করতে এখানে আছি।
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Card key={index} className="shadow-md border-0">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  {method.icon}
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {method.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="text-center">
                    <p className="text-gray-600 text-sm mb-1">{item.label}:</p>
                    <div className="flex items-center gap-2 justify-center">
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-blood-600 hover:text-blood-700 font-medium text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-900 font-medium text-sm">{item.value}</span>
                      )}
                      {method.title === 'ফোন' && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleCopyNumber(item.value)}
                          className="h-6 w-6"
                        >
                          {copiedNumber === item.value ? (
                            <Check className="h-3 w-3 text-green-600" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message Form */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <MessageSquare className="h-6 w-6 text-blood-600" />
            </div>
            <CardTitle className="text-xl">আমাদেরকে বার্তা পাঠান</CardTitle>
            <p className="text-gray-600 text-sm">
              আপনার প্রশ্ন বা উদ্বেগ সহ এই ফর্মটি পূরণ করুন এবং আমরা যত দ্রুত সম্ভব আপনার সাথে যোগাযোগ করব।
            </p>
          </CardHeader>
          <CardContent className="text-center">
            <Button asChild className="h-12 px-8 bg-blood-600 hover:bg-blood-700 rounded-xl shadow-md">
              <a
                href={window.innerWidth < 768 ? 'mailto:bobdo5800@gmail.com' : 'https://mail.google.com/mail/?view=cm&fs=1&to=bobdo5800@gmail.com'}
                target={window.innerWidth < 768 ? '_self' : '_blank'}
                rel="noopener noreferrer"
              >
                বার্তা পাঠান
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Blood Donation Centers */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">আমাদের রক্তদান কেন্দ্রসমূহ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blood-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-blood-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">প্রধান কেন্দ্র</h3>
                <p className="text-gray-600 text-sm mb-2">সাতমাথা, বগুড়া</p>
                <p className="text-gray-600 text-sm mb-1">
                  <span className="font-semibold">ফোন:</span> 01722-528164
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">সময়:</span> ২৪/৭
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Map */}
        <Card className="shadow-md border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">আমাদের অবস্থান</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.454787351233!2d89.36973922442924!3d24.848312245745298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc5588105b94a3%3A0x5502254b1806651f!2sBogra%20Online%20Blood%20Donation%20Organization%20(BOBDO)!5e0!3m2!1sen!2sbd!4v1744263007774!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BOBDO-এর অবস্থান গুগল ম্যাপে"
              ></iframe>
            </div>
            <p className="text-gray-600 text-center mt-4">বগুড়া, বাংলাদেশ</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;
