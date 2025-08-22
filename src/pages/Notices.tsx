import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Notice {
  id: number;
  title: string;
  date: string;
  category: "জরুরি" | "সাধারণ" | "ইভেন্ট" | "ঘোষণা";
  content: string;
  isImportant: boolean;
}

const Notices = () => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  const notices: Notice[] = [
    {
      id: 1,
      title: "জরুরি রক্তের প্রয়োজন - O+ গ্রুপ",
      date: "২০২৪-০১-১৮",
      category: "জরুরি",
      isImportant: true,
      content: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতালে একজন রোগীর জরুরি O+ গ্রুপের রক্তের প্রয়োজন। রোগীর বয়স ৩৫ বছর। দুর্ঘটনায় আহত হয়ে অপারেশনের জন্য ২ ব্যাগ রক্তের প্রয়োজন। যোগাযোগ: ০১৭২২৫২৮১৬৪"
    },
    {
      id: 2,
      title: "মাসিক রক্তদান ক্যাম্প - ফেব্রুয়ারি ২০২৪",
      date: "২০২৪-০১-১৫",
      category: "ইভেন্ট",
      isImportant: false,
      content: "আগামী ২৫ ফেব্রুয়ারি ২০২৪ তারিখে সকাল ৯টা থেকে বিকাল ৪টা পর্যন্ত বগুড়া শহীদ জিয়াউর রহমান মেডিকেল কলেজে মাসিক রক্তদান ক্যাম্প অনুষ্ঠিত হবে। সবাইকে অংশগ্রহণের জন্য অনুরোধ করা হচ্ছে।"
    },
    {
      id: 3,
      title: "নতুন স্বেচ্ছাসেবক নিবন্ধন চালু",
      date: "২০২৪-০১-১০",
      category: "ঘোষণা",
      isImportant: false,
      content: "BOBDO তে নতুন স্বেচ্ছাসেবক হিসেবে যোগদানের সুযোগ। আগ্রহী প্রার্থীরা আমাদের ফেসবুক গ্রুপে যোগাযোগ করুন। বিশেষ প্রশিক্ষণের ব্যবস্থা রয়েছে।"
    },
    {
      id: 4,
      title: "প্রাথমিক চিকিৎসা প্রশিক্ষণ কর্মশালা",
      date: "২০২৪-০১-০৫",
      category: "ইভেন্ট",
      isImportant: true,
      content: "আগামী ৩০ জানুয়ারি ২০২৪ তারিখে বিকাল ২টায় বগুড়া কমিউনিটি সেন্টারে প্রাথমিক চিকিৎসা বিষয়ক বিনামূল্যে প্রশিক্ষণ কর্মশালা। সার্টিফিকেট প্রদান করা হবে।"
    },
    {
      id: 5,
      title: "AB- রক্তের জরুরি প্রয়োজন",
      date: "২০২৪-০১-০২",
      category: "জরুরি",
      isImportant: true,
      content: "একজন গর্ভবতী মায়ের জটিলতার কারণে AB- গ্রুপের রক্তের জরুরি প্রয়োজন। অবস্থান: ইবনে সিনা হাসপাতাল, বগুড়া। যোগাযোগ করুন: ০১৭২২৫২৮১৬৪"
    },
    {
      id: 6,
      title: "থ্যালাসেমিয়া রোগীদের জন্য বিশেষ সহায়তা কর্মসূচি",
      date: "২০২৩-১২-২৮",
      category: "ঘোষণা",
      isImportant: false,
      content: "থ্যালাসেমিয়া আক্রান্ত শিশুদের জন্য বিশেষ রক্তদান কর্মসূচি শুরু হয়েছে। নিয়মিত রক্তদাতা হতে আগ্রহীরা যোগাযোগ করুন।"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "জরুরি":
        return "bg-red-100 text-red-800 border-red-200";
      case "ইভেন্ট":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "ঘোষণা":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (selectedNotice) {
    return (
      <Layout title="নোটিশ বিস্তারিত">
        <div className="px-4">
          <Button
            variant="ghost"
            onClick={() => setSelectedNotice(null)}
            className="mb-4 text-primary"
          >
            ← পিছনে যান
          </Button>
          
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge className={getCategoryColor(selectedNotice.category)}>
                  {selectedNotice.category}
                </Badge>
                {selectedNotice.isImportant && (
                  <Badge className="ml-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                    গুরুত্বপূর্ণ
                  </Badge>
                )}
              </div>
              
              <h1 className="text-xl font-bold font-bengali mb-3 text-foreground">
                {selectedNotice.title}
              </h1>
              
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-bengali">{selectedNotice.date}</span>
              </div>
              
              <div className="prose prose-sm font-bengali text-foreground">
                <p className="leading-relaxed">{selectedNotice.content}</p>
              </div>
              
              {selectedNotice.category === "জরুরি" && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-bengali font-semibold text-center">
                    🆘 জরুরি সহায়তার জন্য: ০১৭২২৫২৮১৬৪
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="নোটিশ বোর্ড">
      <div className="px-4 space-y-4">
        {notices.map((notice) => (
          <Card 
            key={notice.id} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              notice.isImportant ? 'border-l-4 border-l-primary' : ''
            }`}
            onClick={() => setSelectedNotice(notice)}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getCategoryColor(notice.category)}>
                      {notice.category}
                    </Badge>
                    {notice.isImportant && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                        গুরুত্বপূর্ণ
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-semibold font-bengali text-lg leading-tight text-foreground">
                    {notice.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-bengali">{notice.date}</span>
                  </div>
                </div>
                
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
              
              <p className="text-muted-foreground font-bengali text-sm line-clamp-2">
                {notice.content.substring(0, 100)}...
              </p>
            </CardContent>
          </Card>
        ))}
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 font-bengali text-center font-semibold">
            📢 সব নোটিশ আমাদের ফেসবুক গ্রুপেও পাবেন
          </p>
          <p className="text-blue-700 font-bengali text-center text-sm mt-1">
            দ্রুত আপডেট পেতে গ্রুপে যোগ দিন
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Notices;