import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Copy, Info, FileText, Heart, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FindDonor = () => {
  const postTemplate = `🩸 জরুরি রক্তের প্রয়োজন 🩸

রোগীর নাম:
রক্তের গ্রুপ:
প্রয়োজনীয় পরিমাণ:
ঠিকানা:
সময়:
যোগাযোগ:
রেফারেন্স:

#রক্তদান #BOBDO #বগুড়া #BloodDonation`;

  const copyTemplate = () => {
    navigator.clipboard.writeText(postTemplate);
    toast({
      title: "কপি হয়েছে!",
      description: "পোস্ট টেমপ্লেট কপি হয়েছে। এখন ফেসবুক গ্রুপে পোস্ট করুন।",
    });
  };

  const openFacebookGroup = () => {
    copyTemplate();
    setTimeout(() => {
      window.open("https://www.facebook.com/groups/BOBO.BD", "_blank");
    }, 500);
  };

  const bloodCompatibility = [
    { donor: "O-", recipients: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"] },
    { donor: "O+", recipients: ["O+", "A+", "B+", "AB+"] },
    { donor: "A-", recipients: ["A-", "A+", "AB-", "AB+"] },
    { donor: "A+", recipients: ["A+", "AB+"] },
    { donor: "B-", recipients: ["B-", "B+", "AB-", "AB+"] },
    { donor: "B+", recipients: ["B+", "AB+"] },
    { donor: "AB-", recipients: ["AB-", "AB+"] },
    { donor: "AB+", recipients: ["AB+"] },
  ];

  return (
    <Layout title="ডোনার খুঁজুন">
      <div className="px-4 space-y-6">
        {/* Main Action Button */}
        <Card className="border-primary/20 bg-gradient-to-br from-red-50 to-red-100">
          <CardContent className="p-6 text-center">
            <Button
              onClick={openFacebookGroup}
              className="w-full btn-ripple bg-primary hover:bg-primary-hover text-primary-foreground text-lg py-4 mb-4"
            >
              <Facebook className="h-5 w-5 mr-2" />
              ফেসবুক গ্রুপে পোস্ট করুন
            </Button>
            <Button
              variant="outline"
              onClick={copyTemplate}
              className="w-full"
            >
              <Copy className="h-4 w-4 mr-2" />
              পোস্ট টেমপ্লেট কপি করুন
            </Button>
          </CardContent>
        </Card>

        {/* Required Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Info className="h-5 w-5 text-primary" />
              প্রয়োজনীয় তথ্য
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">রোগীর পূর্ণ নাম ও বয়স</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">রক্তের গ্রুপ (নিশ্চিত হয়ে লিখুন)</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">কত ব্যাগ রক্ত প্রয়োজন</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">হাসপাতালের নাম ও ঠিকানা</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <p className="font-bengali">যোগাযোগের নম্বর</p>
            </div>
          </CardContent>
        </Card>

        {/* Required Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <FileText className="h-5 w-5 text-primary" />
              প্রয়োজনীয় নথিপত্র
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali">ডাক্তারের রক্তের জন্য চাহিদাপত্র</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali">রোগীর জাতীয় পরিচয়পত্র</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <p className="font-bengali">আত্মীয়ের জাতীয় পরিচয়পত্র</p>
            </div>
          </CardContent>
        </Card>

        {/* Blood Compatibility Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Heart className="h-5 w-5 text-primary" />
              রক্তের গ্রুপ সামঞ্জস্যতা চার্ট
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              {bloodCompatibility.map((group, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="font-semibold text-primary">{group.donor}</div>
                  <div className="text-sm text-muted-foreground">→</div>
                  <div className="text-sm font-bengali">
                    {group.recipients.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Process */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-bengali">
              <Clock className="h-5 w-5 text-primary" />
              আবেদনের প্রক্রিয়া
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold font-bengali">পোস্ট টেমপ্লেট কপি করুন</h4>
                <p className="text-sm text-muted-foreground font-bengali">উপরের বাটন চাপুন</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold font-bengali">তথ্য পূরণ করুন</h4>
                <p className="text-sm text-muted-foreground font-bengali">সঠিক তথ্য দিয়ে পোস্ট তৈরি করুন</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibent font-bengali">ফেসবুক গ্রুপে পোস্ট করুন</h4>
                <p className="text-sm text-muted-foreground font-bengali">BOBDO গ্রুপে শেয়ার করুন</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FindDonor;
