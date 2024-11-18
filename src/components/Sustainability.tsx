"use client";

import { environmentalImpactTexts, sustainabilityInitiatives } from "@/constants";
import { animateWithGsap } from "@/utils/animations";
import { useGSAP } from "@gsap/react";
import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sustainability: React.FC = () => {

    useGSAP(() => {

    // animateWithGsap("#exploreVideo")
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  });

      const colorClasses = ["bg-footercolor", "bg-pink-100", "bg-pink-100", "bg-footercolor"];

 // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }


  return (
    <section className="py-12">
      <div className="screen-max-width ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-12">
             {/* Left Column */}
        <div>
          <h2 id="sustainability_title" className="text-3xl font-bold text-textcolor mb-4">Sustainability</h2>
          <p className="text-xl text-textcolor mb-4">
            Committed to a cleaner, greener future
          </p>
          <p className="text-textcolor g_text text-justify">
            At Autogas Nigeria, sustainability drives our mission to lead Nigeria's transition to cleaner energy. As a provider of Compressed Natural Gas (CNG) solutions, we focus on reducing carbon emissions, conserving resources, and creating long-term economic, social, and environmental benefits for communities.
          </p>
        </div>

        {/* Right Column */}
        <div className="relative hidden md:block">
          {/* Top Image */}
          <div className="w-3/4 h-48 bg-gray-300 rounded-md overflow-hidden shadow-lg">
            <img
              src="/images/sustainability-1.jpg"
              alt="Sustainability Image 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Image */}
          <div className="w-2/3 h-40 bg-gray-300 rounded-md overflow-hidden shadow-lg absolute top-24 left-16">
            <img
              src="/images/sustainability-2.jpg"
              alt="Sustainability Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        </div>
       <div className="bg-footercolor my-16 p-8 sm:p-8">
         <h2 id="sustainability_title" className="text-3xl text-center font-bold text-textcolor mb-4">Our Sustainability Goals</h2>
          <p className="text-textcolor g_text text-justify">
            At Autogas Nigeria, we promote CNG to reduce carbon emissions, offering cleaner air and lower emissions across industries and households. Our projects enhance energy efficiency, reducing waste and cutting costs for businesses and consumers. We support economic development by creating jobs, fostering local businesses, and investing in workforce training. Committed to responsible resource management, we prioritize efficient use of materials, energy, and water to minimize waste and safeguard natural resources.
          </p>
      </div>
      <div className="my-16">
        <h2 id="sustainability_title" className="text-3xl text-center font-bold text-textcolor mb-4">Our Sustainability Initiatives</h2>
        <div className="hidden md:grid grid-cols-2 gap-4 md:gap-6">
          {sustainabilityInitiatives.map((text, index) => {
            const backgroundColor = colorClasses[index % colorClasses.length];
            const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
            return (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md text-white ${backgroundColor} h-full flex`}
              >
                <p className="text-2xl font-bold text-textcolor">{formattedIndex} <br/>
                <p className="mt-2 font-normal text-lg text-textcolor">{text}</p></p>
              </div>
            );
          })}
        </div>
            {/* Slider for smaller screens */}
        <div className="block md:hidden mx-4">
          <Slider {...sliderSettings}>
            {sustainabilityInitiatives.map((text, index) => {
              const backgroundColor = colorClasses[index % colorClasses.length];
              const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
              return (
                <div key={index}>
                  <div
                    className={`p-6 mx-4 rounded-lg shadow-md text-textcolor ${backgroundColor} h-full flex`}
                  >
                    <p className="text-2xl font-bold">{formattedIndex} <br/>
                    <p className="mt-2 font-normal text-justify text-lg" text-color>{text}</p></p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
         <div>
        <h2 id="sustainability_title" className="text-3xl text-center font-bold text-textcolor mb-4">Environmental Impact and Savings Calculator</h2>
        <div className="">
          {environmentalImpactTexts.map((text, index) => {
            const backgroundColor = colorClasses[index % colorClasses.length];
            const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
            return (
              <div
                key={index}
                className={`p-6 text-white h-full flex`}
              >
                <p className="text-2xl font-bold text-textcolor">{text.header} <br/>
                <p className="mt-2 font-normal text-justify text-lg text-textcolor">{text.body}</p></p>
              </div>
            );
          })}
        </div>
            {/* Slider for smaller screens */}
        {/* <div className="block md:hidden mx-4">
          <Slider {...sliderSettings}>
            {sustainabilityInitiatives.map((text, index) => {
              const backgroundColor = colorClasses[index % colorClasses.length];
              const formattedIndex = index < 9 ? `0${index + 1}` : `${index + 1}`;
              return (
                <div key={index}>
                  <div
                    className={`p-6 rounded-lg shadow-md text-textcolor ${backgroundColor} h-full flex`}
                  >
                    <p className="text-2xl font-bold">{formattedIndex}</p> <br/>
                    <p className="mt-2 text-lg" text-color>{text}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div> */}
      </div>
      <p className="text-textcolor p-8">
        Learn more about our sustainability initiatives or contact us for more details. 
      </p>
      <p className="text-textcolor p-8">
        sustainability@autogasnigeria.co
      </p>
      </div>
      
    </section>
  );
};

export default Sustainability;
