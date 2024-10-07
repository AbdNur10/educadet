import React from "react";  

const WhyEdu = () => {  
  return (  
    <div className="bg-white dark:bg-gray-900 mt-20 md:mt-20">  
      <div className="md:flex md:flex-row md:items-start md:justify-evenly space-y-8 lg:space-y-0 lg:space-x-8">  
        <div className="py-8 lg:py-12 lg:ml-6 px-4 mx-auto max-w-screen-md">  
          <h2  
            className="mb-4 pb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white border-green-600 border-dotted"  
            style={{ borderBottomWidth: "10px" }}  
          >  
            কেন <span className="text-green-600">এডুপাই?</span>  
          </h2>  
          <p className="mb-8 lg:mb-16 text-center text-black dark:text-gray-400 text-2xl font-bold italic animate-float">  
            Edupy একটি উদ্ভাবনী অনলাইন শিক্ষা প্ল্যাটফর্ম, যা শিক্ষার্থীদের জন্য মানসম্পন্ন এবং সহজলভ্য শিক্ষার অভিজ্ঞতা প্রদান করে। আমাদের লক্ষ্য হলো শিক্ষার্থীদের জন্য একটি এমন শিক্ষা পরিবেশ তৈরি করা, যেখানে তারা যেকোনো সময়, যেকোনো জায়গা থেকে তাদের প্রয়োজনীয় ক্লাস, কোর্স মডিউল এবং পরীক্ষা প্রস্তুতির সকল উপকরণ পেতে পারে। Edupy তে লাইভ ক্লাসের পাশাপাশি রেকর্ডেড ক্লাসের সুবিধা রয়েছে, যা শিক্ষার্থীরা তাদের নিজের সময় অনুযায়ী দেখতে পারে।  
          </p>  
          <p className="mb-8 lg:mb-16 text-center text-black dark:text-gray-400 text-2xl font-bold italic mt-2 md:mt-4 animate-float">  
            আমরা কেবল পাঠ্যবইয়ের মধ্যে সীমাবদ্ধ না থেকে শিক্ষার্থীদের জন্য ইন্টারেক্টিভ এবং বাস্তব জীবনের উদাহরণভিত্তিক শিক্ষার সুযোগ তৈরি করি। Edupy এর মাধ্যমে প্রযুক্তিকে কাজে লাগিয়ে শিক্ষা ব্যবস্থাকে আরও আধুনিক ও সবার জন্য সহজতর করার জন্য আমরা নিরলস প্রচেষ্টা চালিয়ে যাচ্ছি।  
          </p>  
        </div>  

        <div className="text-center flex-1">  
          <h3 className="mb-4 pb-4 text-4xl tracking-tight font-extrabold text-center text-green-600 dark:text-white md:mt-10">  
            এডুপাই একাডেমি  
          </h3>  
          {/* Blink animation applied to these headings */}  
          <h1 className="text-6xl md:text-7xl font-extrabold italic animate-blink">  
            Courses  
          </h1>  
          <h1 className="text-6xl md:text-7xl font-extrabold italic animate-blink">  
            Offered By  
          </h1>  
          <h1 className="text-6xl md:text-7xl font-extrabold italic text-green-600 animate-blink">  
            US  
          </h1>  

          {/* Updated box for Last Updated section */}  
          <div className="mt-8 mx-auto w-[300px] h-[100px] flex flex-col justify-center items-center bg-gray-200 shadow-lg rounded-md">  
            <p className="text-center text-black text-2xl font-bold">  
              সর্বশেষ আপডেট:  
            </p>  
            <p className="text-center text-black text-2xl font-bold">  
              সেপ্টেম্বর ২৪, ২০২৪  
            </p>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default WhyEdu;