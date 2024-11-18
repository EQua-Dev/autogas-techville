import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import gsap from "gsap";


interface ServiceCardProps {
  service: {
    serviceId: number;
    serviceName: string;
    serviceDescription: string;
    serviceIcon: string[];
  };
  handleButtonClick: (serviceId: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, handleButtonClick }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef<HTMLImageElement>(null);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % service.serviceIcon.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [service.serviceIcon.length]);

  useEffect(() => {
    // Slide animation with GSAP
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: 100, opacity: 0 }, // Start from right with opacity 0
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" } // Slide to the center
      );
    }
  }, [currentIndex]);

  return (
    <div className="rounded-lg p-0.5 bg-gradient-to-b from-buttoncolor to-textcolor shadow-lg">
    <Card className="bg-white  p-6 rounded-lg flex flex-col items-start relative shadow-lg">
  
  <CardContent >
    <div >

        <div>
             {/* Icon - Positioned at the top right */}
      <img
              ref={imageRef}

        id="serviceIcon"
      src={service.serviceIcon[currentIndex]}
        alt={service.serviceName}
        className="absolute top-2 left-2 w-16 h-16 rounded-full"
      />

      {/* Service Title */}
      <h3 className="text-textcolor text-xl font-semibold mt-12">{service.serviceName}</h3>

      {/* Service Description */}
      <p className="text-textcolor mt-4">{service.serviceDescription}</p>

        </div>
     
    </div>
  </CardContent>
  <CardFooter>
    
      {/* Button at the bottom right */}
         <Button className='mt-auto text-white py-2 px-4 rounded-md bottom-4 right-4 bg-buttoncolor hover:bg-buttoncolor-hover' asChild onClick={() => handleButtonClick(service.serviceId)}>
      <Link href="/login">Learn More</Link>
    </Button>
  </CardFooter>
</Card>

    </div>


    
  );
};

export default ServiceCard;
