"use client";
import Smoothscroll from "@/components/smoothScroll";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";

import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    const paragraphs = document.querySelectorAll(".skills p");
    const skills = document.querySelector(".skills");
    paragraphs.forEach((paragraph) => {
      const bgWFull = paragraph.previousElementSibling;

      paragraph.addEventListener("mouseenter", () => {
        gsap.to(bgWFull, { duration: 0.3, width: "100%" });
        gsap.to(paragraph, { color: "black" });
      });

      paragraph.addEventListener("mouseleave", () => {
        gsap.to(bgWFull, { duration: 0.3, width: "0%" });
        gsap.to(paragraph, { color: "white" });
      });
    });

    gsap.from("#page1 img", {
      scale: 0,
      opacity: 0,
      y: 500,
    });

    gsap.to("#page2 .lw", {
      width: "100%",
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: "#page2",
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    return () => {
      paragraphs.forEach((paragraph) => {
        const bgWFull = paragraph.previousElementSibling;

        paragraph.removeEventListener("mouseenter", () => {
          gsap.to(bgWFull, { duration: 0.3, width: "100%" });
          gsap.to(paragraph, { color: "black" });
        });

        paragraph.removeEventListener("mouseleave", () => {
          gsap.to(bgWFull, { duration: 0.3, width: "0%" });
          gsap.to(paragraph, { color: "white" });
        });
      });
    };
  });

  return (
    <Smoothscroll>
      <main className="h-full w-[100%] bg-black text-white overflow-hidden">
        <Navbar />
        <section
          id="page1"
          className=" min-h-[100vh] flex items-center justify-center pt-[150px]"
        >
          <div className="w-[70%] relative flex items-center justify-center">
            <h1 className="text-6xl absolute left-0 top-0 z-10">Dev Patel</h1>
            <Image
              priority={true}
              src={"/IMG_20210314_175706.jpg"}
              height={400}
              width={350}
              alt="dev"
            />
            <p className="text-6xl text-right absolute bottom-0 right-0">
              Frontend <br /> Developer{" "}
            </p>
          </div>
        </section>

        <section id="page2" className="w-full md:px-[5vw] md:pt-[10vw] ">
          <p className="md:hidden px-10 pt-[15vh] text-3xl font-[poppins] font-thin leading-normal">
            Hey there! I&apos;m Dev, a frontend developer passionate about
            crafting beautiful, user-centric experiences. Dive into my world of
            pixels and code, where creativity and functionality merge
            seamlessly. Let&apos;s build something extraordinary together!
          </p>

          <div
            id="text"
            className="hidden py-10 text-[4vw] w-full h-[40vw] md:flex flex-col relative gap-[5vw]"
          >
            <div className="line w-full relative">
              <span className="absolute text-white/50 text-nowrap whitespace-nowrap leading-tight">
                Hey there! I&apos;m Dev, a frontend developer
              </span>
              <span className="lw absolute text-white w-0 overflow-hidden text-nowrap whitespace-nowrap leading-tight">
                Hey there! I&apos;m Dev, a frontend developer
              </span>
            </div>
            <div className="line relative">
              <span className="absolute text-white/50 text-nowrap whitespace-nowrap leading-tight">
                passionate about crafting beautiful, user-centric
              </span>
              <span className="lw absolute text-white w-0 overflow-hidden text-nowrap whitespace-nowrap leading-tight">
                passionate about crafting beautiful, user-centric
              </span>
            </div>
            <div className="line relative">
              <span className="absolute text-white/50 text-nowrap whitespace-nowrap leading-tight">
                experiences. Dive into my world of pixels and
              </span>
              <span className="lw absolute text-white w-0 overflow-hidden text-nowrap whitespace-nowrap leading-tight">
                experiences. Dive into my world of pixels and
              </span>
            </div>
            <div className="line relative">
              <span className="absolute text-white/50 text-nowrap whitespace-nowrap leading-tight">
                code, where creativity and functionality merge
              </span>
              <span className="lw absolute text-white w-0 overflow-hidden text-nowrap whitespace-nowrap leading-tight">
                code, where creativity and functionality merge
              </span>
            </div>
            <div className="line relative">
              <span className="absolute text-white/50 text-nowrap whitespace-nowrap leading-tight">
                seamlessly. Let&apos;s build something extraordinary <br />{" "}
                together!
              </span>
              <span className="lw absolute text-white w-0 overflow-hidden text-nowrap whitespace-nowrap leading-tight ">
                seamlessly. Let&apos;s build something extraordinary <br />
                together!
              </span>
            </div>
          </div>
        </section>

        <section
          id="page3"
          className="relative w-full bg-black p-10 font-[unbounded] flex flex-col gap-10 select-none"
        >
          <h1 className="text-7xl my-10 font-semibold">
            My{" "}
            <span className="text-[#FFF200] underline underline-offset-8">
              Skills.
            </span>
          </h1>
          <div className="skills text-[8vw] lg:text-[4vw] flex flex-col gap-5 text-white relative">
            <div className="relative h-max">
              <div className="absolute top-0 left-0 h-full bg-white bg-wfull"></div>
              <p className="z-10 relative p-5">Html</p>
            </div>
            <div className="relative h-max">
              <div className="absolute top-0 left-0 h-full bg-white bg-wfull"></div>
              <p className="z-10 relative p-5">Css</p>
            </div>
            <div className="relative h-max">
              <div className="absolute top-0 left-0 h-full bg-white bg-wfull"></div>
              <p className="z-10 relative p-5">Javascript</p>
            </div>
            <div className="relative h-max">
              <div className="absolute top-0 left-0 h-full bg-white bg-wfull"></div>
              <p className="z-10 relative p-5">React</p>
            </div>
            <div className="relative h-max">
              <div className="absolute top-0 left-0 h-full bg-white bg-wfull"></div>
              <p className="z-10 relative p-5">Nextjs</p>
            </div>
            <div className="relative h-max">
              <div className="absolute top-0 left-0 h-full bg-white bg-wfull"></div>
              <p className="z-10 relative p-5">Angular</p>
            </div>
            <div className="relative h-max">
              <div className="absolute top-0 left-0 h-full bg-white bg-wfull"></div>
              <p className="z-10 relative p-5">MongoDB</p>
            </div>
          </div>
        </section>

        <section
          id="page4"
          className="min-h-screen w-full p-10 font-[Unbounded] font-semibold flex flex-col gap-[5vw]"
        >
          <h1 className="text-7xl my-10 ">
            My{" "}
            <span className="text-sky-500 underline underline-offset-8">
              Works.
            </span>
          </h1>
          <div className="works columns-3 bg-white/[95] p-[5vw] rounded-lg ">
            <Image
              className="w-[100%] h-[100%]"
              loading="lazy"
              src={
                "https://saarthack.github.io/portfolio/images/work/bulb.webp"
              }
              width={500}
              height={500}
              alt=""
            />
            <Image
              className="w-[100%] h-[100%]"
              loading="lazy"
              src={
                "https://saarthack.github.io/portfolio/images/work/Lpdesign.gif"
              }
              width={500}
              height={500}
              alt=""
            />
            <Image
              className="w-[100%] h-[100%]"
              loading="lazy"
              src={
                "https://saarthack.github.io/portfolio/images/work/air-max.webp"
              }
              width={500}
              height={500}
              alt=""
            />
            <Image
              className="w-[100%] h-[100%]"
              loading="lazy"
              src={
                "https://saarthack.github.io/portfolio/images/work/girlwhocode1.webp"
              }
              width={500}
              height={500}
              alt=""
            />
            <Image
              className="w-[100%] h-[100%]"
              loading="lazy"
              src={"/4.jpg"}
              width={700}
              height={500}
              alt=""
            />
            <Image
              className="w-[100%] h-[100%]"
              loading="lazy"
              src={
                "https://saarthack.github.io/portfolio/images/work/des1.webp"
              }
              width={700}
              height={500}
              alt=""
            />
          </div>
        </section>

        <section
          id="page5"
          className="w-full px-10 min-h-[50vh] font-[Unbounded]"
        >
          <h1 className="text-7xl my-10 font-semibold ">
            Let&apos;s{" "}
            <span className="text-teal-400 underline underline-offset-8">
              Talk.
            </span>
          </h1>
          <div id="text" className="flex flex-col gap-10 mt-[5vw]">
            <Link
              className="text-5xl flex gap-5 items-center text-center"
              href={"mailto: alltoexclusive@gmail.com"}
            >
              Contact by email
              <span className="text-6xl text-center rounded-full border-2 border-white hover:bg-white hover:text-black transition-all">
                <IoIosArrowRoundForward />
              </span>
            </Link>
            <Link
              className="text-5xl flex gap-5 items-center text-center"
              href={"https://instagram.com/alltoexclusive"}
            >
              DM me in instagram
              <span className="text-6xl text-center rounded-full border-2 border-white hover:bg-white hover:text-black transition-all">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </Smoothscroll>
  );
}
