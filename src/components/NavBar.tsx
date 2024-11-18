"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import {conferenceFormFields, navLists} from "../constants"
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons
import Image from "next/image";
import { logoImg } from "@/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import ReusableFormDialog from "./ReusableFormDialog";

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openConferenceForm, setOpenConferenceForm] = useState<boolean>(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

   const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function getMenuClasses() {
    let menuClasses: string[] = [];
    if (isOpen) {
      menuClasses = [
        'flex',
        'absolute',
        'top-[60px]',
        'bg-white',
        'w-full',
        'p-4',
        'left-0',
        'gap-6',
        'flex-col',
        'z-50'
      ];
    } else {
      menuClasses.push('hidden', 'md:flex');
    }

    return menuClasses.join(' ');
  }

    const handleRegisterForm = () => {
      console.log("register for conference");
      
    setOpenConferenceForm(true)
  }

    const handleSubmit = (values: any) => {
    console.log("form values", values);
  }


  return (
      //  <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className='bg-bgcolor text-textcolor p-4 sm:p-4 md:flex md:justify-between md:items-center'>
        <Image src={logoImg} alt="autogas" width={104} height={28} />
        <div className={getMenuClasses()}>
          <Link rel='stylesheet' href='/' className='mx-2 hover:text-gray-300'>
            Home
          </Link>
          <Link rel='stylesheet' href='/about' className='mx-2'>
            About
          </Link>
          {/* <Link rel='stylesheet' href='/blogs' className='mx-2'>
            Services
          </Link>
          <Link rel='stylesheet' href='/courses' className='mx-2'>
            Courses
          </Link>
          <Link rel='stylesheet' href='/testimonials' className='mx-2'>
            Contact Us
          </Link> */}
          {/* Vertical divider for large screens */}
          <span className='hidden md:inline-block mx-2 border-l border-gray-400 h-6'></span>

          {/* Horizontal divider for smaller screens */}
          <span className='md:hidden border-t border-gray-400 w-full my-2'></span>

          {isLoggedIn ? (

<div>
 <Link rel='stylesheet' href='/profile' className='mx-2'>
            Profile
          </Link>
</div>

          ):(
          <div>
          {/* <Link rel='stylesheet' href='/auth' className='mx-2'>
            Register
          </Link> */}

<button className="bg-buttoncolor text-white py-2 px-4 rounded-lg shadow-md" onClick={handleRegisterForm}>
                    Register For Conference
                  </button>

       <Dialog open={openConferenceForm} onOpenChange={setOpenConferenceForm}>
        <DialogContent className="max-w-lg w-full p-4 sm:p-6 bg-white rounded-lg">
          <ReusableFormDialog
            title="Register for Conference"
            fields={conferenceFormFields}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>

          {/* <Link
            rel='stylesheet'
            href='/auth'
            className='mx-2 bg-buttoncolor hover:bg-textcolor px-4 py-2 rounded-md shadow-md transition-all'
          >
            Login
          </Link> */}
          </div>)}
          
        </div>
        <div className='md:hidden flex items-center'>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className='w-6 h-6 justify-end'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
  );
}
