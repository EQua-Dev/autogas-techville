"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent } from "./ui/dialog";
import ReusableFormDialog from "./ReusableFormDialog";
import { logoImg } from "@/utils";
import { conferenceFormFields } from "../constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [openConferenceForm, setOpenConferenceForm] = useState(false); // For dialog
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For auth state

  const handleMobileMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false); // Closes the menu when an item is clicked
  };

  const handleRegisterForm = () => {
    setOpenConferenceForm(true);
  };

  const handleSubmit = (values: any) => {
    console.log("form values", values);
  };

  const getMenuClasses = () => {
    return isOpen
      ? "flex absolute top-[60px] bg-white w-full p-4 left-0 gap-6 flex-col z-50"
      : "hidden md:flex";
  };

  return (
    <nav className="bg-bgcolor text-textcolor p-4 sm:p-4 md:flex md:justify-between md:items-center">
      <Image src={logoImg} alt="autogas" width={104} height={28} />
      <div className={getMenuClasses()}>
        <Link
          href="/"
          className="mx-2 hover:text-gray-300"
          onClick={handleCloseMenu} // Closes menu on click
        >
          Home
        </Link>
        <Link
          href="/about"
          className="mx-2"
          onClick={handleCloseMenu} // Closes menu on click
        >
          About
        </Link>
        <span className="hidden md:inline-block mx-2 border-l border-gray-400 h-6"></span>
        <span className="md:hidden border-t border-gray-400 w-full my-2"></span>

        {isLoggedIn ? (
          <Link
            href="/profile"
            className="mx-2"
            onClick={handleCloseMenu} // Closes menu on click
          >
            Profile
          </Link>
        ) : (
          <div>
            <button
              className="bg-buttoncolor text-white py-2 px-4 rounded-lg shadow-md"
              onClick={handleRegisterForm}
            >
              Register For Conference
            </button>

            <Dialog open={openConferenceForm} onOpenChange={setOpenConferenceForm}>
              <DialogContent className="max-w-lg w-full p-4 sm:p-6 bg-white rounded-lg">
                <ReusableFormDialog
                  title="Register for Conference"
                  fields={conferenceFormFields}
                  onSubmit={handleSubmit}
                  onClose={() => setOpenConferenceForm(false)}
                />
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleMobileMenuToggle}>
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
}
