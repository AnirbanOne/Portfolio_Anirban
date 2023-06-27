import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import article3 from "../../public/images/articles/merit.png";
import article4 from "../../public/images/articles/autoagro.png";
import article5 from "../../public/images/articles/Blockchain.png";
import article6 from "../../public/images/articles/Mitigation.png";
import article7 from "../../public/images/articles/Heartbleed.png";
import article8 from "../../public/images/articles/pyhton.png";
import article9 from "../../public/images/articles/autoagrocert.png";
import TransitionEffect from "@/components/TransitionEffect";
const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event){
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMOuseLeave(event){
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank"
    onMouseMove={handleMouse}
    onMouseLeave={handleMOuseLeave}
    >
      <h2 className="capitalize md:text-base dark:text-light text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
      initial={{opacity: 0}} 
      whileInView={{opacity: 1, transition: {durartion: 0.2}}}
      style={{x:x, y:y}} ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden" />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
    initial={{y: 200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
      viewport={{once: true}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light dark:bg-dark  text-dark first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4
        sm:flex-col
        "
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:pl-0 xs:text-sm sm:self-start">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 dark:bg-dark dark:border-light w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-[2rem]"></div>

      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h2 className="capitalize xs:text-lg text-2xl font-bold my-2 hover:underline underline-offset-2 mt-4">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">{time} </span>
    </li>
  );
};

const others = () => {
  return (
    <>
      <Head>
        <title>Anirban | Others page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 dark:text-light flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Embracing the Unfolded Chapters" className="mb-16  sm:mb-8 sm:!text-6xl xs:!text-4xl " />

          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticle
              title="Agriculture Management Using IoT and ML"
              summary="Revolutionizing agriculture with IoT and ML, my project combines automatic irrigation using IoT and a Kotlin Android app for leaf disease detection. Maximizing water efficiency and crop health, this innovative solution transforms traditional farming practices into smart and sustainable methods."
              time="1 min watch"
              link="https://www.youtube.com/watch?v=2Gy07Aa7mYQ"
              img={article4}
            />
            <FeaturedArticle
              title="Artificial Intelligence Voice Assistant Using Python, Text to Speech and GPT"
              summary="Unleash the power of our Artificial Assistant project. Seamlessly integrating Text-to-Speech, Wikipedia, Wolframalpha, and ChatGPT, it revolutionizes information retrieval and offers immersive conversational experiences. Redefining user interactions with technology, it's the ultimate knowledge companion at your fingertips. "
              time="30 min read"
              link="https://drive.google.com/file/d/1SfPLczSaXTE-3drgU9z-zqYAlLRB921Y/view?usp=drive_link"
              img={article8}
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Winner of Hackfrenzy Hackahon Organized by IIIT, Sri City, Chitoor, Andhra Pradesh"
              img={article9}
              date="April 07, 2023"
              link="https://drive.google.com/file/d/1l0MSkM9igNjkMF3STFjofKpRY0wV9j71/view?usp=drive_link"
            />
            <Article
              title="Illuminating the Shadows: Advanced Insights into the Heartbleed Attack on SSL Enhancing Information Security"
              img={article7}
              date="6637/2023-CO/L"
              link="https://drive.google.com/file/d/16Q33vkghJw4NunvM2P_b-IT7NFEA0rWL/view?usp=drive_link"
            />
            <Article
              title="Fortifying Cloud Computing Environments: Strategies and Best Practices for Mitigating Botnet-Based DDoS Attacks"
              img={article6}
              date="6882/2023-CO/L"
              link="https://drive.google.com/file/d/11nHymZ9ZGQYKKRXkzRGwAJzqtlQExJJi/view?usp=drive_link"
            />
            <Article
              title="Revolutionizing Network Infrastructure: Harnessing Blockchain for Enhanced Security, Scalability, and Decentralization"
              img={article5}
              date="6541/2023-CO/L"
              link="https://drive.google.com/file/d/1QW84jNHdwoBDN1E395SCXv4bPjLBw1MO/view?usp=drive_link"
            />
            <Article
              title="Certificate of Outstanding performance In Academics"
              img={article3}
              date="2020-21"
              link="https://drive.google.com/file/d/1CqO_eulRpiWIzSNkpwH_pM4pE-Z4lStZ/view?usp=drive_link"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default others;

// 3.32