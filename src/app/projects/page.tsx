"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./projects.module.css";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-black relative">
        <div className="h-60 w-60 bg-blue-500 blur-[180px] absolute left-0 top-0" />
        <h1 className="text-5xl font-[Unbounded] text-white relative p-10">
          Projects.
        </h1>
        <div id={styles.projectsCol} className="columns-4 select-none pointer-events-none">
          <Image
            onContextMenu={(e)=> 
            {
              if(e.button == 2){
                e.preventDefault()
              }
            }}
            className="w-[100%] h-[100%]"
            loading="lazy"
            src={"https://saarthack.github.io/portfolio/images/work/bulb.webp"}
            width={500}
            height={500}
            alt=""
          />
          <Image
           onContextMenu={(e)=> 
            {
              if(e.button == 2){
                e.preventDefault()
              }
            }}
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
           onContextMenu={(e)=> 
            {
              if(e.button == 2){
                e.preventDefault()
              }
            }}
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
           onContextMenu={(e)=> 
            {
              if(e.button == 2){
                e.preventDefault()
              }
            }}
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
           onContextMenu={(e)=> 
            {
              if(e.button == 2){
                e.preventDefault()
              }
            }}
            className="w-[100%] h-[100%]"
            loading="lazy"
            src={
              "https://saarthack.github.io/portfolio/images/work/des1.webp"
            }            width={500}
            height={500}
            alt=""
          />
          <Image
           onContextMenu={(e)=> 
            {
              if(e.button == 2){
                e.preventDefault()
              }
            }}
            className="w-[100%] h-[100%]"
            loading="lazy"
            src={"/4.jpg"}
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Projects;

// useEffect(() => {
//   const paragraphs = document.querySelectorAll('.skills p');
//   const skills = document.querySelector(".skills")
// paragraphs.forEach((paragraph) => {
// const bgWFull = paragraph.previousElementSibling;

// paragraph.addEventListener('mouseenter', () => {
//   gsap.to(bgWFull, { duration: 0.3, width: '100%'     });
//   gsap.to(paragraph, {  color: 'black' });
// });

// paragraph.addEventListener('mouseleave', () => {
//   gsap.to(bgWFull, { duration: 0.3, width: '0%' });
//   gsap.to(paragraph, { color: 'white' });

// });
// });

// // Clean up event listeners when component unmounts
// return () => {
// paragraphs.forEach((paragraph) => {
//   const bgWFull = paragraph.previousElementSibling;

//   paragraph.removeEventListener('mouseenter', () => {
//     gsap.to(bgWFull, { duration: 0.3, width: '100%' });
//     gsap.to(paragraph, {  color: 'black' });
//   });

//   paragraph.removeEventListener('mouseleave', () => {
//     gsap.to(bgWFull, { duration: 0.3, width: '0%' });
//     gsap.to(paragraph, { color: 'white' });

//   });
// });
// };
// }, []);
