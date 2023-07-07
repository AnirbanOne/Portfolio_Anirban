import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Project2 from "../../public/images/projects/dashboardProject.jpeg";
import Project3 from "../../public/images/projects/Screenshot 2023-07-07 095811.png";
import Project4 from "../../public/images/projects/todo.png";
import Project5 from "../../public/images/projects/gpt.png";
import Project6 from "../../public/images/projects/pineapple.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const CreateFeaturedProject = ({ type, title, summary, img, link, github }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers once when component enters view
    threshold: 0.1, // Percentage of component visibility required to trigger animation
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <motion.article
      className="w-full flex lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light"
      ref={ref}
      variants={animationVariants}
      initial="initial"
      animate={inView ? "visible" : "hidden"}
    >
      <Link
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-6">
        <span className="text-primary xs:text-base dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 sm:text-sm dark:text-light w-full text-left text-4xl font-bold ">
            {" "}
            {title}{" "}
          </h2>
        </Link>
        <p className="my-2 sm:text-sm dark:text-light font-medium text-dark">
          {summary}
        </p>
        <div className="mt-2 flex items-center justify-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 sm:px-4 sm:text-base dark:bg-light dark:text-dark rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const animationVariants1 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      z: -1,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <article
      ref={ref}
      className="w-full dark:bg-dark xs:p-4 flex flex-col items-center justify-center rounded-2xl border border-solid border-dark  dark:border-light bg-light p-6 relative"
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-[1rem]
md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FramerImage
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="underline text-lg font-semibold md:text-base"
          >
            Visit
          </Link>

          <Link className="w-8 md:w-6" href={github} target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Anirban Chakraborty - Projects</title>
        <meta
          name="description"
          content="Check out my projects, showcasing my innovative coding skills, creative designs, and passion for bringing ideas to life with a unique twist."
        />
      </Head>

      <TransitionEffect />
      <main className="w-full dark:text-light mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <CreateFeaturedProject
                title="Nike Ecommerce Website"
                img={Project3}
                summary="Amazing E-commerce Nike clone made using Next.js, Strapi Headless CMS, Stripe, Redux (for cart management) and hosted using Render(Backend) and Vercel(Frontend)"
                link="https://frontend-nike-clone-anirban.vercel.app"
                github="https://github.com/AnirbanOne/frontend-nike-clone-anirban"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ToDOOOOOO! (ToDo app using Next.js and FireBase)"
                img={Project4}
                link="https://firebase-todo-anirban.vercel.app/"
                github="https://github.com/AnirbanOne/firebase-todo-anirban"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MyGPT using Next.js"
                img={Project5}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
            <CreateFeaturedProject
                title="Dashboard for CRCS portal Government"
                img={Project2}
                summary="
Introducing the CRCS Dashboard, a user-friendly portal designed to streamline operations for the Central Registrar of Cooperative Societies. Experience seamless user registration and login, real-time status updates, and easy access to comprehensive data of registered users."
                link="https://github.com/AnirbanOne/Dashboard"
                github="https://github.com/AnirbanOne/Dashboard"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="University Management System using JAVA"
                img={Project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PineApple, an Apple Clone!"
                img={Project6}
                link="/"
                github="https://github.com/AnirbanOne/PineAppletemp"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
