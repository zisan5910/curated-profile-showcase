
import React from 'react';
import { Droplet, Heart, Users, Award } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center p-4 text-center bg-white rounded-lg shadow-sm border">
      <div className="mb-2 text-blood-600">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-1 text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center mb-6 text-gray-900">
          আমাদের অর্জন
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatItem
            icon={<Droplet className="h-6 w-6" />}
            value="২৫,০০০+"
            label="রক্তদান"
          />
          <StatItem
            icon={<Heart className="h-6 w-6" />}
            value="৫,০০০+"
            label="সংরক্ষিত জীবন"
          />
          <StatItem
            icon={<Users className="h-6 w-6" />}
            value="২,৫০০+"
            label="নিবন্ধিত দাতা"
          />
          <StatItem
            icon={<Award className="h-6 w-6" />}
            value="১০০+"
            label="স্বেচ্ছাসেবক"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
