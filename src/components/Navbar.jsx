import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = ({ nyanStateToParent }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [nyanClicked, setNyanClicked] = useState(false);
  const [showFilesDialog, setShowFilesDialog] = useState(false); // State to control the Files dialog box
  const [filesOpen, setFilesOpen] = useState(false);
  
  const filesRef = useRef(null); // Create a ref to the Files dialog

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside of the Files dialog
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filesRef.current && !filesRef.current.contains(event.target)) {
        setShowFilesDialog(false); // Close the dialog if clicked outside
      }
    };

    if (showFilesDialog) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilesDialog]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <button
          className={nyanClicked ? "bg-green-500 text-white font-bold py-2 px-4 rounded mr-2" : "bg-red-500 text-white font-bold py-2 px-4 rounded mr-2"}
          onClick={() => {
            const updatedNyanClick = !nyanClicked;
            setNyanClicked(updatedNyanClick);
            nyanStateToParent(updatedNyanClick);
          }}
        >
          {nyanClicked ? "Nyan Mode: On" : "Nyan Mode: Off"}
        </button>

        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Subarna &nbsp;
            <span className='sm:block hidden'> | 02</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                if (nav.title !== "Files") {
                  setActive(nav.title);
                  setShowFilesDialog(false); // Close the dialog if navigating to other links
                } else {
                  setShowFilesDialog((prev) => !prev); // Toggle the dialog on click
                }
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {/* Show dialog box only when "Files" is clicked */}
              {nav.title === "Files" && showFilesDialog && (
  <div
    ref={filesRef} // Assign the ref to the dialog box
    className="absolute bg-gray-900 text-white rounded-lg shadow-lg mt-2 w-[120px] h-[90px]"
  >
    <p
      className="cursor-pointer hover:bg-gray-700 rounded transition-colors p-2"
      onClick={() => {
        const cvFileUrl = "/src/assets/CV English.pdf"; // Path to your CV file
        const link = document.createElement("a");
        link.href = cvFileUrl;
        link.download = "CV_English.pdf"; // Suggested file name
        document.body.appendChild(link);
        link.click(); // Trigger download
        document.body.removeChild(link); // Clean up
      }}
    >
      CV
    </p>
    <div className="border-t border-gray-600"></div> {/* Separator */}
    <p
      className="cursor-pointer hover:bg-gray-700 rounded transition-colors p-2"
      onClick={() => {
        const applicationFileUrl = "/src/assets/Application.pdf"; // Path to your application file
        const link = document.createElement("a");
        link.href = applicationFileUrl;
        link.download = "Application.pdf"; // Suggested file name
        document.body.appendChild(link);
        link.click(); // Trigger download
        document.body.removeChild(link); // Clean up
      }}
    >
      Application
    </p>
  </div>
)}

            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center hover:cursor-pointer'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  {/* Show dialog box only when "Files" is clicked */}
                  {nav.title === "Files" && showFilesDialog && (
                    <div
                      className="absolute bg-gray-900 text-white rounded-lg shadow-lg mt-2 w-[120px] h-[90px]"
                    >
                      <p
                        className="cursor-pointer hover:bg-gray-700 rounded transition-colors p-2"
                        onClick={() => window.open("/cv.pdf", "_blank")}
                      >
                        CV
                      </p>
                      <div className="border-t border-gray-600"></div> {/* Separator */}
                      <p
                        className="cursor-pointer hover:bg-gray-700 rounded transition-colors p-2"
                        onClick={() => window.open("/application.pdf", "_blank")}
                      >
                        Application
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
