import { GiAxeSwing } from "react-icons/gi";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import React, { useEffect, useState } from "react";
import navText from "../Assets/NavAssets/NavText";
import optionText from "../Assets/NavAssets/OptionText";
import SocialMedia from "../Assets/SocialMedia";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 175) {
        setShadow(true);
      } else {
        setShadow(false);
      }
      console.log(nav);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  const fileName = "Resume.pdf";

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-white"
          : "fixed w-full h-20 z-[100] bg-white"
      }
    >
      <div className=" flex justify-between items-center w-full h-full px-2 xl:px-8 2xl:px-16">
        <a href={"/#"}>
          <ul className=" flex items-center cursor-pointer hover:scale-105 ease-in duration-300">
            <li>
              <h1 className=" text-xl text-teal-600 ">KVebiant</h1>
            </li>
            <li>
              <GiAxeSwing className=" text-2xl ml-2 text-teal-900" />
            </li>
          </ul>
        </a>

        <ul className=" hidden md:flex items-center">
          <li>{navText({ text: "Home", link: "/#" })}</li>
          <li>{navText({ text: "About Me", link: "/#About" })}</li>
          <li>{navText({ text: "Projects", link: "/#Projects" })}</li>
          <li>{navText({ text: "Contact Me", link: "/#Contact" })}</li>
          <li>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white px-4 py-2 rounded-md ml-8"
              href="/assets/doc/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download={fileName}
            >
              Resume
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : " fixed right-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className=" flex top-0 w-full items-center justify-between">
              <a href={"/#"}>
                <ul className=" flex items-center cursor-pointer hover:scale-105 ease-in duration-300">
                  <li>
                    <h1 className=" text-2xl text-teal-600 ">KVebiant</h1>
                  </li>
                  <li>
                    <GiAxeSwing className=" text-2xl ml-2 text-teal-900" />
                  </li>
                </ul>
              </a>
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                a Javascript Developer, Let's Build Something Together.
              </p>
            </div>
          </div>
          <div className=" py-2 flex flex-col">
            <ul className=" uppercase">
              {optionText({ text: "Home", link: "/#" })}
              {optionText({ text: "About Me", link: "/#About" })}
              {optionText({ text: "Projects", link: "/#Projects" })}
              {optionText({ text: "Contact Me", link: "/#Contact" })}
              <a
                href="/assets/doc/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download={fileName}
              >
                <li className="py-4 pt-4 text-sm bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-white rounded-md text-center">
                  Resume
                </li>
              </a>
            </ul>
            <div className=" pt-16 place-self-end">
              <p className=" uppercase justify-end tracking-widest text-teal-600">
                Let's Connect
              </p>
              <div className=" flex item-center text-3xl gap-5 justify-between my-4 w-[60%] sm:w[80%]">
                <SocialMedia
                  icon={AiFillLinkedin}
                  url="https://www.linkedin.com/in/kikivebiant"
                />
                <SocialMedia
                  icon={AiFillInstagram}
                  url="https://www.instagram.com/kvebiant"
                />
                <SocialMedia
                  icon={AiFillGithub}
                  url="https://github.com/kvebiant"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
