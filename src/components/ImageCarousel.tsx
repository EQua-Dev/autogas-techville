"use client";

import { conferenceFormFields, hightlightsSlides } from "@/constants";
import React, { useState } from "react";
import Slider from "react-slick";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import ReusableFormDialog from "./ReusableFormDialog";

const ImageCarousel: React.FC = () => {
  const [openConferenceForm, setOpenConferenceForm] = useState<boolean>(false);

  const handleRegisterForm = () => {
    setOpenConferenceForm(true);
  };

  const handleSubmit = (values: any) => {
    console.log("Form values:", values);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true, // Set to true if you want next/prev arrows
    responsive: [
      {
        breakpoint: 768, // Small screens
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full">
        <Slider {...settings}>
          {hightlightsSlides.map((slide) => (
            <div key={slide.id} className="relative">
              <div className="video-carousel_container">
                <div className="w-full h-[70vh] md:h-[80vh] flex-center rounded-3xl overflow-hidden bg-black">
                  {slide.mediaType === "video" ? (
                    <video
                      src={slide.media}
                      autoPlay
                      muted
                      loop
                      className="w-full mx-4 h-full object-cover rounded-3xl transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <img
                      src={slide.media}
                      alt={`Slide ${slide.id}`}
                      className="w-full mx-4 h-full object-cover rounded-3xl"
                    />
                  )}
                </div>

                {/* Header Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white">
                  <h2 className="md:text-5xl text-3xl font-medium">
                    {slide.headerText}
                  </h2>
                  <p className="md:text-lg text-base mt-2">
                    {slide.smallerText}
                  </p>
                  {(slide.contentType === "form" || slide.contentType === "nav") && (
                    <div className="mt-12">
                      <button
                        className="bg-buttoncolor text-white py-2 px-4 rounded-lg shadow-md"
                        onClick={handleRegisterForm}
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Dialog open={openConferenceForm} onOpenChange={setOpenConferenceForm}>
        <DialogContent className="max-w-5xl p-6 bg-white">
          <DialogHeader>
            <DialogTitle className="font-bold text-textcolor text-3xl">
              Register For Conference
            </DialogTitle>
          </DialogHeader>
          <div className="screen-max-width">
            {/* @ts-ignore */}
            <ReusableFormDialog
              title="Sign Up Form"
              fields={conferenceFormFields}
              onSubmit={handleSubmit}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageCarousel;
