"use client"
import { rectangleImg } from "@/utils";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ourMission, ourVision } from "@/constants"; // Import mission and vision arrays
import { animateWithGsap } from "@/utils/animations";

const MissionVisionCard: React.FC = () => {
  const [isMission, setIsMission] = useState(true); // Toggle between mission and vision
  const [currentIndex, setCurrentIndex] = useState(0); // Track which statement to display


//   useEffect(() => {
//     // Animation for the text transition
//     animateWithGsap("#content",
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
   
//   }, [isMission, currentIndex]);

  // Get the current content based on whether it’s mission or vision
  const content = isMission ? ourMission[currentIndex] : ourVision[currentIndex];
  const header = isMission ? "Our Mission" : "Our Vision";

  return (
    <section className="my-12">
      <div className="screen-max-width bg-footercolor text-textcolor p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column (Vision) */}
          <div className="flex flex-col items-start lg:order-1 order-1">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="mb-4 text-justify">
              {ourVision.length > 1 ? (
                <ul className="list-none space-y-2">
                  {ourVision.map((item, index) => (
                    <li key={index} className="flex items-start text-justify">
                      <span id="content" className="mr-2 text-lg">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-justify">{content}</span>
              )}
            </p>
            <img
              src={rectangleImg}
              alt="Our Vision"
              className="w-full rounded-lg hidden lg:block"
            />
          </div>

          {/* Right Column (Mission) */}
          <div className="flex flex-col items-start lg:order-2 order-2">
            <img
              src={rectangleImg}
              alt="Our Mission"
              className="w-full rounded-lg hidden lg:block"
            />
            <h2 className="text-2xl font-bold mt-4 lg:mt-0">Our Mission</h2>
            <p className="mb-4">
              {ourMission.length > 1 ? (
                <ul className="list-none space-y-2">
                  {ourMission.map((item, index) => (
                    <li key={index} className="flex items-start text-justify">
                      <span id="content" className="mr-2 text-lg text-justify">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-justify">{content}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionCard;
