import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

function Lookup() {
  useGSAP(() => {
    gsap.to(".lookup img", {
      x: "-100%",
      color: "#4C83EF",
      scrollTrigger: {
        trigger: ".lookup",
        scroller: "body",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div className="lookup h-full flex justify-end items-center bg-white">
      <div className='bg-linear-to-b from-[#4e46e56c] to-transparent h-70 w-full absolute top-0 left-0'></div>
      <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26ed7bfe0ffe6f57a010_hero-image.webp" alt="" className='w-full h-full object-contain z-10' />
      <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26ed7bfe0ffe6f57a010_hero-image.webp" alt="" className='w-full h-full object-contain z-10' />
      <img src="https://cdn.prod.website-files.com/662c8f5868c6566dc279808a/662e26ed7bfe0ffe6f57a010_hero-image.webp" alt="" className='w-full h-full object-contain z-10' />
    </div>
  )
}

export default Lookup
