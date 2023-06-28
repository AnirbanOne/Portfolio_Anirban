import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "../components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/main.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Anirban Chakraborty | Portfolio</title>
        <meta
          name="description"
          content="Anirban Chakraborty's portfolio showcasing innovative full stack web development, Java expertise, AWS and GCP skills, and networking enthusiasm."
        />
        <meta
          name="keywords"
          content="Anirban Chakraborty, portfolio, web development, Java, AWS, GCP, networking"
        />
      </Head>

      <TransitionEffect />
      <main className="dark:text-light flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                src={profilePic}
                alt="Anirban Chakraborty - Profile Photo"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Unleashing Innovation with Code, Design, and Passion."
                className="!text-6xl !text-left
            xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Innovative Full Stack Web Dev | JAVA aficionado | AWS, GCP,
                DevOps | Tech Saavy | Networking Enthusiast | Let's bring your
                ideas to life with a funky twist!
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Anirban-Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-2"} />
                </Link>
                <Link
                  href="mailto:anirban.chk1@gmail.com"
                  target={"_blank"}
                  className=" dark:text-light ml-4 text-lg font-medium capitalize text-dark underline
                md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-[12rem] inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Anirban"
            className="absolute w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
