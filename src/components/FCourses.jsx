import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cadet from '../assets/cadet.jpg' // Import useNavigate

const Card = [
  {
    img: Cadet,
    title: "Cadet Admission",
    desc: "All our upcoming events for the month of October to December",
    Checkbtn: "ঘুরে দেখুন",
    buyBtn: "কিনুন",
    link: "/cadet-admission", // Add link for navigation
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvJwR3gdYlJP27gHXaCjiIljV1ThGgwnUzwA&s",
    title: "Cyber Security",
    desc: "All our upcoming events for the month of October to December",
    Checkbtn: "ঘুরে দেখুন",
    buyBtn: "কিনুন",
    link: "/cyber-security",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a75368173330847.648e9fb76d648.jpg",
    title: "Thumbnail Design",
    desc: "Description for course 3",
    Checkbtn: "ঘুরে দেখুন",
    buyBtn: "কিনুন",
  },
  {
    img: "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA=",
    title: "Digital Marketing",
    desc: "Description for course 4",
    Checkbtn: "ঘুরে দেখুন",
    buyBtn: "কিনুন",
  },
  {
    img: "https://cdn-media-1.freecodecamp.org/images/0*oDbEFNhoM75KOnvF.",
    title: "Scratch Programming for Kids",
    desc: "Description for course 5",
    Checkbtn: "ঘুরে দেখুন",
    buyBtn: "কিনুন",
  },
  {
    img: "https://media.istockphoto.com/id/1503858430/vector/website-software-development-concept-web-design-site-and-mobile-app-on-laptop-testing-on.webp?s=1024x1024&w=is&k=20&c=kFH6nyuASbyk4r15RvSMaRw4BLSSYvG8Oe79gRorMUI=",
    title: "Full Stack Web Development",
    desc: "Description for course 6",
    Checkbtn: "ঘুরে দেখুন",
    buyBtn: "কিনুন",
  },
];

const FCourses = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleToggle = () => {
    setShowAll((prev) => !prev); // Toggle the state
  };

  const handleCheckItOut = (link) => {
    navigate(link); // Navigate to the specified link
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
          className="mb-4 pb-4 text-6xl tracking-tight font-extrabold text-center text-green-600 dark:text-white border-green-600 border-dotted"
          style={{ borderBottomWidth: "10px" }}
        >
          Featured <span className="text-green-600"> Courses</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 md:gap-18 md:mt-14">
          {Card.slice(0, showAll ? Card.length : 2).map((course, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md lg:w-[300px] lg:ml-8"
            >
              <img
                src={course.img}
                alt={course.title}
                className="mb-4 rounded mx-auto" // Center the image
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
                {course.title}
              </h3>
              <p className="text-gray-600 font-bold md:mt-2 dark:text-gray-400 text-center">
                {course.desc}
              </p>
              <div className="mt-4 flex justify-center space-x-8">
                <button
                  className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
                  onClick={() => handleCheckItOut(course.link)} // Navigate on button click
                >
                  {course.Checkbtn}
                </button>
                <button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
                  {course.buyBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={handleToggle}
            className="px-4 py-2 font-bold text-white rounded transition
             duration-300 ease-in-out transform hover:scale-105 bg-gradient-to-r
              from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
          >
            {showAll ? "See Less" : "View More courses"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FCourses;
