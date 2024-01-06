"use client";
import Smoothscroll from "@/components/smoothScroll";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiAngular, SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {

    gsap.from("#page1 img",{
      scale:0,
      opacity:0,
      y:500
    })

    gsap.to("#page2 #text .sec", {
      width: 1200,
      stagger:0.3,
      duration:1,
      scrollTrigger: {
        trigger: "#page2",
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    gsap.to("#page3",{
      y:-200,
      scrollTrigger:{
        trigger:"#page3",
        start:"top 80%",
        end:"bottom bottom",
        scrub:1,
      }
    })
    gsap.from("#page3 .skills img",{
      y:300,
      opacity:0,
      stagger:0.2,
      scrollTrigger:{
        trigger:"#page3",
        start:"top 60%",
        end:"center 60%",
        scrub:1,
      }
    })
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
        <section id="page2" className="p-[10vw] h-[100vh] md:h-max">
          <p className="md:invisible text-3xl font-[poppins] font-thin leading-normal">Hey there! I'm Dev, a frontend developer
passionate about crafting beautiful, user-centric
experiences. Dive into my world of pixels and
code, where creativity and functionality merge 
seamlessly. Let's build something extraordinary together!</p>
          <div
            id="text"
            className="relative text-left font-[poppins] text-white/50 invisible md:visible text-5xl leading-normal"
          >
            <div className="relative">
              <span>Hey there! I'm Dev, a frontend developer</span>
              <span className="invisible md:visible md:absolute sec left-0 top-0 text-nowrap overflow-hidden">
                Hey there! I'm Dev, a frontend developer
              </span>
            </div>
            <div className="relative">
              <span> passionate about crafting beautiful, user-centric</span>
              <span className="invisible md:visible md:absolute sec left-0 top-0 text-nowrap overflow-hidden">
                passionate about crafting beautiful, user-centric
              </span>
            </div>
            <div className=" relative">
              <span>experiences. Dive into my world of pixels and</span>
              <span className="invisible md:visible md:absolute sec left-0 top-0 text-nowrap overflow-hidden">
                experiences. Dive into my world of pixels and
              </span>
            </div>
            <div className="relative">
              <span> code, where creativity and functionality merge </span>
              <span className="invisible md:visible md:absolute sec left-0 top-0 text-nowrap overflow-hidden">
          
                code, where creativity and functionality merge
              </span>
            </div>
            <div className="relative">
              <span>
                seamlessly. Let's build something extraordinary together!
              </span>
              <span className="invisible md:visible md:absolute sec left-0 top-0 text-nowrap overflow-hidden">
                seamlessly. Let's build something extraordinary <br /> together!
              </span>
            </div>
          </div>
        </section>
        <section
          id="page3"
          className="h-max w-full pt-[10vw] px-[10vw]"
        >
          <h1 className="text-7xl font-[poppins]">
            Things i'm <span className="text-yellow-400">good</span> at
          </h1>
          <div className="w-full flex flex-wrap gap-5 text-8xl justify-between mt-[10vh] skills">
            <Image src={"/html.svg"} height={100} width={100} alt="" />
            <Image src={"/css.svg"} height={100} width={100} alt="" />
            <Image src={"/js.svg"} height={100} width={100} alt="" />
            <Image src={"/nextjs.svg"} height={100} width={100} alt="" />
            <Image src={"/angular.svg"} height={100} width={100} alt="" />
            <Image src={"/mongodb.svg"} height={100} width={100} alt="" />
            <Image src={"/react.svg"} height={100} width={100} alt="" />


          </div>
        </section>
        <section id="page4" className="h-screen w-full px-[10vw]">
        <h1 className="text-7xl font-[poppins]">
            My <span className="text-orange-500">Works.</span>
          </h1>
        </section>
      </main>
    </Smoothscroll>
  );
}
