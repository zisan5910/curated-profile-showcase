
import React from 'react';
import { Building2, MapPin, Phone, Clock, Navigation, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Hospitals = () => {
  const hospitals = [
    {
      name: 'শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল',
      address: 'বগুড়া সদর, বগুড়া',
      phone: '051-66059',
      emergency: '051-66060',
      type: 'সরকারি',
      services: ['জরুরি বিভাগ', 'রক্ত ব্যাংক', 'আইসিইউ', 'সার্জারি'],
      bloodBank: true,
    },
    {
      name: 'ইবনে সিনা হাসপাতাল',
      address: 'রেলওয়ে স্টেশন রোড, বগুড়া',
      phone: '051-63636',
      emergency: '051-63637',
      type: 'বেসরকারি',
      services: ['জরুরি বিভাগ', 'রক্ত ব্যাংক', 'কার্ডিওলজি', 'অর্থোপেডিক'],
      bloodBank: true,
    },
    {
      name: 'আল-রাজী হাসপাতাল',
      address: 'শেরপুর রোড, বগুড়া',
      phone: '051-67890',
      emergency: '051-67891',
      type: 'বেসরকারি',
      services: ['জরুরি বিভাগ', 'ডায়ালাইসিস', 'প্যাথলজি', 'ফার্মেসি'],
      bloodBank: false,
    },
    {
      name: 'বগুড়া জেনারেল হাসপাতাল',
      address: 'জেলা সদর, বগুড়া',
      phone: '051-62345',
      emergency: '051-62346',
      type: 'সরকারি',
      services: ['জরুরি বিভাগ', 'মাতৃত্ব সেবা', 'শিশু বিভাগ', 'সার্জারি'],
      bloodBank: true,
    },
    {
      name: 'কমিউনিটি মেডিকেল কলেজ হাসপাতাল',
      address: 'আলোকদিয়া, বগুড়া',
      phone: '051-65432',
      emergency: '051-65433',
      type: 'বেসরকারি',
      services: ['জরুরি বিভাগ', 'রক্ত ব্যাংক', 'ক্যান্সার ইউনিট', 'হার্ট সেন্টার'],
      bloodBank: true,
    },
    {
      name: 'আনোয়ার খান মডার্ন হাসপাতাল',
      address: 'রংপুর রোড, বগুড়া',
      phone: '051-67123',
      emergency: '051-67124',
      type: 'বেসরকারি',
      services: ['জরুরি বিভাগ', 'আধুনিক সার্জারি', 'ইন্টেনসিভ কেয়ার', 'ডায়াগনস্টিক'],
      bloodBank: false,
    },
  ];

  const emergencyTips = [
    'জরুরি অবস্থায় সরাসরি হাসপাতালের জরুরি বিভাগে যান',
    'রক্তের প্রয়োজন হলে আগে থেকে হাসপাতালের রক্ত ব্যাংকে যোগাযোগ করুন',
    'রোগীর পরিচিতি, রক্তের গ্রুপ এবং প্রয়োজনীয় কাগজপত্র সাথে রাখুন',
    'অ্যাম্বুলেন্স প্রয়োজনে ৯৯৯ নম্বরে কল করুন',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blood-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-blood-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">হাসপাতাল তালিকা</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              বগুড়া এলাকার প্রধান হাসপাতালগুলোর তথ্য এবং যোগাযোগের ঠিকানা।
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Emergency Tips */}
        <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 shadow-md">
          <CardHeader className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Stethoscope className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-xl text-red-900">জরুরি তথ্য</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emergencyTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-xl">
                  <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hospitals List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hospitals.map((hospital, index) => (
            <Card key={index} className="shadow-md border-0 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{hospital.name}</CardTitle>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{hospital.address}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hospital.type === 'সরকারি' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {hospital.type}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <div className="flex-1">
                      <span className="text-sm text-gray-600">সাধারণ: </span>
                      <a href={`tel:${hospital.phone}`} className="text-blood-600 hover:text-blood-700 font-medium text-sm">
                        {hospital.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <div className="flex-1">
                      <span className="text-sm text-gray-600">জরুরি: </span>
                      <a href={`tel:${hospital.emergency}`} className="text-red-600 hover:text-red-700 font-medium text-sm">
                        {hospital.emergency}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Blood Bank Status */}
                {hospital.bloodBank && (
                  <div className="flex items-center gap-2 p-2 bg-blood-50 rounded-lg">
                    <div className="w-6 h-6 bg-blood-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-blood-700 text-sm font-medium">রক্ত ব্যাংক উপলব্ধ</span>
                  </div>
                )}

                {/* Services */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">সেবাসমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button asChild size="sm" className="flex-1 h-10 bg-blood-600 hover:bg-blood-700 rounded-xl">
                    <a href={`tel:${hospital.emergency}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      জরুরি কল
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1 h-10 rounded-xl">
                    <a 
                      href={`https://www.google.com/maps/search/${encodeURIComponent(hospital.name + ' ' + hospital.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      দিকনির্দেশনা
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-blood-600 to-blood-700 text-white shadow-md border-0">
          <CardContent className="p-6 text-center">
            <Phone className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">জরুরি অ্যাম্বুলেন্স সেবা</h3>
            <p className="mb-4 opacity-90">
              জরুরি অ্যাম্বুলেন্স প্রয়োজনে নিচের নম্বরে কল করুন
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:999"
                className="bg-white text-blood-600 px-6 py-3 rounded-xl font-medium hover:bg-blood-50 transition-colors"
              >
                জাতীয় জরুরি সেবা: ৯৯৯
              </a>
              <a
                href="tel:01722528164"
                className="bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors"
              >
                BOBDO জরুরি: ০১৭২২-৫২৮১৬৪
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Hospitals;
