import React from 'react';
import { FaVideo, FaBroadcastTower, FaQuestionCircle } from 'react-icons/fa';
import Picture from '../assets/WhatsApp Image 2024-10-07 at 06.57.11_bb2deb9f.jpg'

const Curriculum = () => {
  return (
    <div className="bg-gray-100 font-roboto min-h-screen">
      <div className="container mx-auto p-4">
        <header className="text-center mb-6">
          <h1 className="text-4xl font-bold">কারিকুলাম</h1>
          <div className="flex justify-center space-x-4 mt-2">
            <span>৪৫ মডিউল</span>
            <span>৫২ লাইভ ক্লাস</span>
          </div>
        </header>
        <main className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
            Getting Started: Your First Steps in Coding (Module 0-1)
          </h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg">ক্লাস নির্দেশক</span>
            <div className="flex items-center">
              <img
                src={Picture}
                alt="Instructor's profile picture"
                className="rounded-full mr-2"
                width="30"
                height="30"
              />
              <span>Mehedi Hasan</span>
            </div>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Week 0 */}
            <div className="bg-green-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm mr-2">
                  সপ্তাহ ০
                </span>
                <span>
                  শুরুর আগের শুরু ক্লাস শুরুর আগে যারা এনরোল করেছেন
                </span>
              </div>
              <p>এই লেভেলের HTML &amp; CSS template design project করানো হবে।</p>
            </div>

            {/* Week 1 */}
            <div className="bg-yellow-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm mr-2">
                  সপ্তাহ ১
                </span>
                <span>[Start] Run Your First Code</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="flex items-center mr-4">
                  <FaVideo className="mr-1" /> 2 recorded video
                </span>
                <span className="flex items-center mr-4">
                  <FaBroadcastTower className="mr-1" /> 2 live class
                </span>
                <span className="flex items-center">
                  <FaQuestionCircle className="mr-1" /> 1 Quiz
                </span>
              </div>
              <p>
                ওয়েব কি? | ওয়েব সার্ভার কি? | কিভাবে একটি ওয়েব অ্যাপ্লিকেশন কাজ করে? |
                ইন্টারনেট এবং ইন্ট্রানেট কি? | ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড ডেভেলপমেন্ট | 
                ব্রাউজারগুলির মাধ্যমে কীভাবে ডেটা অ্যাক্সেস এবং ভাগ করা হয় | পাইথন জ্যাঙ্গোর পরিচিতি | 
                পরিবেশের প্রস্তুতি | আপনার প্রথম প্রোগ্রাম লেখা এবং চালানো | সাধারণের সাথে খেলা 
                যোগ, বিয়োগ, গুণ, ভাগ | পাইথন কোড কিভাবে কাজ করে তা বোঝা 
                পাইথন মন্তব্য | পাইথন শিখতে বিস্তারিত রোড ম্যাপ
              </p>
              <p className="bg-yellow-300 p-2 mt-2 rounded">
                Basic CLI project Part-1 (Continued) (Contact book/ Library management project)
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Curriculum;
