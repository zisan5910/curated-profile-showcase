
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center bg-white p-8 rounded-lg shadow-sm border max-w-md mx-4">
        <h1 className="text-6xl font-bold mb-4 text-blood-600">404</h1>
        <p className="text-lg text-gray-600 mb-4">পেজটি খুঁজে পাওয়া যায়নি</p>
        <p className="text-sm text-gray-500 mb-6">
          আপনি যে পেজটি খুঁজছেন সেটি বিদ্যমান নেই বা সরানো হয়েছে।
        </p>
        <Button asChild className="bg-blood-600 hover:bg-blood-700">
          <a href="/">হোমে ফিরে যান</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
