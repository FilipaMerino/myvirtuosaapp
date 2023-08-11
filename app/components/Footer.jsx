import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.png";

import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";


import "@fortawesome/fontawesome-svg-core/styles.css";


const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#fb653e] text-neutral-content md:flex md:justify-around md:items-center sticky">
      <div className=" w-full md:w-[13rem] flex justify-center items-center">
        <div className="flex justify-center md:justify-start">
          <Image src={logo} alt="Logo Admin" objectFit="contain" className="w-[10rem] " />
        </div>
        <div className="vertical_line ml-5 md:ml-20 hidden md:block"></div>
      </div>

      <div className="flex flex-col  my-auto">
        <a href="https://hello.dubsado.com/public/form/view/62435fd047bf3990e0a4af23">
          <h1 className="text-2xl text-[#ffffff] hover:text-[#333333]">
            Let&apos;s Chat!
          </h1>







        </a>
        <p className="text-[#ffffff] text-sm">
          Stay current with updates from our social channels
        </p>

        <div className="flex w-[5rem] justify-between">
          <a href="https://www.instagram.com/adminvirtuosa/">
          <BsInstagram className="text-2xl text-[#ffffff] hover:text-[#333333]"/>
          </a>
          <a href="https://www.facebook.com/Adminvirtuosa">
            <FaFacebookSquare  className="text-2xl text-[#ffffff] hover:text-[#333333]"/>


          </a>
          <a href="https://www.linkedin.com/in/adminvirtuosa/">
            <FaLinkedin className="text-2xl text-[#ffffff] hover:text-[#333333]"/>

          </a>
        </div>
      </div>
      <div className=" my-auto vertical_line ml-20 hidden md:block"></div>

      <div className="horizontalLineFooter md:hidden"></div>

      <div className="flex mr-20">
        <Link
          href="/about"
          className="text-sm text-[#ffffff]  hover:underline">
          Our Story
        </Link>

        <Link
          href="/#service"
          className="text-sm text-[#ffffff]  hover:underline ml-2">
          Services
        </Link>
        <Link
          href="/blog"
          className="text-sm text-[#ffffff]  hover:underline ml-2">
          Blog
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
