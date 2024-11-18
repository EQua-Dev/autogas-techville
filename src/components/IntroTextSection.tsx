"use client"

import { animateWithGsap } from '@/utils/animations';
import { useGSAP } from '@gsap/react';
import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';

interface IntroTextSectionProps {
  texts: string[]; // List of texts to display
  viewLink?: string; // Optional link for "Learn More" button
}

const IntroTextSection: React.FC<IntroTextSectionProps> = ({ texts, viewLink }) => {

  useGSAP(() => {
    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_text",
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

  return (
    <section className="mt-8 px-8">
      <div className="screen-max-width">
        <p className="feature-text g_text text-center">
          {texts.map((text, index) => (
            <span key={index} className="g_text">
              {text}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>
      {viewLink && (
        <div className="flex justify-center w-full mt-8">
          <Button className="button align-middle" asChild>
            <Link href={viewLink}>Learn More</Link>
          </Button>
        </div>
      )}
    </section>
  );
}

export default IntroTextSection;
