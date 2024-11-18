"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";
import { animate, stagger } from "framer-motion";
import ManagementTeamCard from "./ManagementTeamCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
}

interface ManagementTeamProps {
  teamMembers: TeamMember[];
}

const ManagementTeam: React.FC<ManagementTeamProps> = ({ teamMembers }) => {
  useEffect(() => {
    // GSAP animation for grid items
    const items = document.querySelectorAll(".team-profile");
    animate(
      items,
      { opacity: 1, y: 0 },
      { duration: 0.6, delay: stagger(0.2) }
    );
  }, []);

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-12 bg-footercolor my-24">
      <h2 className="text-3xl text-textcolor font-bold text-center mb-8">Management Team</h2>
      <div className="bg-blue-600 p-8 rounded-lg">
        {/* Grid layout for larger screens */}
        <div className="hidden md:grid grid-cols-2 gap-8 px-64 py-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-profile opacity-0 transform translate-y-8 ${
                teamMembers.length % 2 !== 0 && index === teamMembers.length - 1
                  ? "col-span-2"
                  : ""
              }`}
            >
              <ManagementTeamCard
                name={member.name}
                title={member.title}
                image={member.image}
                description={member.description}
              />
            </div>
          ))}
        </div>

        {/* React Slick slider for smaller screens */}
        <div className="block md:hidden ">
          <Slider {...sliderSettings}>
            {teamMembers.map((member, index) => (
              <div key={index} className="flex justify-center">
                <ManagementTeamCard
                  name={member.name}
                  title={member.title}
                  image={member.image}
                  description={member.description}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
