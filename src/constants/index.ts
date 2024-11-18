import { z } from "zod";
import {
  appleImg,
  bagImg,
  banner1Img,
  banner2Img,
  banner3Img,
  banner4Img,
  blackImg,
  blueImg,
  gasPumpImg,
  highlightFirstmv,
  highlightFourthmv,
  highlightSectmv,
  highlightThirdmv,
  logoImg,
  searchImg,
  service1aImg,
  service1bImg,
  service1cImg,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

// constants.ts
export const hightlightsSlides = [
  {
    id: 1,
    headerText: "Driving Nigeria’s Clean Energy Future",
    smallerText: "Transforming energy with CNG solutions",
    mediaType: "image", // or "video"
    media: banner1Img,
    contentType: "media",
    mediaDuration: 4,
  },
  {
    id: 2,
    headerText: "Titanium.",
    smallerText: "So strong. So light. So Pro.",
    mediaType: "image",
    media: banner2Img,
    contentType: "nav",
    mediaDuration: 5,
    buttonText: "Explore"
  },
  {
    id: 3,
    headerText: "iPhone 15 Pro Max",
    smallerText: "Longest optical zoom in iPhone ever. Far out.",
    mediaType: "image",
    media: banner3Img,
    contentType: "media",
    mediaDuration: 2,
  },
  {
    id: 4,
    headerText: "Upcoming Conference.",
    smallerText: "What will yours do?",
    mediaType: "video",
    media: highlightFirstmv,
    contentType: "form",
    mediaDuration: 5,
    buttonText: "Register Now"
  },
];


export const ourServices =[
  {
    serviceId: 1,
    serviceName: 'CNG and LPG Conversion Training and Certification Programmes',
    serviceDescription: 'Obtain necessary medical notes for work or school with only a few clicks of hassle.',
    serviceIcon: [service1aImg, service1bImg, service1cImg],
  }, 
  {
     serviceId: 2,
    serviceName: 'Personal & Fleet Conversion Services',
    serviceDescription: 'Obtain necessary medical notes for work or school with only a few clicks of hassle.',
    serviceIcon: [service1bImg],
  },
  {
     serviceId: 3,
    serviceName: 'Conversion Kits and Equipment Supply',
    serviceDescription: 'Obtain necessary medical notes for work or school with only a few clicks of hassle.',
    serviceIcon: [service1cImg],
  }
]

export const whyChooseUs = [
  "Cost savings with CNG",
  "Low carbon emissions",
  "Government incentives",
  "Sustainability initiatives"
]


export const blogs = [
  {
    coverImage: gasPumpImg,
    title: "Understanding CNG Conversion",
    readDuration: "5 min read",
    datePublished: "2023-10-01",
    content: `Compressed Natural Gas (CNG) is a cleaner fuel alternative... (add your full blog text here)`,
  },
  {
    coverImage: gasPumpImg,
    title: "Benefits of CNG for Vehicles",
    readDuration: "6 min read",
    datePublished: "2023-09-28",
    content: `Switching to CNG can lead to cost savings and reduced emissions... (add your full blog text here)`,
  },
  {
    coverImage: gasPumpImg,
    title: "Autogas Training Programs",
    readDuration: "4 min read",
    datePublished: "2023-09-20",
    content: `Autogas Nigeria offers a range of training programs... (add your full blog text here)`,
  },
];

export const testimonials = [
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 4.5,
    location: "New York, USA",
    testimony:
      "This service has transformed my daily routine. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
    location: "Los Angeles, USA",
    testimony:
      "An incredible experience! The team was professional and very helpful.",
  },
  {
    name: "Carlos Rossi",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    location: "Rome, Italy",
    testimony:
      "A truly wonderful service that I would recommend to anyone. Thank you!",
  },
];

  // Define dropdown options for specific fields
const genderOptions = ["Male", "Female", "Other"];
const stateOptions = ["Lagos", "Abuja", "Kano", "Rivers"];
const hearAboutOptions = ["Social Media", "Friend", "Advertisement", "Other"];



export const conferenceFormFields = [
  { name: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name", validation: z.string().min(1, "First name is required") },
  { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name", validation: z.string().min(1, "Last name is required") },
  { name: "email", label: "Email", type: "email", placeholder: "Enter your email", validation: z.string().email("Invalid email address") },
  { name: "occupation", label: "Occupation", type: "text", placeholder: "Enter your occupation" },
  { name: "gender", label: "Gender", type: "select", options: genderOptions },
  { name: "phoneNumber", label: "Phone Number", type: "text", placeholder: "Enter your phone number", validation: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits") },
  { name: "state", label: "State of Residence", type: "select", options: stateOptions },
  { name: "hearAboutUs", label: "How did you hear about us?", type: "select", options: hearAboutOptions },
];

export const ourMission = ["To provide top-tier CNG and LPG conversion training and consultation services, supporting the transition to cleaner and more efficient automotive energy sources.", 
  "We aim to empower individuals, businesses, and the automotive industry with the knowledge, skills, and infrastructure needed to make the switch to sustainable energy solutions."]

export const ourVision = ["To be the driving force behind the widespread adoption of CNG and LPG as alternative automotive fuels, reducing emissions, conserving resources, and promoting economic sustainability across Nigeria."]


// Sample data structure - replace with your actual data
export const milestones = [
  {
    id: 1,
    date: 'January 2020',
    text: 'Launch of first Autogas station in Lagos',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 2,
    date: 'March 2020',
    text: 'Partnership with major oil companies established',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 3,
    date: 'June 2020',
    text: 'Expansion to 10 states across Nigeria',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 4,
    date: 'September 2020',
    text: 'Training program for mechanics launched',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 5,
    date: 'December 2020',
    text: '100,000 vehicle conversions milestone',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 6,
    date: 'March 2021',
    text: 'National safety standards implementation',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 7,
    date: 'June 2021',
    text: 'Launch of mobile conversion units',
    imageUrl: '/api/placeholder/400/300'
  },
  {
    id: 8,
    date: 'September 2021',
    text: 'Environmental impact assessment completed',
    imageUrl: '/api/placeholder/400/300'
  }
];

export const milestonesText = "Autogas Nigeria has trained over 1,000 Nigerians on Autogas installation and is a leader in CNG development in the country. Trainees from our programs formed the Green Clean Energy and Gas Practitioners Association of Nigeria to advocate for the sector. We also launched the Autogas Nigeria Workshop Affiliate Programme (ANWAP) to support workshop owners with training and business growth. Our commitment is to help Nigeria transition to cleaner, more sustainable automotive fuels. Join us in embracing CNG for environmental and cost-saving benefits."

export const teamMembers = [
  {
    name: "Johnny Doe",
    title: "CEO",
    image: service1aImg,
    description: "Johnny J is the visionary behind our company.",
  },
  {
    name: "Jane Smith",
    title: "CTO",
    image: "/images/jane.jpg",
    description: "Jane leads our technical innovations.",
  },
  {
    name: "Emily White",
    title: "CFO",
    image: "/images/emily.jpg",
    description: "Emily manages our financial operations.",
  },
];

export const sustainabilityInitiatives = [
  "CNG Conversion Program: We help businesses and individuals reduce carbon emissions and energy costs by switching from petrol and diesel to cleaner CNG, improving air quality and mitigating the environmental impact of transportation.",
  "Green Infrastructure Development: We are building sustainable CNG refueling stations across Nigeria to support the adoption of clean fuel alternatives and reduce reliance on fossil fuels.",
  "Community Engagement and Education: Through workshops and outreach, we raise awareness about clean energy and sustainability, promoting responsible environmental practices in local communities.",
  "Renewable Energy Integration: We are exploring the integration of solar and wind power with CNG to further reduce emissions and create a more sustainable energy mix."
]

export const environmentalImpactTexts = [
  {
    id: 1,
  header: "Track Your Impact",
  body: "We offer an Environmental Impact and Savings Calculator on our website, where  users can see how much they can save by switching to CNG and how much they can  reduce their carbon emissions. This tool helps individuals and businesses understand  the environmental and financial benefits of making the switch to cleaner energy."
},
  {
    id: 2,
  header: "Our Commitment to the Future",
  body: "At Autogas Nigeria, we are not just building energy infrastructure; we are building a  sustainable future. Every project we undertake is designed to create lasting positive  impacts on the environment, the economy, and society. By choosing CNG, we are  contributing to global efforts to combat climate change and ensure that future  generations inherit a cleaner, healthier planet."
},
  {
    id: 3,
  header: "Join Us in Making a Difference",
  body: "We invite individuals, businesses, and communities to partner with us in embracing  sustainable energy solutions. Together, we can drive Nigeria toward a cleaner,  greener, and more sustainable future."
},
]