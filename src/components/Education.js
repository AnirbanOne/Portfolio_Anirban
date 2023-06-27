import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const first = useRef(null);

  return (
    <li
      ref={first}
      className="my-8 md:w-[80%] first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center"
    >
      <LiIcon reference={first} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize sm:text-xl xs:text-lg font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold md:text-6xl xs:text-4xl md:mb-16 text-8xl mb-32 w-full text-center">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-light left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Technology In Information Technology"
            time="2020-2024"
            place="G H Raisoni College Of Engineering, Nagpur, Maharashtra"
            info="Relevant courses included Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, Informaton Security and Cryptography and Web Development."
          />
          <Details
            type="Higher Secondary / Junior College"
            time="2017-2019"
            place="Nutan Bharat Junior college, Nagpur, Maharashtra"
            info="During my higher secondary education, I pursued General Science, covering key subjects such as Physics, Chemistry, Mathematics, and Biology. "
          />
          <Details
            type="Primary and Secondary Education"
            time="2006-2017"
            place="School Of Scholars, Nagpur, Maharashtra"
            info="The place where my awkwardness turned into awesomeness, and my math skills went from counting fingers to conquering complex equations. Thankful for those years that made me the cool and quirky individual I am today!"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
