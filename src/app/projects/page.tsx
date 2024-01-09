"use client"
import React, { useEffect } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const Projects = () => {

    useEffect(() => {
        const paragraphs = document.querySelectorAll('.skills p');
        const skills = document.querySelector(".skills")
    paragraphs.forEach((paragraph) => {
      const bgWFull = paragraph.previousElementSibling;

      paragraph.addEventListener('mouseenter', () => {
        gsap.to(bgWFull, { duration: 0.3, width: '100%'     });
        gsap.to(paragraph, {  color: 'black' });
      });

      paragraph.addEventListener('mouseleave', () => {
        gsap.to(bgWFull, { duration: 0.3, width: '0%' });
        gsap.to(paragraph, { color: 'white' });

      });
    });

    // Clean up event listeners when component unmounts
    return () => {
      paragraphs.forEach((paragraph) => {
        const bgWFull = paragraph.previousElementSibling;

        paragraph.removeEventListener('mouseenter', () => {
          gsap.to(bgWFull, { duration: 0.3, width: '100%' });
          gsap.to(paragraph, {  color: 'black' });
        });

        paragraph.removeEventListener('mouseleave', () => {
          gsap.to(bgWFull, { duration: 0.3, width: '0%' });
          gsap.to(paragraph, { color: 'white' });

        });
      });
    };
      }, []);
  return (
    <>
        <div className='min-h-screen w-full bg-black p-10 font-[unbounded]'>
           <div className="skills text-5xl flex flex-col gap-5 text-white">
            <div className='relative h-max'>
                <div className='absolute top-0 left-0 h-full bg-white bg-wfull'></div>
                <p className='z-50 relative p-5'>Html</p>
            </div>
            <div className='relative h-max'>
                <div className='absolute top-0 left-0 h-full bg-white bg-wfull'></div>
                <p className='z-50 relative p-5'>Css</p>
            </div>
            <div className='relative h-max'>
                <div className='absolute top-0 left-0 h-full bg-white bg-wfull'></div>
                <p className='z-50 relative p-5'>Javascript</p>
            </div>
            <div className='relative h-max'>
                <div className='absolute top-0 left-0 h-full bg-white bg-wfull'></div>
                <p className='z-50 relative p-5'>React</p>
            </div>
            <div className='relative h-max'>
                <div className='absolute top-0 left-0 h-full bg-white bg-wfull'></div>
                <p className='z-50 relative p-5'>Nextjs</p>
            </div>
            <div className='relative h-max'>
                <div className='absolute top-0 left-0 h-full bg-white bg-wfull'></div>
                <p className='z-50 relative p-5'>Angular</p>
            </div>
           </div>
        </div>
    </>
  )
}

export default Projects