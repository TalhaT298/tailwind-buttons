import React from "react";
import logo from "../../../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-black text-neutral-content">
        <aside className="items-center grid-flow-col">
          <img className="w-16 h-10" src={logo} alt="" />
          <p>Copyright © 2024 - Talha Tarique</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="">
            <FaFacebookF size="1.4rem" color="white" />
          </a>
          <a href="">
            <FaInstagram size="1.4rem" color="white" />
          </a>
          <a href="">
            <FaLinkedinIn  size="1.4rem" color="white" />
          </a>
          <a href="">
            <BsTwitterX  size="1.4rem" color="white" />
          </a>
          <a href="">
            <FaWhatsapp size="1.4rem" color="white" />
          </a>
          <a href="">
            <FaDiscord size="1.4rem" color="white" />
          </a>
          <a href="">
            <FaThreads size="1.4rem" color="white" />
          </a>
          <a href="">
            <BiLogoGmail  size="1.4rem" color="white" />
          </a>
          
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
