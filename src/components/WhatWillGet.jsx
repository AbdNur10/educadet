import React from 'react';
import icons1 from '../assets/icons8-calender-50.png';
import icons2 from '../assets/icons8-live-50.png';
import icons3 from '../assets/icons8-projects-50.png';
import icons4 from '../assets/icons8-brain-50.png';
import icons5 from '../assets/icons8-brain-50.png';
import icons6 from '../assets/icons8-community-50.png';
import icons7 from '../assets/icons8-deadline-50.png';
import icons8 from '../assets/icons8-note-50.png';
import icons9 from '../assets/icons8-guidelines-50.png';
import icons10 from '../assets/icons8-handbook-50.png';
import icons11 from '../assets/icons8-code-50.png';
import icons12 from '../assets/icons8-certificate-50.png';
import icons13 from '../assets/WhatsApp Image 2024-10-06 at 15.38.04_3bbc14a3.jpg';

 // Replace with actual icon imports

const getFrom = [
  {
    icon: icons1,
    title: '৬ মাসের গাইডেড জার্নি',
    desc: 'একদম বিগিনার ফ্রেশার থেকে অ্যাডভান্সড কারিকুলাম',
  },
  {
    icon: icons2,
    title: '৫টি লাইভ ক্লাস এবং ৩০০+ ঘন্টা রেকর্ডেড ভিডিও',
    desc: 'ইন্ডাস্ট্রি এক্সপার্টের কাছে শিখুন লাইভ',
  },
  {
    icon: icons3,
    title: '২ টি ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট এবং ১০টি কম্প্রেহেনসিভ প্রজেক্ট',
    desc: 'ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট এড করুন সিভিতে, থাকুন সবার চেয়ে এগিয়ে 3',
  },
  {
    icon: icons4,
    title: 'প্রোগ্রেস ট্র্যাকিং',
    desc: 'লিভার বোর্ডে দেখুন নিজের প্রগ্রেসন উত্থান ধাপ',
  },
  {
    icon: icons5,
    title: 'প্রতিদিন ২ বেলা সাপোর্ট ক্লাস',
    desc: 'প্র্যাকটিস করতে গিয়ে ধরা হলে সাপোর্ট লাইভ সেশনে নিন ',
  },
  {
    icon: icons6,
    title: 'কমিউনিটি সাপোর্ট',
    desc: 'থাকুন প্রোএকটিভ কমিউনিটির সাথে অনলাইন',
  },
  {
    icon: icons7,
    title: 'লাইফটাইম এক্সেস',
    desc: 'প্রিরেকর্ডেড ভিডিও, রিসোর্স এবং ক্লাস নোটস এক্সেস ও থাকছে লাইফ টাইম এক্সেস',
  },
  {
    icon: icons8,
    title: 'জব মার্কেট গাইডলাইন',
    desc: 'ইন্ডাস্ট্রি এক্সপার্টদের কাছে পান জব মার্কেটে প্রবেশ করার পূর্ণাঙ্গ নির্দেশনা',
  },
  {
    icon: icons9,
    title: 'ইন্টারভিউ হ্যান্ডবুক',
    desc: 'নির্দিষ্ট জব ইন্টারভিউর জন্য ১০০+ ইন্টারভিউ কোয়েশ্চন দিয়ে সাজানো হয়েছে হ্যান্ডবুক',
  },
  {
    icon: icons10,
    title: 'মার্কেটিং গাইডলাইন',
    desc: 'কোড ক্যানভাসের মতো মার্কেটিং কিভাবে প্রোডাক্ট সেল করবেন, পাবেন গাইডলাইন',
  },
  {
    icon: icons11,
    title: 'কোড রিভিউ',
    desc: 'শেখার পাশাপাশি নিজের প্রজেক্ট সুন্দর করে বাড়ানোর প্রফেশনাল রিভিউ পাবেন',
  },
  {
    icon: icons12,
    title: 'সার্টিফিকেট',
    desc: 'কোর্স শেষ করে পাবেন শেয়ারেবল কোর্স কমপ্লিশন এবং এসসেসমেন্ট সার্টিফিকেট',
  },
  {
    icon: icons13,
    title: 'Title 13',
    desc: 'Description 13',
  },
];

const WhatWillGet = () => {
  return (
    <div className="bg-white dark:bg-gray-900 mt-20">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          className="mb-4 pb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white border-green-600 border-dotted"
          style={{ borderBottomWidth: "10px" }}
        >
          কোর্সে <span className="text-green-600">আপনি পাচ্ছেন</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-4">
  {getFrom.map((item, index) => (
    <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center w-[300px]">
      <img src={item.icon} alt={item.title} className="w-[80px] h-[80px] mb-4" />
      <h3 className="text-xl font-semibold text-center">{item.title}</h3>
      <p className="text-gray-700 text-center">{item.desc}</p>
    </div>
  ))}
</div>

    </div>
  );
};

export default WhatWillGet;
