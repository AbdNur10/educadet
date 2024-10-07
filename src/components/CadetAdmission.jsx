import React from "react";
import vdo1 from '../assets/AQNnNZDMQ_jYTiZ_mEz-8MvDXRJcWAyyke0_UFS9zvFLD8eVBW8toCHgFudaUWm7BTEySnSHDyYbkUm0v5OJn8qz.mp4'

const CadetAdmission = () => {
  return (
    <div className="bg-white dark:bg-gray-900 mt-20 md:mt-20">
      <div className="md:flex md:flex-row md:items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center flex-1">
          <h3
            className="mb-4 pb-4 text-6xl md:text-7xl tracking-tight 
          font-extrabold text-center text-green-600 dark:text-white md:mt-10"
          >
            Cadet Admission
          </h3>
          <div className="mt-6 md:ml-4">
            <video
              controls
              className="mx-auto rounded-lg"
              width="500"
              height="320"
              
              src={vdo1}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md lg:mr-4">
          <h2
            className="mb-4 pb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white border-green-600 border-dotted"
            style={{ borderBottomWidth: "10px" }}
          >
            Why <span className="text-green-600">This course</span>
          </h2>
          <p className="mb-8 lg:mb-16 text-center text-black dark:text-gray-400
           text-2xl text-wrap font-bold italic animate-float">
            এই কোর্সে থাকছে: 🔹 এক্স ক্যাডেট শিক্ষকদের প্যানেল - যারা তাদের
            নিজস্ব অভিজ্ঞতা থেকে তোমাকে দেবে সহজ ও কার্যকরী গাইডলাইন, যা তোমাকে
            এগিয়ে রাখবে প্রতিযোগিতায়।🔹 দ্রুত সিলেবাস কাভারেজ - সঠিক সময়ে পূর্ণ
            সিলেবাস শেষ করার নিশ্চয়তা🔹 সাপ্তাহিক ও মাসিক মডেল টেস্ট - প্রতি
            সপ্তাহে ১৫০ নম্বরের টেস্ট এবং মাস শেষে পূর্ণ মডেল টেস্ট! এগুলো তোমার
            প্রস্তুতিকে নিশ্চিতভাবে শক্তিশালী করবে।🔹 ফাইনাল মডেল টেস্ট - পুরো
            সিলেবাস শেষ করার পর থাকবে একটি পূর্ণাঙ্গ ফাইনাল মডেল টেস্ট যা তোমার
            পরীক্ষাভীতি দূর করবে এবং আত্মবিশ্বাস বাড়াবে।🔹 ফ্রি মক ভাইভা সেশন -
            লিখিত পরীক্ষায় উত্তীর্ণদের জন্য থাকছে ফ্রি মক ভাইভা সেশনের সুবি
          </p>
        </div>
      </div>
    </div>
  );
};

export default CadetAdmission;
