import React, { useState } from "react";
import Link from "next/link";
import Logo from "../components/logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  Instagram,
  Leetcode,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark 
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-100
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-light 
      absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] ease duration-100
      ${router.asPath === href ? "w-full" : "w-0"}
      dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const navbar = () => {
  const [getMode, setMode] = useThemeSwitcher();
  const [isopen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isopen);
  };

  return (
    <header className="dark:text-light z-10 lg:px-16 md:px-12 sm:px-8 w-full px-32 py-8 font-medium flex items-center justify-between ">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isopen ? "rotate-45 translate-y-3" : "-translate-y-1"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isopen ? "opacity-0" : "opacity-100 "
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isopen ? "-rotate-45 translate-y-1" : "translate-y-1"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/Projects" title="Projects" className="mx-4" />
          <CustomLink href="/others" title="Others" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          {/* <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a> */}
          <motion.a
            href="https://github.com/AnirbanOne"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/anirban-chakraborty-85a1601b7/"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://leetcode.com/Anir_Baaan/"
            target={"_blank"}
            className="w-6 bg-transparent rounded-full mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Leetcode />
          </motion.a>
          <motion.a
            href="https://instagram.com/the_infj.guy?igshid=MzNlNGNkZWQ4Mg=="
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Instagram />
          </motion.a>

          <button
            onClick={() => setMode(getMode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
      ${getMode === "light" ? "bg-dark text-light" : "bg-light text-dark"} `}
          >
            {getMode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isopen ? (
        <motion.div 
        initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
        animate={{scale: 1, opacity: 1}}
        className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/others"
              title="Others"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            {/* <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a> */}
            <motion.a
              href="https://github.com/AnirbanOne"
              target={"_blank"}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anirban-chakraborty-85a1601b7/"
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://leetcode.com/Anir_Baaan/"
              target={"_blank"}
              className="w-6 bg-transparent rounded-full mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Leetcode />
            </motion.a>

            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              className="w-6 ml-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Instagram />
            </motion.a>

            <button
              onClick={() => setMode(getMode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1
      ${getMode === "light" ? "bg-dark text-light" : "bg-light text-dark"} `}
            >
              {getMode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default navbar;

//31:56
