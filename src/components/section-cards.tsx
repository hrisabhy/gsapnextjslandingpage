"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MockupMain from "/public/mockup-main.png";
import CardImage1 from "/public/image-01.png";
import CardImage2 from "/public/image-02.png";
import CardImage3 from "/public/image-03.png";
import CardImage4 from "/public/image-04.png";
import CardImage5 from "/public/image-05.png";
import CardImage6 from "/public/image-06.png";

gsap.registerPlugin(ScrollTrigger);

export function SectionCards() {
  const mockupRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const card01Ref = useRef(null);
  const card02Ref = useRef(null);
  const card03Ref = useRef(null);
  const card04Ref = useRef(null);
  const card05Ref = useRef(null);
  const card06Ref = useRef(null);
  const section = sectionRef.current;
  function animateCards(images: null[], position: number) {
    gsap.fromTo(
      images,
      {
        opacity: 0,
        x: position,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: "center center",
        },
      }
    );
  }
  useEffect(() => {
    const mockup = mockupRef.current;
    const title = titleRef.current;
    const section = sectionRef.current;
    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "65% center",
          end: "",
        },
      }
    );
    gsap.fromTo(
      mockup,
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power5.out",
      }
    );
    const img01 = card01Ref.current;
    const img02 = card02Ref.current;
    const img03 = card03Ref.current;
    const img04 = card04Ref.current;
    const img05 = card05Ref.current;
    const img06 = card06Ref.current;
    const leftImages = [img01, img02, img03];
    const rightImages = [img04, img05, img06];
    animateCards(leftImages, 50);
    animateCards(rightImages, -50);
  }, []);
  return (
    <>
      <section className="w-full pb-20" ref={sectionRef}>
        <Image
          src={MockupMain}
          alt="Mockup main image"
          className="sticky z-10 top-56 mx-auto -mt-[32rem] mb-6 opacity-0"
          ref={mockupRef}
        />
        <h2
          className="text-center text-7xl font-medium mb-56 opacity-0"
          ref={titleRef}
        >
          Do it <span className="text-green-title-card">yourself</span> from
          home
        </h2>
        <div className="relative w-full max-w-area-cards h-area-cards mx-auto">
          <Image
            src={CardImage1}
            ref={card01Ref}
            className="absolute top-8 left-44"
            alt="Card Image 1"
          />
          <Image
            src={CardImage2}
            ref={card02Ref}
            className="absolute left-0 bottom-32"
            alt="Card Image 2"
          />
          <Image
            src={CardImage3}
            ref={card03Ref}
            className="absolute bottom-0 left-80"
            alt="Card Image 3"
          />
          <Image
            src={CardImage4}
            ref={card04Ref}
            className="absolute top-0 right-32"
            alt="Card Image 4"
          />
          <Image
            src={CardImage5}
            ref={card05Ref}
            className="absolute right-0 bottom-28"
            alt="Card Image 5"
          />
          <Image
            src={CardImage6}
            ref={card06Ref}
            className="absolute bottom-0 right-80"
            alt="Card Image 6"
          />
        </div>
      </section>
    </>
  );
}
