import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

import { Link } from "react-router-dom";
import { Logo } from "../Assets";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-primary sm:p-6">
      <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex items-center justify-center md:justify-start">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            className="mb-3 md:mb-0"
          >
            <Link to="/" className="flex items-center gap-8">
              <motion.img
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                src={Logo}
                className="object-contain w-10 md:w-36"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-headingColor">
                Foodify
              </span>
            </Link>
          </motion.div>
        </div>
        <span className="text-sm text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Foodify™. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:text-xl">
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://rajdipsinha.vercel.app/"
            className="flex items-center justify-center w-10 h-10 rounded-full text-textColor bg-primary"
          >
            <BsDribbble />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://github.com/rajdips834"
            className="flex items-center justify-center w-10 h-10 rounded-full text-textColor bg-primary"
          >
            <BsGithub />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://linkedin.com/in/rajdipsinha"
            className="flex items-center justify-center w-10 h-10 rounded-full text-textColor bg-primary"
          >
            <BsLinkedin />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://x.com/rajdips834"
            className="flex items-center justify-center w-10 h-10 rounded-full text-textColor bg-primary"
          >
            <BsTwitter />
          </motion.a>
          <motion.a
            whileTap={{ scale: 1.1 }}
            target={"_blank"}
            rel="noreferrer"
            href="https://www.instagram.com/rukjaaraj"
            className="flex items-center justify-center w-10 h-10 rounded-full text-textColor bg-primary"
          >
            <BsInstagram />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
