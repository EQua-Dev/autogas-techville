"use client"
import { milestones } from "@/constants";
import { MilestoneType } from "@/data/MilestoneData";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import { useState } from "react";

interface MilestoneCardProps {
  milestone: MilestoneType
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-102">
    <img 
      src={milestone.imageUrl} 
      alt={milestone.text} 
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{milestone.date}</h3>
      <p className="text-gray-600">{milestone.text}</p>
    </div>
  </div>
);

const Milestones = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = Math.ceil(milestones.length / 6);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  };

  const getCurrentSlideItems = () => {
    const start = currentSlide * 6;
    return milestones.slice(start, start + 6);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-textcolor font-bold text-center mb-12">
        Some Major Milestones of Autogas Nigeria
      </h2>

      {/* Desktop View (3x2 Grid with Slider) */}
      <div className="hidden lg:block relative">
        <div className="grid grid-cols-3 gap-6">
          {getCurrentSlideItems().map((milestone) => (
            <MilestoneCard key={milestone.id} milestone={milestone} />
          ))}
        </div>

        {slidesCount > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
              aria-label="Previous slide"
            >
              <FaChevronCircleLeft className="w-6 h-6 text-textcolor" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
              aria-label="Next slide"
            >
              <FaChevronCircleRight className="w-6 h-6 text-textcolor" />
            </button>
          </>
        )}

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile View (Single Card Slider) */}
      <div className="lg:hidden relative">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {milestones.map((milestone) => (
              <div key={milestone.id} className="w-full flex-shrink-0 px-4">
                <MilestoneCard milestone={milestone} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentSlide((prev) => 
              prev > 0 ? prev - 1 : milestones.length - 1
            )}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            aria-label="Previous milestone"
          >
            <FaChevronCircleLeft className="w-6 h-6 text-textcolor" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => 
              (prev + 1) % milestones.length
            )}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
            aria-label="Next milestone"
          >
            <FaChevronCircleRight className="w-6 h-6 text-textcolor" />
          </button>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {milestones.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to milestone ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestones;