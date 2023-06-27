import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const first = useRef(null);

  return (
    <li
      ref={first}
      className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-center"
    >
      <LiIcon reference={first} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}{" "}
          </a>
        </h3>
        <span className="dark:text-light/75 capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl md:text-6xl xs:text-4xl md:mb-16 mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:bg-light absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
         md:w-[2px] md:left-[30px] xs:left-[20px]
         "
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            position="Frontend Developer"
            company="Remostart"
            time="08,2022 - 10,2022"
            address="Nagpur, Maharashtra"
            work="Collaborated with a team of 6 developers and 3
designers to develop 2 web applications using modern
front-end technologies such as React, Bootstrap, Tailwind, and other frameworks
to create responsive UIs, resulting in a 15% faster load
time and 20% increase in user engagement."
          />
          <Details
            position="Java Programmer"
            company="Cybrix Technology"
            time="06,2022 - 09,2022"
            address="Nagpur, Maharashtra"
            work="Learned Java programming on the job at Cybrix, gaining
hands-on experience by working on real-world projects and applied Java programming skills to create several
applications for Cybrix"
          />
          <Details
            position="Campus Ambassador"
            company="Internshala"
            time="02,2021 - 03,2022"
            address="Nagpur, Maharashtra"
            work="As a Campus Ambassador at Internshala, I attracted and onboarded numerous users, expanding the platform's reach. The positive reviews and feedback received validated its effectiveness as a trusted resource for internships and career opportunities. Through events and workshops, I promoted Internshala, enhancing individuals' career prospects and fostering valuable connections."
          />
          {/* <Details
              position="Software Engineer"
              company="@Google"
              time="2022-Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
            /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
