import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Image from "next/image";
import profilePic from "../../public/images/profile/e3.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000});
const isInView = useInView(ref, {once: true});
 
useEffect(()=>{
   if (isInView) {
        motionValue.set(value);
   }

}, [isInView, value, motionValue])

useEffect(()=>{
    springValue.on("change", (latest)=> {
       if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
       }
    })
   
   }, [springValue, value])
   
    

    return <span ref={ref}></span>
}




const about = () => {
  return (
    <>
      <Head>
        <title>Anirban | About page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="dark:text-light flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="md:order-2 md:col-span-8 col-span-3 flex flex-col items-start justify-start xl:col-span-4">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
              Hey there, I'm Anirban, a self-motivated Full Stack Web Developer with a passion for AWS and Google Cloud. Proficient in JAVA and always eager to learn new technologies, I have a keen interest in the world of DevOps. Beyond coding, I find joy in exploring ethical hacking and expressing my creativity with Blender.
              </p>
              <p className="font-medium my-4">
              Design, for me, goes beyond aesthetics—it's about problem-solving and creating intuitive, enjoyable user experiences. Whether it's a website, mobile app, or any digital product, I bring a commitment to design excellence and user-centered thinking to every project.
              </p>
              <p className="font-medium">
              Let's collaborate to turn your vision into reality, combining the power of technology with innovative solutions and a touch of artistry. Together, we can create remarkable digital experiences that make a lasting impact.
              </p>
            </div>
            
            
            <div className="dark:bg-dark dark:border-light col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
            xl:col-span-4 md:order-1 md:col-span-8">
              <div className="dark:bg-light absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
              " />
              <Image
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                src={profilePic}
                alt="Anirban"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="md:order-3 col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between">
              
              <div className="flex flex-col xl:items-center items-end justify-center">
                <span className="inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold">
                    <AnimatedNumbers value={10} />+
                </span>
                <h2 className="dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75">
                  Skills
                </h2>
              </div>
              
              <div className="flex flex-col xl:items-center items-end justify-center">
                <span className="inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold">
                <AnimatedNumbers value={7} />+
                </span>
                <h2 className="dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75">
                  Live Projects
                </h2>
              </div>
              
              <div className="flex flex-col xl:items-center items-end justify-center">
                <span className="inline-block md:text-6xl sm:text-5xl xs:text-4xl text-7xl font-bold">
                <AnimatedNumbers value={3} />+
                </span>
                <h2 className="dark:text-light/75 text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75">
                  Experiences
                </h2>
              </div>
            
            </div>
          </div>
          

          <Skills/>
          <Experience/>
          <Education/>
        
        </Layout>
      </main>
    </>
  );
};

export default about;
