import React from 'react'
import ImageCarousel from './ImageCarousel'
import IntroTextSection from './IntroTextSection'

const Hero = () => {
  return (
    <section id="#highlights"
      className="w-screen overflow-hidden h-[80%] common-padding ">
        <ImageCarousel />
        <IntroTextSection texts={[
    "Autogas Nigeria, established in 2021, is focused on transforming Nigeria’s energy sector by promoting Compressed Natural Gas (CNG) as a cleaner and more cost-effective alternative to traditional fuels.",
    "The company provides vehicle conversion services, CNG refueling infrastructure, high-quality CNG equipment, and training. With a commitment to sustainability and innovation, Autogas Nigeria seeks to make CNG widely accessible for transportation, industry, and power generation."
  ]}
  viewLink="/learn-more" />
        
        </section>
  )
}

export default Hero