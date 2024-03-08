"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GridContainer } from "./grid";
import gsap from "gsap";
import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand2 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";
export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);
  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      { rotate: 10, duration: 1 }
    );

    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      }
    );
    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);
  return (
    <section className="relative w-full bg-green-primary h-section-hero border-t border-t-green-border pt-16 overflow-hidden bg-hero bg-top bg-no-repeat">
      <GridContainer className="flex flex-col items-center">
        <div className="w-full max-w-text-hero text-center" ref={textHeroRef}>
          <h3 className="text-xl font-medium text-green-active mb-4">
            New course focused on Instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-3">
            Unlock your skills
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2">
              <Image src={IconFile} alt="hero-icon" />
              <span className="text-white font-medium">
                Subscribe to waiting list
              </span>
            </button>
            <button className="py-4 px-5 bg-green-button rounded-full text-green-primary font-bold">
              Start now
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-area-icons mt-4 mt-28">
          <Image
            src={IconHand}
            alt="hand icon"
            className="absolute left-0 top-0"
          />
          <Image
            src={IconHand2}
            alt="hand icon 2"
            className="absolute right-0 bottom-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-w-area-mockups flex justify-between">
          <Image
            src={IconMockup}
            alt="Phone mockup image"
            className="relative top-[1.1rem] left-[3.3125rem]"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="Phone mockup image"
            className="relative top-[1.1rem] right-[3.3125rem]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
